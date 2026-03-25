function initMarketData() {
    rawKeys.forEach(k => {
        if (!marketData[k]) marketData[k] = [{ p: defaultPrices[k], q: 0 }];
    });
}

function addMarketTier(k) {
    marketData[k].push({ p: defaultPrices[k], q: 0 });
    renderMarketTable();
}

function removeMarketTier(k, idx) {
    marketData[k].splice(idx, 1);
    renderMarketTable();
    run();
}

function clearMarketTier(k, idx) {
    marketData[k][idx].q = 0;
    renderMarketTable();
    run();
}

function clearCart() {
    rawKeys.forEach(k => marketData[k] = [{ p: defaultPrices[k], q: 0 }]);
    renderMarketTable();
    run();
}

function updateMarketTier(k, idx, field, val) {
    marketData[k][idx][field] = Number(val) || 0;
    run();
}

function quickAddMarket(k, idx) {
    const isStacks = document.getElementById('mode').value === 'stacks';
    let current = Number(marketData[k][idx].q) || 0;
    marketData[k][idx].q = isStacks ? parseFloat((current + 1).toFixed(4)) : current + 10000;
    renderMarketTable();
    run();
}

function quickSubMarket(k, idx) {
    const isStacks = document.getElementById('mode').value === 'stacks';
    let current = Number(marketData[k][idx].q) || 0;
    marketData[k][idx].q = Math.max(0, isStacks ? parseFloat((current - 1).toFixed(4)) : current - 10000);
    renderMarketTable();
    run();
}

function autoFillCart() { 
    rawKeys.forEach(k => {
        const mode = document.getElementById('mode').value;
        let needed = pureDeficits[k] || 0;
        marketData[k] = [{ 
            p: marketData[k][0].p || defaultPrices[k], 
            q: mode === 'stacks' ? parseFloat((needed / 10000).toFixed(4)) : needed 
        }];
    });
    renderMarketTable();
    run(); 
}

function renderMarketTable() {
    const container = document.getElementById('marketContainer');
    if (!container) return;
    const t = i18n[currentLang];
    const addLabel = document.getElementById('mode').value === 'stacks' ? t.qAddStk : t.qAdd;
    const subLabel = document.getElementById('mode').value === 'stacks' ? t.qSubStk : t.qSub;
    
    let html = `<div class="market-row market-header desktop-only"><div></div><div style="text-align:center">${t.tblPrice}</div><div style="text-align:center">${t.tblBuy}</div><div style="text-align:right">${t.tblCost}</div><div style="text-align:right">${t.tblStash}</div></div>`; 

    rawKeys.forEach(k => {
        const tiers = marketData[k];
        let totalBuy = 0;
        let totalCost = 0;

        let priceHtml = '';
        let buyHtml = '';

        tiers.forEach((tier, idx) => {
            totalBuy += tier.q;
            totalCost += (tier.q * (document.getElementById('mode').value === 'stacks' ? 1 : 0.0001)) * tier.p;
            
            priceHtml += `<div style="margin-bottom: 4px; display: flex; align-items: center; justify-content: center;">
                <input type="number" style="width: 70px; margin: 0;" value="${tier.p}" title="Price" oninput="updateMarketTier('${k}', ${idx}, 'p', this.value)">
            </div>`;
            
            buyHtml += `<div style="display:flex; gap: 4px; margin-bottom: 4px; justify-content: center; align-items: center;">
                <button class="btn-stack q-sub" style="margin: 0; min-width:30px; padding:0 4px;" onclick="quickSubMarket('${k}', ${idx})">${subLabel}</button>
                <input type="number" style="width: 75px; margin: 0;" value="${tier.q}" title="Qty" oninput="updateMarketTier('${k}', ${idx}, 'q', this.value)">
                <button class="btn-stack q-add" style="margin: 0; min-width:30px; padding:0 4px;" onclick="quickAddMarket('${k}', ${idx})">${addLabel}</button>
                <button class="btn-clear btn-sq" style="margin: 0;" title="Clear Qty" onclick="clearMarketTier('${k}', ${idx})">✖</button>
                ${idx > 0 ? `<button class="btn-clear btn-sq" style="margin: 0; background:var(--border);" title="Remove Tier" onclick="removeMarketTier('${k}', ${idx})">➖</button>` : `<button class="btn-cart btn-sq" style="margin: 0;" title="Add Tier" onclick="addMarketTier('${k}')">➕</button>`}
            </div>`;
        });

        html += `<div class="market-row" id="row_m_${k}" style="border-bottom: 1px dashed var(--border); padding-bottom: 10px;">
            <div style="font-weight:bold; color:var(--accent); align-self: start; margin-top: 5px;">${t.items[k] || k}</div>
            <div style="text-align:center; align-self: start;">${priceHtml}</div>
            <div style="text-align:center; align-self: start;">${buyHtml}</div>
            <div style="text-align:right; align-self: start; margin-top: 5px;"><span class="mobile-label">${t.tblCost}</span><span style="font-weight:bold; color:var(--accent); font-size: 1.1em;" id="cost_${k}">0.00</span></div>
            <div style="text-align:right; align-self: start; margin-top: 5px;"><span class="mobile-label">${t.tblStash}</span><span style="color:var(--text-dim);" id="stash_${k}">0</span></div>
        </div>`;
    });
    
    html += `<div style="display:flex; justify-content:space-between; align-items:center; margin-top:15px; padding-top:15px; border-top:1px solid var(--border);"><div style="font-weight:bold; text-transform:uppercase; color:var(--text-dim);">${t.cartTotal}</div><div id="cartTotalGold" style="font-weight:bold; color:var(--accent); font-size:1.3em;">0.00 g</div></div>`;
    container.innerHTML = html;
    
    if(document.getElementById('targetMetal')) {
        updateVisibility(document.getElementById('targetMetal').value);
    }
}

