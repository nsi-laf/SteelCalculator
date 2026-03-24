// Determines the "Primary Backbone" of a metal (e.g., Oghmium -> Tungsteel -> Grain Steel -> Pig Iron -> Blood Ore -> Granum)
function getPrimaryChain(targetMetal) {
    let chain = [targetMetal];
    let current = targetMetal;
    while (current) {
        let rec = RECIPES[current];
        if (rec) {
            if (rec.type === 'alloy') current = rec.primary;
            else if (rec.type === 'smelt' || rec.type === 'bake') current = rec.ore;
            else if (rec.type === 'refine') current = rec.ore;
            else current = null;
        } else if (EXTRACT_MAP[current]) {
            current = EXTRACT_MAP[current][0]; // Granum, Saburra, Tephra, Calx are always mapped first
        } else {
            current = null;
        }
        if (current) chain.push(current);
    }
    return chain;
}

// Determines exactly which items are strictly REQUIRED for the target metal (Hides byproducts!)
function getRelevantItems(targetMetal) {
    let relevant = new Set([targetMetal]);
    let queue = [targetMetal];
    
    while(queue.length > 0) {
        let item = queue.shift();
        let rec = RECIPES[item];
        
        if (rec) {
            let deps = [];
            if (rec.type === 'alloy') deps = [rec.primary, rec.cat1, rec.cat2];
            if (rec.type === 'smelt' || rec.type === 'bake') deps = [rec.ore, rec.cat];
            if (rec.type === 'refine') deps = [rec.ore, rec.cat];
            deps.forEach(d => { if (d && !relevant.has(d)) { relevant.add(d); queue.push(d); } });
        }
        
        // Only trace backward through required base extractions
        if (EXTRACT_MAP[item]) {
            EXTRACT_MAP[item].forEach(d => { if (d && !relevant.has(d)) { relevant.add(d); queue.push(d); } });
        }
    }
    
    return relevant;
}

function resolveTree(targetMetal, amount, bankData, mR) {
    let deficits = {};
    let steps = [];
    const t = i18n[currentLang].items;
    const yieldWord = i18n[currentLang].stepYields;
    const bankCopy = { ...bankData };

    function decompose(item, qty) {
        if (!qty || qty <= 0) return;
        
        let available = bankCopy[item] || 0;
        let missing = qty;
        
        if (available > 0) {
            let used = Math.min(available, missing);
            bankCopy[item] -= used;
            missing -= used;
        }

        if (missing <= 0) return;

        const recipe = RECIPES[item];
        if (!recipe) {
            deficits[item] = (deficits[item] || 0) + missing;
            return;
        }

        if (recipe.type === 'alloy') {
            const primaryNeeded = Math.ceil(missing / (0.7 * mR));
            const cat1Needed = Math.ceil(primaryNeeded * 0.5);
            const cat2Needed = Math.ceil(primaryNeeded * 0.5);
            
            steps.unshift(`Alloy <span class="highlight">${primaryNeeded.toLocaleString()} ${t[recipe.primary]||recipe.primary}</span> + <span class="highlight">${cat1Needed.toLocaleString()} ${t[recipe.cat1]||recipe.cat1}</span> + <span class="highlight">${cat2Needed.toLocaleString()} ${t[recipe.cat2]||recipe.cat2}</span> ${yieldWord} <span class="highlight">${missing.toLocaleString()} ${t[item]||item}</span>`);
            
            decompose(recipe.primary, primaryNeeded);
            decompose(recipe.cat1, cat1Needed);
            decompose(recipe.cat2, cat2Needed);
        }
        else if (recipe.type === 'smelt' || recipe.type === 'bake') {
            const oreNeeded = Math.ceil(missing / (recipe.oreYield * mR));
            const catNeeded = Math.ceil(oreNeeded * recipe.catReq);
            
            const action = recipe.type === 'smelt' ? 'Smelt' : 'Bake';
            steps.unshift(`${action} <span class="highlight">${oreNeeded.toLocaleString()} ${t[recipe.ore]||recipe.ore}</span> + <span class="highlight">${catNeeded.toLocaleString()} ${t[recipe.cat]||recipe.cat}</span> ${yieldWord} <span class="highlight">${missing.toLocaleString()} ${t[item]||item}</span>`);
            
            decompose(recipe.ore, oreNeeded);
            if (recipe.cat) decompose(recipe.cat, catNeeded);
        }
        else if (recipe.type === 'refine') {
            const oreNeeded = Math.ceil(missing * recipe.oreReq);
            const catNeeded = recipe.cat ? Math.ceil(missing * recipe.catReq) : 0;
            
            let stepStr = `Refine <span class="highlight">${oreNeeded.toLocaleString()} ${t[recipe.ore]||recipe.ore}</span>`;
            if (recipe.cat) stepStr += ` + <span class="highlight">${catNeeded.toLocaleString()} ${t[recipe.cat]||recipe.cat}</span>`;
            steps.unshift(stepStr + ` ${yieldWord} <span class="highlight">${missing.toLocaleString()} ${t[item]||item}</span>`);
            
            decompose(recipe.ore, oreNeeded);
            if (recipe.cat) decompose(recipe.cat, catNeeded);
        }
    }

    decompose(targetMetal, amount);
    return { deficits, steps };
}

