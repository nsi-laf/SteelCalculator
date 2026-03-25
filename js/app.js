function handleModeChange() {
    const mode = document.getElementById('mode').value;
    const targetEl = document.getElementById('targetAmount');
    let targetVal = Number(targetEl.value) || 0;
    
    if (prevMode === 'units' && mode === 'stacks') targetEl.value = (targetVal / 10000).toFixed(4);
    else if (prevMode === 'stacks' && mode === 'units') targetEl.value = Math.round(targetVal * 10000);

    const convert = (id) => {
        const el = document.getElementById(id);
        if(el) {
            let val = Number(el.value) || 0;
            if (prevMode === 'units' && mode === 'stacks') el.value = (val / 10000).toFixed(4);
            else if (prevMode === 'stacks' && mode === 'units') el.value = Math.round(val * 10000);
        }
    };

    Object.values(CATEGORIES).flatMap(c => c.items).forEach(k => convert('b_' + k));
    
    rawKeys.forEach(k => {
        marketData[k].forEach(tier => {
            if (prevMode === 'units' && mode === 'stacks') tier.q = parseFloat((tier.q / 10000).toFixed(4));
            else if (prevMode === 'stacks' && mode === 'units') tier.q = Math.round(tier.q * 10000);
        });
    });

    prevMode = mode; 
    renderBankTable();
    renderMarketTable();
    run();
}

function run() { clearTimeout(timer); timer = setTimeout(calculate, 150); }