function renderBankTable() {
    const table = document.getElementById('bankTable');
    if(!table) return;
    const t = i18n[currentLang];
    const addLabel = document.getElementById('mode').value === 'stacks' ? t.qAddStk : t.qAdd;
    const subLabel = document.getElementById('mode').value === 'stacks' ? t.qSubStk : t.qSub;
    
    let html = ""; 
    CATEGORIES.forEach(cat => {
        html += `<tbody id="cat_${cat.id}">`;
        html += `<tr><td colspan="2" class="bank-category">${t.categories[cat.id] || cat.id}</td></tr>`;
        cat.items.forEach(k => {
            const val = Number(document.getElementById('b_'+k)?.value) || 0;
            
            html += `<tr id="row_b_${k}"><td style="width:35%; font-weight:bold; padding-left:10px;">${t.items[k] || k}</td>
                <td style="text-align:right; white-space: nowrap;">
                    <div style="display:flex; gap: 4px; justify-content: flex-end; align-items:center;">
                        <button class="btn-stack q-sub" style="margin: 0; min-width:30px; padding:0 4px;" onclick="quickSub('b_${k}')">${subLabel}</button>
                        <input type="number" id="b_${k}" value="${val}" oninput="run()" style="width: 75px; margin: 0;">
                        <button class="btn-stack q-add" style="margin: 0; min-width:30px; padding:0 4px;" onclick="quickAdd('b_${k}')">${addLabel}</button>
                        <button class="btn-clear btn-clear-bank" style="margin: 0;" onclick="clearItem('b_${k}')">Clear</button>
                    </div>
                </td></tr>`;
        });
        html += `</tbody>`;
    });
    table.innerHTML = html;
}

function updateVisibility(targetMetal) {
    const relevant = getRelevantItems(targetMetal);
    const showAll = document.getElementById('showAllBank')?.checked;
    
    CATEGORIES.forEach(cat => {
        let catHasVisibleItem = false;
        cat.items.forEach(k => {
            const row = document.getElementById('row_b_' + k);
            if (row) {
                if (k === targetMetal) {
                    row.style.display = 'none';
                } else if (showAll || relevant.has(k)) {
                    row.style.display = '';
                    catHasVisibleItem = true;
                } else {
                    row.style.display = 'none';
                }
            }
        });
        const catTbody = document.getElementById('cat_' + cat.id);
        if (catTbody) catTbody.style.display = catHasVisibleItem ? '' : 'none';
    });

    rawKeys.forEach(k => {
        const row = document.getElementById('row_m_' + k);
        if (row) row.style.display = relevant.has(k) ? 'grid' : 'none';
    });
}

function quickAdd(id) {
    const el = document.getElementById(id);
    const isStacks = document.getElementById('mode').value === 'stacks';
    let current = Number(el.value) || 0;
    el.value = isStacks ? parseFloat((current + 1).toFixed(4)) : current + 10000;
    run();
}

function quickSub(id) {
    const el = document.getElementById(id);
    const isStacks = document.getElementById('mode').value === 'stacks';
    let current = Number(el.value) || 0;
    el.value = Math.max(0, isStacks ? parseFloat((current - 1).toFixed(4)) : current - 10000);
    run();
}

function clearItem(id) {
    const el = document.getElementById(id);
    if (el) { el.value = 0; run(); }
}