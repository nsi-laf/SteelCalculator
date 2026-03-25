function buildDiscordMessage() {
    const t = i18n[currentLang];
    const mode = document.getElementById('mode').value;
    const targetVal = document.getElementById('targetAmount').value;
    const targetMetal = document.getElementById('targetMetal').value;
    const relevant = getRelevantItems(targetMetal);
    let msg = `**${t.discHeader}: ${t.items[targetMetal].toUpperCase()}**\n*Targeting ${targetVal} ${mode === 'stacks' ? 'Stacks' : 'Units'} of ${t.items[targetMetal]}*\n\n`;
    
    let bankString = "";
    Object.values(CATEGORIES).flatMap(c => c.items).forEach(k => {
        let bankRaw = Number(document.getElementById('b_'+k)?.value) || 0;
        if (bankRaw > 0 && relevant.has(k)) {
            let fmtAmt = mode === 'stacks' ? bankRaw.toFixed(2) + " Stacks" : bankRaw.toLocaleString();
            bankString += `- ${t.items[k]||k}: ${fmtAmt}\n`;
        }
    });
    if (bankString !== "") msg += `**CURRENT BANK STOCK:**\n\`\`\`\n${bankString}\`\`\`\n`;

    let marketString = ""; let hasMarket = false; let totalGold = 0;
    Object.values(CATEGORIES).flatMap(c => c.items).forEach(k => {
        let totalQty = 0;
        if(marketData[k]) {
            marketData[k].forEach(tier => {
                totalQty += tier.q;
                totalGold += (tier.q / (mode === 'stacks' ? 1 : 10000)) * tier.p;
            });
        }
        if (totalQty > 0 && relevant.has(k)) {
            let fmtAmt = mode === 'stacks' ? totalQty.toFixed(2) + " Stacks" : totalQty.toLocaleString();
            marketString += `- ${t.items[k]||k}: ${fmtAmt}\n`;
            hasMarket = true;
        }
    });
    
    if (hasMarket) {
        msg += `**${t.discMarket}**\n\`\`\`\n${marketString}\`\`\`\n*Total Estimated Gold Cost: ${totalGold.toFixed(2)} g*\n\n`;
    }

    let gatherString = ""; let hasGather = false;
    Object.keys(pureDeficits).forEach(k => {
        if (pureDeficits[k] > 0) {
            let fmtAmt = mode === 'stacks' ? (pureDeficits[k]/10000).toFixed(2) + " Stacks" : pureDeficits[k].toLocaleString();
            gatherString += `- ${t.items[k]||k}: ${fmtAmt}\n`;
            hasGather = true;
        }
    });

    if (hasGather) msg += `**${t.discReq}**\n\`\`\`diff\n- ${gatherString.replace(/\n/g, '\n- ')}\`\`\`\n`;
    else msg += `**${t.discReq}**\n\`\`\`yaml\n${t.discStock}\`\`\`\n`;

    if (pipelineStepsRaw.length > 0) {
        msg += `**${t.mfgPipe.toUpperCase()}**\n\`\`\`md\n`;
        pipelineStepsRaw.forEach((stepObj, index) => {
            let checkmark = completedSteps.includes(index) ? '[x] ' : '[ ] ';
            let textAction = stepObj.htmlAction.replace(/<[^>]*>?/gm, '');
            msg += `${index + 1}. ${checkmark}${textAction}\n`;
        });
        msg += `\`\`\`\n`;
    }
    
    let hasByproducts = false;
    let bpString = `**${t.byproductsTitle}**\n\`\`\`\n`;
    Object.keys(byproductsRaw).forEach(k => {
        if (byproductsRaw[k] > 0) {
            let fmtAmt = mode === 'stacks' ? (byproductsRaw[k]/10000).toFixed(2) + " Stacks" : byproductsRaw[k].toLocaleString();
            bpString += `- ${t.items[k]||k}: ${fmtAmt}\n`;
            hasByproducts = true;
        }
    });
    if (hasByproducts) msg += bpString + `\`\`\``;
    return msg;
}

function copyDiscord() { navigator.clipboard.writeText(buildDiscordMessage()); alert(i18n[currentLang].discCopied); }

async function sendToDiscord() {
    const t = i18n[currentLang];
    const webhookUrl = document.getElementById('webhookUrl').value;
    if (!webhookUrl || !webhookUrl.startsWith('https://discord.com/api/webhooks/')) { alert(t.errWebhook); openModal('settingsModal'); return; }

    const msg = buildDiscordMessage();

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: msg })
        });

        if (response.ok) alert(t.sucSend);
        else alert(t.errSend + ` Status: ${response.status}`);
    } catch (e) {
        alert(t.errSend + " " + e.message);
    }
}