function calculateMax() {
    const mode = document.getElementById('mode').value;
    const targetMetal = document.getElementById('targetMetal').value;
    const mult = mode === 'stacks' ? 10000 : 1;
    
    const mR = document.getElementById('modRef').checked ? 1.03 : 1;
    const mE = document.getElementById('modExt').checked ? 1.03 : 1;
    const mM = document.getElementById('modMast').checked ? 1.06 : 1;

    const bank = {}; 
    Object.values(CATEGORIES).flatMap(c => c.items).forEach(k => bank[k] = (Number(document.getElementById('b_' + k)?.value) || 0) * mult);

    const primaryChain = getPrimaryChain(targetMetal);

    let low = 0, high = 1000000 * mult, maxPossible = 0;
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (mid === 0) { low = mid + 1; continue; }
        
        const tree = resolveTree(targetMetal, mid, bank, mR);
        const extractions = resolveExtractions(tree.deficits, mE, mM, bank);
        
        let hasPrimaryDeficit = false;
        Object.keys(extractions.raw).forEach(k => {
            if (extractions.raw[k] > 0 && primaryChain.includes(k)) {
                hasPrimaryDeficit = true; 
            }
        });

        if (!hasPrimaryDeficit) {
            maxPossible = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    if (maxPossible === 0) maxPossible = mode === 'stacks' ? 10000 : 1;
    document.getElementById('targetAmount').value = mode === 'stacks' ? parseFloat((maxPossible / 10000).toFixed(4)) : maxPossible;
    
    calculate();
}

function calculate() {
    const mode = document.getElementById('mode').value;
    const t = i18n[currentLang];
    const targetRaw = Number(document.getElementById('targetAmount').value) || 0;
    const crafters = Math.max(1, Number(document.getElementById('crafters').value));
    const targetMetal = document.getElementById('targetMetal').value;
    const mult = mode === 'stacks' ? 10000 : 1;
    
    const bank = {}; 
    Object.values(CATEGORIES).flatMap(c => c.items).forEach(k => bank[k] = (Number(document.getElementById('b_' + k)?.value) || 0) * mult);

    if (targetRaw <= 0) {
        document.getElementById('gatherOutput').innerHTML = `<div class="empty-msg">${t.noTarget}</div>`;
        document.getElementById('stepsOutput').innerHTML = "";
        document.getElementById('statStacks').innerText = "0.00";
        if(document.getElementById('cartTotalGold')) document.getElementById('cartTotalGold').innerText = "0.00 g";
        pipelineStepsRaw = []; byproductsRaw = {}; pureDeficits = {};
        rawKeys.forEach(k => {
            if(document.getElementById('cost_'+k)) document.getElementById('cost_'+k).innerText = "0.00";
            if(document.getElementById('stash_'+k)) document.getElementById('stash_'+k).innerText = "0";
        });
        updateVisibility(targetMetal);
        save(); return;
    }

    const mR = document.getElementById('modRef').checked ? 1.03 : 1;
    const mE = document.getElementById('modExt').checked ? 1.03 : 1;
    const mM = document.getElementById('modMast').checked ? 1.06 : 1;

    const tree = resolveTree(targetMetal, targetRaw * mult, bank, mR);
    const extractions = resolveExtractions(tree.deficits, mE, mM, bank);
    
    pureDeficits = extractions.raw;
    const grossRaw = extractions.grossRaw; 
    byproductsRaw = extractions.bp;
    
    let totalGold = 0; let totalUnits = 0; let purchased = {}; let gHTML = '';
    
    rawKeys.forEach(k => {
        const costEl = document.getElementById('cost_' + k);
        const stashEl = document.getElementById('stash_' + k);
        
        let buyQtyUnits = 0;
        let bankQtyRaw = Number(document.getElementById('b_' + k)?.value) || 0;
        
        marketData[k].forEach(tier => {
            const tierUnits = tier.q * mult;
            buyQtyUnits += tierUnits;
            totalGold += (tierUnits / 10000) * tier.p;
        });

        purchased[k] = buyQtyUnits;
        let buyQtyRaw = buyQtyUnits / mult;
        
        if (costEl) {
            let totalCostThisItem = 0;
            marketData[k].forEach(tier => { totalCostThisItem += (tier.q * (mode === 'stacks' ? 1 : 0.0001)) * tier.p; });
            costEl.innerText = totalCostThisItem.toFixed(2);
        }
        if (stashEl) {
            const stashRaw = bankQtyRaw + buyQtyRaw;
            stashEl.innerText = mode === 'stacks' ? stashRaw.toFixed(2) + " Stk" : stashRaw.toLocaleString();
        }
    });

    if(document.getElementById('cartTotalGold')) document.getElementById('cartTotalGold').innerText = totalGold.toFixed(2) + " g";

    Object.keys(pureDeficits).forEach(k => {
        const remainingToGather = Math.max(0, pureDeficits[k] - (purchased[k] || 0));
        let totalNeeded = grossRaw[k] || pureDeficits[k];
        let amountAcquired = totalNeeded - remainingToGather;
        let progressPct = totalNeeded > 0 ? Math.min(100, Math.max(0, (amountAcquired / totalNeeded) * 100)) : 0;

        if (remainingToGather > 0) {
            totalUnits += remainingToGather;
            const fmtVal = mode === 'stacks' ? (remainingToGather/10000).toFixed(2) + " Stk" : remainingToGather.toLocaleString();
            gHTML += `<div class="logistics-item ${remainingToGather < 10000 ? 'hm-low' : 'hm-high'}" style="--prog: ${progressPct}%;"><span>${t.items[k]||k}</span><span>${fmtVal}</span></div>`;
        }
    });

    document.getElementById('gatherOutput').innerHTML = totalUnits > 0 ? gHTML : `<div class="empty-msg">${t.allCovered}</div>`;
    document.getElementById('statStacks').innerText = (totalUnits / 10000).toFixed(2);

    let newPipeline = [...extractions.extSteps, ...tree.steps];
    
    if (JSON.stringify(newPipeline) !== JSON.stringify(pipelineStepsRaw)) {
        completedSteps = [];
        focusIndex = 0;
    }
    pipelineStepsRaw = newPipeline;

    const perCr = crafters > 1 ? ` <span style="color:var(--warning); font-size:0.8em;">${t.perCrafter}</span>` : "";

    let outputHTML = pipelineStepsRaw.map((stepObj, index) => {
        let isCompleted = completedSteps.includes(index) ? 'completed' : '';
        
        let modAction = stepObj.htmlAction.replace(/<span class="highlight">([\d,]+)/g, (match, p1) => {
            let num = parseInt(p1.replace(/,/g, ''));
            return `<span class="highlight">${Math.ceil(num / crafters).toLocaleString()}`;
        });

        let mainYieldsStr = stepObj.mainYields ? stepObj.mainYields.map(y => `<span class="highlight">${y.amount.toLocaleString()} ${t.items[y.item]||y.item}</span>`).join(', ') : "";
        let bpYieldsStr = (stepObj.byproducts && stepObj.byproducts.length > 0) ? stepObj.byproducts.map(y => `${y.amount.toLocaleString()} ${t.items[y.item]||y.item}`).join(', ') : "None";

        let routeHtml = '';
        if (stepObj.routeStats && stepObj.routeStats.length > 1) {
            let btns = stepObj.routeStats.map(rs => {
                let isActive = rs.name === stepObj.selectedRoute ? 'active' : '';
                let badges = '';
                if (rs.isBestYield) badges += `<span title="${t.tooltipBestYield || 'Most Efficient'}" style="margin-left:4px; font-size:11px;">⭐</span>`;
                if (rs.isMaxYield) badges += `<span title="${t.tooltipMaxYield || 'Max Byproducts Generated'}" style="margin-left:4px; font-size:11px;">💎</span>`;
                if (rs.isRegionLocked) badges += `<span title="${t.tooltipRegionLocked || 'Region Locked Machine'}" style="margin-left:4px; font-size:11px;">🌍</span>`;
                return `<button class="btn-route ${isActive}" onclick="event.stopPropagation(); updatePathChoice('${stepObj.stepKey}', '${rs.name}')">${rs.name}${badges}</button>`;
            }).join('');
            routeHtml = `<div class="route-choices">${btns}</div>`;
        }

        return `<div class="step-card ${isCompleted}" id="step_${index}" onclick="toggleStep(${index})">
            <div><span style="color:var(--text-dim); font-weight:bold; margin-right:5px;">${t.stepPrefix} ${index + 1}.</span>${modAction}${perCr}</div>
            
            <div style="margin-top: 6px; font-size: 11px;">
                <span style="color:var(--success); font-weight:bold;">${t.stepYieldsMain}</span> ${mainYieldsStr}<br>
                <span style="color:var(--text-dim); font-weight:bold;">${t.stepByproducts}</span> <span style="color:var(--text-dim);">${bpYieldsStr}</span>
            </div>

            ${routeHtml}
        </div>`;
    }).join('');

    let byproductsString = "";
    Object.keys(byproductsRaw).forEach(k => {
        if (byproductsRaw[k] > 0) {
            byproductsString += `<div style="display:flex; justify-content:space-between; margin-bottom: 2px;">
                <span>${t.items[k] || k}</span>
                <span style="color: var(--accent); font-weight: bold;">${byproductsRaw[k].toLocaleString()}</span>
            </div>`;
        }
    });

    if (byproductsString !== "") {
        outputHTML += `<div style="margin-top: 15px; padding: 10px; border-top: 1px dashed var(--border); color: var(--text-dim); font-size: 12px;">
            <div style="font-weight: bold; margin-bottom: 5px; text-transform: uppercase;">${t.byproductsTitle}</div>
            ${byproductsString}
        </div>`;
    }

    document.getElementById('stepsOutput').innerHTML = outputHTML;
    
    updatePipelineVisuals();
    if(pipelineViewMode === 'focus') updateFocusView();

    updateVisibility(targetMetal);
    save();
}

window.onload = () => {
    initMarketData();
    renderBankTable(); 
    renderMarketTable(); 
    load(); 
    document.getElementById('lang').value = currentLang; 
    changeLang(); 
};