function getPrimaryChain(targetMetal) {
    let chain = [targetMetal];
    let current = targetMetal;
    while (current) {
        let rec = RECIPES[current];
        if (rec) {
            if (rec.type === 'alloy') current = rec.primary;
            else current = null;
        } else if (EXTRACT_MAP[current]) {
            current = EXTRACT_MAP[current]; 
        } else {
            current = null;
        }
        if (current) chain.push(current);
    }
    return chain;
}

function getRelevantItems(targetMetal) {
    let relevant = new Set([targetMetal]);
    let queue = [targetMetal];
    
    while(queue.length > 0) {
        let item = queue.shift();
        let rec = RECIPES[item];
        
        if (rec) {
            let deps = [rec.primary, rec.cat1, rec.cat2];
            deps.forEach(d => { if (d && !relevant.has(d)) { relevant.add(d); queue.push(d); } });
        }
        
        if (EXTRACT_MAP[item]) {
            let d = EXTRACT_MAP[item];
            if (d && !relevant.has(d)) { relevant.add(d); queue.push(d); }
        }
    }
    return relevant;
}

function makeExtStr(actionKey, qty, item, yields, catQty = 0, catItem = null) {
    const t = i18n[currentLang];
    let action = t[actionKey] || actionKey;
    
    let resStr = `<span class="highlight">${qty.toLocaleString()} ${t.items[item]||item}</span>`;
    if (catQty > 0 && catItem) {
        resStr += ` ${t.stepWith} <span class="highlight">${catQty.toLocaleString()} ${t.items[catItem]||catItem}</span>`;
    }
    
    return `${action} ${resStr}`;
}

function resolveTree(targetMetal, amount, bankData, mR) {
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
        if (!recipe) {
            deficits[item] = (deficits[item] || 0) + missing;
            return;
        }
        
        if (recipe.type === 'alloy') {
            const primaryNeeded = Math.ceil(missing / (0.7 * mR));
            const cat1Needed = Math.ceil(primaryNeeded * 0.5);
            const cat2Needed = Math.ceil(primaryNeeded * 0.5);
            
            let htmlStr = `<strong>${t.stepAlloy || 'Alloy'} <span class="highlight">${primaryNeeded.toLocaleString()} ${t.items[recipe.primary]||recipe.primary}</span> ${t.stepAnd} <span class="highlight">${cat1Needed.toLocaleString()} ${t.items[recipe.cat1]||recipe.cat1}</span> ${t.stepAnd} <span class="highlight">${cat2Needed.toLocaleString()} ${t.items[recipe.cat2]||recipe.cat2}</span></strong>`;
            
            steps.unshift({
                htmlAction: htmlStr,
                mainYields: [{ item: item, amount: missing }],
                byproducts: []
            });
            
            decompose(recipe.primary, primaryNeeded);
            decompose(recipe.cat1, cat1Needed);
            decompose(recipe.cat2, cat2Needed);
        }
    }

    decompose(targetMetal, amount);
    return { deficits, steps };
}

