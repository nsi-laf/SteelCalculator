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
            current = EXTRACT_MAP[current][0]; 
        } else {
            current = null;
        }
        if (current) chain.push(current);
    }
    return chain;
}

function getRelevantItems(targetMetal, activePrefs = new Set()) {
    let relevant = new Set([targetMetal]);
    let queue = [targetMetal];
    
    while(queue.length > 0) {
        let item = queue.shift();
        let rec = RECIPES[item];
        
        if (item === 'messing' && activePrefs.has('bor')) {
            rec = { type: 'alloy', primary: 'cuprum', cat1: 'bor', cat2: 'sp' };
        }
        
        if (rec) {
            let deps = [];
            if (rec.type === 'alloy') deps = [rec.primary, rec.cat1, rec.cat2];
            if (rec.type === 'smelt' || rec.type === 'bake') deps = [rec.ore, rec.cat];
            if (rec.type === 'refine') deps = [rec.ore, rec.cat];
            deps.forEach(d => { if (d && !relevant.has(d)) { relevant.add(d); queue.push(d); } });
        }
        
        if (EXTRACT_MAP[item]) {
            EXTRACT_MAP[item].forEach(d => { if (d && !relevant.has(d)) { relevant.add(d); queue.push(d); } });
        }
    }
    
    return relevant;
}

// Strict Wording Helper for Generating Pipeline Steps
function makeExtStr(actionKey, qty, item, yields, catQty = 0, catItem = null) {
    const t = i18n[currentLang];
    let action = t[actionKey] || actionKey;
    
    // "which yields" for furnace, "yields" for everything else
    let yieldWord = (actionKey === 'stepFurnace' || actionKey === 'stepBlastFurnace') ? t.stepWhichYields : t.stepYields;
    
    let resStr = `<span class="highlight">${qty.toLocaleString()} ${t.items[item]||item}</span>`;
    if (catQty > 0 && catItem) {
        resStr += ` ${t.stepAnd} <span class="highlight">${catQty.toLocaleString()} ${t.items[catItem]||catItem}</span>`;
    }
    
    let yStr = yields.map(y => `<span class="highlight">${y.amount.toLocaleString()} ${t.items[y.item]||y.item}</span>`).join(` ${t.stepAnd} `);
    
    return `${action} ${resStr} ${yieldWord} ${yStr}`;
}