function resolveExtractions(deficits, route, mE, mM, bankData) {
    let raw = { ...deficits }; 
    let bp = {};
    let extSteps = [];
    
    const t = i18n[currentLang];
    const s = (val) => `<span class="highlight">${val.toLocaleString()}</span>`;

    let dPyr = raw.pyroxene || 0;
    if (dPyr > 0) {
        let galbReq = Math.ceil(dPyr / (0.622 * mE));
        raw.galbinum = (raw.galbinum || 0) + galbReq;
        extSteps.unshift(`${t.stepExtract} ${s(galbReq)} ${t.items.galbinum} ${t.stepYields} ${s(dPyr)} ${t.items.pyroxene}`);
        delete raw.pyroxene;
    }

    let dGalb = raw.galbinum || 0;
    let dRB = raw.redbleckblende || 0;
    if (dGalb > 0 || dRB > 0) {
        let yGalb = route === 'efficient' ? 0.19 : 0.114;
        let yRB = route === 'efficient' ? 0.0774 : 0.0312;
        let reqTGalb = Math.ceil(dGalb / (yGalb * mE));
        let reqTRB = Math.ceil(dRB / (yRB * mE));
        let reqTephra = Math.max(reqTGalb, reqTRB);

        let genGalb = Math.ceil(reqTephra * yGalb * mE);
        let genRB = Math.ceil(reqTephra * yRB * mE);
        
        extSteps.unshift(`${t.stepExtract} ${s(reqTephra)} ${t.items.tephra} ${t.stepYields} ${s(genGalb)} ${t.items.galbinum} ${t.stepAnd} ${s(genRB)} ${t.items.redbleckblende}`);
        
        raw.tephra = reqTephra;
        if (genGalb > dGalb) bp.galbinum = genGalb - dGalb;
        if (genRB > dRB) bp.redbleckblende = genRB - dRB;
        delete raw.galbinum; delete raw.redbleckblende;
    }

    let dBO = raw.bo || 0;
    let dGP = raw.granumpowder || 0;
    if (dBO > 0 || dGP > 0) {
        if (route === 'byproduct') {
            let yBO = 0.0770 * mE * mM;
            let yGP = 0.2940 * mE;
            let reqGranum = Math.max(Math.ceil(dBO / yBO), Math.ceil(dGP / yGP));
            let genBO = Math.ceil(reqGranum * yBO);
            let genGP = Math.ceil(reqGranum * yGP);
            
            extSteps.unshift(`${t.stepExtract} ${s(reqGranum)} ${t.items.granum} ${t.stepYields} ${s(genBO)} ${t.items.bo} ${t.stepAnd} ${s(genGP)} ${t.items.granumpowder}`);
            
            raw.granum = reqGranum;
            bp.amarantum = Math.ceil(reqGranum * 0.0882 * mE);
            bp.flakestone = Math.ceil(reqGranum * 0.0140 * mE);
        } else {
            let crushForGP = Math.ceil(dGP / (0.2940 * mE));
            let boFromCrush = Math.ceil(crushForGP * 0.0770 * mE);
            let remainBO = Math.max(0, dBO - boFromCrush);
            let attractForBO = Math.ceil(remainBO / (0.198 * mE * mM));
            let cpForAttract = Math.ceil(attractForBO * 0.0715);
            
            raw.granum = crushForGP + attractForBO;
            raw.cp = (raw.cp || 0) + cpForAttract;
            
            if (crushForGP > 0) {
                extSteps.unshift(`${t.stepExtract} ${s(crushForGP)} ${t.items.granum} ${t.stepYields} ${s(dGP)} ${t.items.granumpowder}`);
                bp.amarantum = Math.ceil(crushForGP * 0.0882 * mE);
                bp.flakestone = Math.ceil(crushForGP * 0.0140 * mE);
            }
            if (attractForBO > 0) {
                extSteps.unshift(`${t.stepExtract} ${s(attractForBO)} ${t.items.granum} + ${s(cpForAttract)} ${t.items.cp} ${t.stepYields} ${s(remainBO)} ${t.items.bo}`);
            }
        }
        delete raw.bo; delete raw.granumpowder;
    }

    let dSP = raw.sp || 0;
    let dMal = raw.malachite || 0;
    let dCal = raw.calamine || 0;
    let dBleck = raw.bleckblende || 0;
    if (dSP > 0 || dMal > 0 || dCal > 0 || dBleck > 0) {
        let reqSaburra = Math.max(
            Math.ceil(dSP / (0.4275 * mE)),
            Math.ceil(dMal / (0.0950 * mE)),
            Math.ceil(dCal / (0.05 * mE)),
            Math.ceil(dBleck / (0.19 * mE))
        );
        
        let waterReq = Math.ceil(reqSaburra * 0.1);
        let genSP = Math.ceil(reqSaburra * 0.4275 * mE);
        let genMal = Math.ceil(reqSaburra * 0.0950 * mE);
        
        extSteps.unshift(`${t.stepExtract} ${s(reqSaburra)} ${t.items.saburra} + ${s(waterReq)} ${t.items.water} ${t.stepYields} ${s(genSP)} ${t.items.sp} ${t.stepAnd} ${s(genMal)} ${t.items.malachite}`);
        
        raw.saburra = reqSaburra;
        raw.water = (raw.water || 0) + waterReq;
        if(genSP > dSP) bp.sp = genSP - dSP;
        if(genMal > dMal) bp.malachite = genMal - dMal;
        
        delete raw.sp; delete raw.malachite; delete raw.calamine; delete raw.bleckblende;
    }

    let dCP = raw.cp || 0;
    let dCoal = raw.coal || 0;
    if (dCP > 0 || dCoal > 0) {
        if (route === 'efficient') {
            let reqCP = Math.ceil(dCP / (0.2058 * mE));
            let coalFromGrind = Math.ceil(reqCP * 0.1140 * mE);
            let waterReq = Math.ceil(reqCP * 0.1);
            
            if (reqCP > 0) {
                extSteps.unshift(`${t.stepExtract} ${s(reqCP)} ${t.items.calx} + ${s(waterReq)} ${t.items.water} ${t.stepYields} ${s(dCP)} ${t.items.cp} ${t.stepAnd} ${s(coalFromGrind)} ${t.items.coal}`);
            }
            
            raw.calx = (raw.calx || 0) + reqCP;
            raw.water = (raw.water || 0) + waterReq;
            
            let remainCoal = Math.max(0, dCoal - coalFromGrind);
            if (remainCoal > 0) {
                let crushReq = Math.ceil(remainCoal / (0.2160 * mE));
                extSteps.unshift(`${t.stepExtract} ${s(crushReq)} ${t.items.calx} ${t.stepYields} ${s(remainCoal)} ${t.items.coal}`);
                raw.calx += crushReq;
                bp.calspar = Math.ceil(crushReq * 0.0360 * mE);
            }
        } else {
            let reqCoal = Math.ceil(dCoal / (0.2160 * mE));
            let cpFromCrush = Math.ceil(reqCoal * 0.1361 * mE);
            
            if (reqCoal > 0) {
                extSteps.unshift(`${t.stepExtract} ${s(reqCoal)} ${t.items.calx} ${t.stepYields} ${s(dCoal)} ${t.items.coal} ${t.stepAnd} ${s(cpFromCrush)} ${t.items.cp}`);
            }
            raw.calx = (raw.calx || 0) + reqCoal;
            
            let remainCP = Math.max(0, dCP - cpFromCrush);
            if (remainCP > 0) {
                let grindReq = Math.ceil(remainCP / (0.2058 * mE));
                let waterReq = Math.ceil(grindReq * 0.1);
                extSteps.unshift(`${t.stepExtract} ${s(grindReq)} ${t.items.calx} + ${s(waterReq)} ${t.items.water} ${t.stepYields} ${s(remainCP)} ${t.items.cp}`);
                raw.calx += grindReq;
                raw.water = (raw.water || 0) + waterReq;
            }
        }
        delete raw.cp; delete raw.coal;
    }

    Object.keys(raw).forEach(k => { raw[k] = Math.max(0, raw[k] - (bankData[k] || 0)); });
    return { raw, bp, extSteps };
}