function resolveExtractions(deficits, mE, mM, bankData) {
    let raw = { ...deficits };
    let bp = {};
    let extSteps = [];

    // Must map backwards logically so missing requirements trigger in the right order
    const sequence = [
        'skadite', 'electrum', 'gemmetal', 'sanguinite', 'almine', 'acronite', 'lupium',
        'pi', 'cuprum', 'coke', 'pitch', 'ichor',
        'bo', 'pyroxene', 'galbinum', 'redbleckblende', 'maalite', 'pyropite', 'aabam', 'calamine', 'silver', 'chalkglance', 'waterstone',
        'bleck', 'bleckblende', 'jadeite', 'malachite', 'sp', 'granumpowder', 'amarantum', 'flakestone', 'calspar', 'coal', 'cp', 'cinnabar', 'magmum', 'volcanicash', 'pyrite', 'gaborepowder', 'lodestonepowder', 'ritualash'
    ];

    let processing = true;
    let loopCount = 0;

    while(processing && loopCount < 50) {
        processing = false;
        loopCount++;
        
        for (let i=0; i<sequence.length; i++) {
            let item = sequence[i];
            if (raw[item] > 0 && EXTRACT_MAP[item]) {
                let source = EXTRACT_MAP[item];
                let itemsFromSource = Object.keys(raw).filter(k => raw[k] > 0 && EXTRACT_MAP[k] === source);
                if (itemsFromSource.length === 0) continue;

                let stepKey = `${source}_${itemsFromSource.slice().sort().join('_')}`;
                let availableRoutes = Object.keys(EXTRACTION_ROUTES[source]);
                
                let routeStats = availableRoutes.map(rName => {
                    let r = EXTRACTION_ROUTES[source][rName];
                    let req = 0;
                    itemsFromSource.forEach(k => {
                        let y = r.yields[k] || 0;
                        if (y > 0) {
                            let modifier = mE;
                            if (k === 'bo' && r.action !== 'stepFurnace' && r.action !== 'stepBlastFurnace') modifier = mE * mM; 
                            let rReq = Math.ceil(raw[k] / (y * modifier));
                            if (rReq > req) req = rReq;
                        }
                    });
                    
                    let catCost = r.cat ? Math.ceil(req * r.catReq) : 0;
                    let totalCost = req + catCost;
                    
                    let totalByproducts = 0;
                    Object.keys(r.yields).forEach(yItem => {
                        if (!itemsFromSource.includes(yItem)) { 
                            let modifier = mE;
                            if (yItem === 'bo' && r.action !== 'stepFurnace' && r.action !== 'stepBlastFurnace') modifier = mE * mM; 
                            totalByproducts += Math.ceil(req * r.yields[yItem] * modifier);
                        }
                    });
                    
                    let isRegionLocked = rName.includes('Blast Furnace') || rName.includes('Fabricula') || rName.includes('Greater Natorus') || rName.includes('Natorus') || rName.includes('Grizzly') || rName.includes('Hearth');
                    
                    return { name: rName, req: req, catCost: catCost, totalCost: totalCost, totalByproducts: totalByproducts, isRegionLocked: isRegionLocked };
                });

                let validReqs = routeStats.filter(s => s.req > 0);
                if (validReqs.length > 0) {
                    let minTotal = Math.min(...validReqs.map(s => s.totalCost));
                    let maxBp = Math.max(...validReqs.map(s => s.totalByproducts));
                    
                    routeStats.forEach(s => {
                        s.isBestYield = (s.totalCost === minTotal && s.req > 0);
                        s.isMaxYield = (s.totalByproducts === maxBp && s.req > 0 && maxBp > 0);
                    });
                }

                let routeName = userPathChoices[stepKey] || availableRoutes[0];
                
                if (globalRoutePref === 'efficient') {
                    let best = routeStats.find(s => s.isBestYield);
                    if (best) routeName = best.name;
                } else if (globalRoutePref === 'yield') {
                    let max = routeStats.find(s => s.isMaxYield);
                    if (max) routeName = max.name;
                }

                if(!EXTRACTION_ROUTES[source][routeName]) {
                    routeName = availableRoutes[0];
                }

                userPathChoices[stepKey] = routeName;
                let route = EXTRACTION_ROUTES[source][routeName];

                let maxSourceReq = routeStats.find(s => s.name === routeName)?.req || 0;

                if (maxSourceReq > 0) {
                    raw[source] = (raw[source] || 0) + maxSourceReq;
                    
                    let catQty = 0;
                    if (route.cat) {
                        catQty = Math.ceil(maxSourceReq * route.catReq);
                        raw[route.cat] = (raw[route.cat] || 0) + catQty;
                    }

                    let mainYieldsList = [];
                    let bpYieldsList = [];
                    
                    Object.keys(route.yields).forEach(yItem => {
                        let modifier = mE;
                        if (yItem === 'bo' && route.action !== 'stepFurnace' && route.action !== 'stepBlastFurnace') modifier = mE * mM; 
                        
                        let produced = Math.ceil(maxSourceReq * route.yields[yItem] * modifier);
                        
                        if (itemsFromSource.includes(yItem)) {
                            mainYieldsList.push({item: yItem, amount: produced});
                        } else {
                            bpYieldsList.push({item: yItem, amount: produced});
                        }

                        if (raw[yItem]) {
                            if (produced > raw[yItem]) {
                                bp[yItem] = (bp[yItem] || 0) + (produced - raw[yItem]);
                                delete raw[yItem];
                            } else {
                                raw[yItem] -= produced;
                                if(raw[yItem] === 0) delete raw[yItem];
                            }
                        } else {
                            bp[yItem] = (bp[yItem] || 0) + produced;
                        }
                    });

                    const t = i18n[currentLang];
                    let action = t[route.action] || route.action;
                    let htmlAction = `<strong>${action} <span class="highlight">${maxSourceReq.toLocaleString()} ${t.items[source]||source}</span>`;
                    if (catQty > 0 && route.cat) {
                        htmlAction += ` ${t.stepWith} <span class="highlight">${catQty.toLocaleString()} ${t.items[route.cat]||route.cat}</span>`;
                    }
                    htmlAction += `</strong>`;

                    extSteps.unshift({
                        htmlAction: htmlAction,
                        mainYields: mainYieldsList,
                        byproducts: bpYieldsList,
                        stepKey: stepKey,
                        routeStats: routeStats,
                        selectedRoute: routeName
                    });

                    processing = true;
                    break; 
                } else {
                    itemsFromSource.forEach(k => {
                        if (!route.yields[k]) EXTRACT_MAP[k] = null; 
                    });
                    processing = true;
                    break;
                }
            }
        }
    }

    let grossRaw = { ...raw }; 
    Object.keys(raw).forEach(k => { raw[k] = Math.max(0, raw[k] - (bankData[k] || 0)); });
    
    return { raw, grossRaw, bp, extSteps };
}