function resolveTree(targetMetal, amount, bankData, mR, activePrefs = new Set()) {
    let deficits = {};
    let steps = [];
    const t = i18n[currentLang];
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

        let recipe = RECIPES[item];
        
        if (item === 'messing' && activePrefs.has('bor')) {
            recipe = { type: 'alloy', primary: 'cuprum', cat1: 'bor', cat2: 'sp' };
        }

        if (!recipe) {
            deficits[item] = (deficits[item] || 0) + missing;
            return;
        }
        
        let currentOreYield = recipe.oreYield;
        let actionKey = 'stepRefine';
        
        if (recipe.type === 'smelt') {
            if (activePrefs.has('blast_furnace')) { currentOreYield *= 1.25; actionKey = 'stepBlastFurnace'; }
            else if (activePrefs.has('furnace')) { currentOreYield *= 1.10; actionKey = 'stepFurnace'; }
            else actionKey = 'stepSmelt';
        } else if (recipe.type === 'bake') {
            actionKey = 'stepBake';
        } else if (recipe.type === 'alloy') {
            actionKey = 'stepAlloy';
        }

        if (recipe.type === 'alloy') {
            const primaryNeeded = Math.ceil(missing / (0.7 * mR));
            const cat1Needed = Math.ceil(primaryNeeded * 0.5);
            const cat2Needed = Math.ceil(primaryNeeded * 0.5);
            
            let htmlStr = `${t[actionKey] || 'Alloy'} <span class="highlight">${primaryNeeded.toLocaleString()} ${t.items[recipe.primary]||recipe.primary}</span> ${t.stepAnd} <span class="highlight">${cat1Needed.toLocaleString()} ${t.items[recipe.cat1]||recipe.cat1}</span> ${t.stepAnd} <span class="highlight">${cat2Needed.toLocaleString()} ${t.items[recipe.cat2]||recipe.cat2}</span> ${t.stepYields} <span class="highlight">${missing.toLocaleString()} ${t.items[item]||item}</span>`;
            
            steps.unshift({
                html: htmlStr,
                yields: [{ item: item, amount: missing }]
            });
            
            decompose(recipe.primary, primaryNeeded);
            decompose(recipe.cat1, cat1Needed);
            decompose(recipe.cat2, cat2Needed);
        }
        else if (recipe.type === 'smelt' || recipe.type === 'bake' || recipe.type === 'refine') {
            let oreNeeded = 0; let catNeeded = 0;
            
            if(recipe.type === 'refine') {
                oreNeeded = Math.ceil(missing * recipe.oreReq);
                catNeeded = recipe.cat ? Math.ceil(missing * recipe.catReq) : 0;
            } else {
                oreNeeded = Math.ceil(missing / (currentOreYield * mR));
                catNeeded = Math.ceil(oreNeeded * recipe.catReq);
            }
            
            steps.unshift({
                html: makeExtStr(actionKey, oreNeeded, recipe.ore, [{item: item, amount: missing}], catNeeded, recipe.cat),
                yields: [{ item: item, amount: missing }]
            });
            
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

    let dPyr = raw.pyroxene || 0;
    if (dPyr > 0) {
        let galbReq = Math.ceil(dPyr / (0.622 * mE));
        raw.galbinum = (raw.galbinum || 0) + galbReq;
        extSteps.unshift({
            html: makeExtStr('stepExtract', galbReq, 'galbinum', [{ item: 'pyroxene', amount: dPyr }]),
            yields: [{ item: 'pyroxene', amount: dPyr }]
        });
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
        
        let action = route === 'efficient' ? 'stepGrind' : 'stepCrush';
        extSteps.unshift({
            html: makeExtStr(action, reqTephra, 'tephra', [{item: 'galbinum', amount: genGalb}, {item: 'redbleckblende', amount: genRB}]),
            yields: [{ item: 'galbinum', amount: genGalb }, { item: 'redbleckblende', amount: genRB }]
        });
        
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
            let bpAm = Math.ceil(reqGranum * 0.0882 * mE);
            let bpFl = Math.ceil(reqGranum * 0.0140 * mE);
            
            extSteps.unshift({
                html: makeExtStr('stepCrush', reqGranum, 'granum', [{item: 'bo', amount: genBO}, {item: 'granumpowder', amount: genGP}]),
                yields: [
                    { item: 'bo', amount: genBO }, 
                    { item: 'granumpowder', amount: genGP },
                    { item: 'amarantum', amount: bpAm },
                    { item: 'flakestone', amount: bpFl }
                ]
            });
            
            raw.granum = reqGranum;
            bp.amarantum = bpAm;
            bp.flakestone = bpFl;
        } else {
            let crushForGP = Math.ceil(dGP / (0.2940 * mE));
            let boFromCrush = Math.ceil(crushForGP * 0.0770 * mE);
            let remainBO = Math.max(0, dBO - boFromCrush);
            let attractForBO = Math.ceil(remainBO / (0.198 * mE * mM));
            let cpForAttract = Math.ceil(attractForBO * 0.0715);
            
            raw.granum = crushForGP + attractForBO;
            raw.cp = (raw.cp || 0) + cpForAttract;
            
            if (crushForGP > 0) {
                let bpAm = Math.ceil(crushForGP * 0.0882 * mE);
                let bpFl = Math.ceil(crushForGP * 0.0140 * mE);
                extSteps.unshift({
                    html: makeExtStr('stepGrind', crushForGP, 'granum', [{item: 'granumpowder', amount: dGP}]),
                    yields: [
                        { item: 'granumpowder', amount: dGP },
                        { item: 'amarantum', amount: bpAm },
                        { item: 'flakestone', amount: bpFl }
                    ]
                });
                bp.amarantum = bpAm;
                bp.flakestone = bpFl;
            }
            if (attractForBO > 0) {
                extSteps.unshift({
                    html: makeExtStr('stepExtract', attractForBO, 'granum', [{item: 'bo', amount: remainBO}], cpForAttract, 'cp'),
                    yields: [{ item: 'bo', amount: remainBO }]
                });
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
        
        extSteps.unshift({
            html: makeExtStr('stepGrind', reqSaburra, 'saburra', [{item: 'sp', amount: genSP}, {item: 'malachite', amount: genMal}], waterReq, 'water'),
            yields: [{ item: 'sp', amount: genSP }, { item: 'malachite', amount: genMal }]
        });
        
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
                extSteps.unshift({
                    html: makeExtStr('stepGrind', reqCP, 'calx', [{item: 'cp', amount: dCP}, {item: 'coal', amount: coalFromGrind}], waterReq, 'water'),
                    yields: [{ item: 'cp', amount: dCP }, { item: 'coal', amount: coalFromGrind }]
                });
            }
            
            raw.calx = (raw.calx || 0) + reqCP;
            raw.water = (raw.water || 0) + waterReq;
            
            let remainCoal = Math.max(0, dCoal - coalFromGrind);
            if (remainCoal > 0) {
                let crushReq = Math.ceil(remainCoal / (0.2160 * mE));
                let bCal = Math.ceil(crushReq * 0.0360 * mE);
                extSteps.unshift({
                    html: makeExtStr('stepFurnace', crushReq, 'calx', [{item: 'coal', amount: remainCoal}]),
                    yields: [{ item: 'coal', amount: remainCoal }, { item: 'calspar', amount: bCal }]
                });
                raw.calx += crushReq;
                bp.calspar = bCal;
            }
        } else {
            let reqCoal = Math.ceil(dCoal / (0.2160 * mE));
            let cpFromCrush = Math.ceil(reqCoal * 0.1361 * mE);
            
            if (reqCoal > 0) {
                extSteps.unshift({
                    html: makeExtStr('stepCrush', reqCoal, 'calx', [{item: 'coal', amount: dCoal}, {item: 'cp', amount: cpFromCrush}]),
                    yields: [{ item: 'coal', amount: dCoal }, { item: 'cp', amount: cpFromCrush }]
                });
            }
            raw.calx = (raw.calx || 0) + reqCoal;
            
            let remainCP = Math.max(0, dCP - cpFromCrush);
            if (remainCP > 0) {
                let grindReq = Math.ceil(remainCP / (0.2058 * mE));
                let waterReq = Math.ceil(grindReq * 0.1);
                extSteps.unshift({
                    html: makeExtStr('stepGrind', grindReq, 'calx', [{item: 'cp', amount: remainCP}], waterReq, 'water'),
                    yields: [{ item: 'cp', amount: remainCP }]
                });
                raw.calx += grindReq;
                raw.water = (raw.water || 0) + waterReq;
            }
        }
        delete raw.cp; delete raw.coal;
    }

    let grossRaw = { ...raw }; 
    Object.keys(raw).forEach(k => { raw[k] = Math.max(0, raw[k] - (bankData[k] || 0)); });
    
    return { raw, grossRaw, bp, extSteps };
}