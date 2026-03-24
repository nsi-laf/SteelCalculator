const i18n = {
    en: {
        tabPrefs: "Preferences", tabInteg: "Integrations", tabData: "Data", resetDesc: "Clear all your saved bank inventory, market cart quantities, and targets.",
        themeToggle: "☀️ / 🌙 Toggle Day/Night Mode", format: "Display Format", optUnits: "Units", optStacks: "Stacks (10k)", webhook: "Discord Webhook URL",
        prodCmd: "Production Command", targetMetalLabel: "Target Metal", boSource: "Extraction Strategy", optAttractor: "Efficient (Grinders)", optCrusher: "Max Yield (Crushers)", crafters: "Crafters", target: "Amount", btnMaxText: "⚡ Calculate Max Possible",
        yieldMods: "Yield Modifiers", mastery: "Mastery (+6%)", refining: "Refining (+3%)", extraction: "Extraction (+3%)",
        btnDiscord: "📋 Copy to Clipboard", btnSend: "🚀 Send Order to Discord",
        invBank: "Inventory Bank", showAllBank: "Show All Materials", btnReset: "🧹 Reset All Bank & Cart", defGather: "Deficit to Gather Manually", mfgPipe: "Manufacturing Pipeline", marketCart: "Market Cart", btnAutoFill: "🛒",
        tblPrice: "Price/10k", tblBuy: "Amount to Buy", tblCost: "Cost (g)", tblStash: "Bank + Buy", cartTotal: "Cart Total:",
        noTarget: "No target set.", allCovered: "✅ Bank & Cart cover all raw materials!",
        stepYields: "yields", stepExtract: "Extract", stepAnd: "and", perCrafter: "(Per Crafter)", stepPrefix: "Step",
        resetPrompt: "Reset all bank values and shopping cart to zero?", discHeader: "⚔️ LOGISTICS ORDER", discReq: "MANUAL GATHER REQUIRED:", discStock: "All gathering covered.", discCopied: "Copied to clipboard!",
        discMarket: "MARKET PURCHASES:", errWebhook: "Please enter a valid Discord Webhook URL.", errSend: "Failed to send to Discord.", sucSend: "Order dispatched to Discord!",
        qAdd: "+10k", qAddStk: "+1 Stk", byproductsTitle: "RECOVERED BYPRODUCTS",
        
        // Dynamic Notifications
        notifAwaiting: "Awaiting orders, Quartermaster. Enter a target amount or calculate max.",
        notifAllClear: "All materials secured in bank & cart! You are ready to manufacture.",
        notifNoPrimaryDetails: "Insufficient primary metals to craft 1 unit. Missing: {0}",
        notifMaxFoundDetails: "Maximum yield calculated. Missing catalysts: {0}",
        notifMissingPrimaryDetails: "Deficit detected. Missing primary metals: {0}",
        notifMissingCatalystDetails: "Primary materials secured! Missing catalysts: {0}",

        categories: { raw: "Raw Materials", basicExt: "Basic Extractions", intOre: "Intermediate Ores", advOre: "Advanced Ores", catalyst: "Catalysts", refined: "Refined Metals" },
        items: { 
            granum: "Granum", calx: "Calx", saburra: "Saburra", tephra: "Tephra", water: "Water", sp: "Saburra Powder", cp: "Calx Powder", coal: "Coal", coke: "Coke", 
            bo: "Blood Ore", pi: "Pig Iron", gs: "Grain Steel", steel: "Steel",
            cuprum: "Cuprum", bron: "Bron", messing: "Messing", tmessing: "Tindremic Messing", tungsteel: "Tungsteel", cronite: "Cronite", oghmium: "Oghmium",
            amarantum: "Amarantum", flakestone: "Flakestone", granumpowder: "Granum Powder", malachite: "Malachite", bleckblende: "Bleckblende", calamine: "Calamine",
            jadeite: "Jadeite", calspar: "Calspar", galbinum: "Galbinum", redbleckblende: "Red Bleckblende", pyroxene: "Pyroxene", almine: "Almine", acronite: "Acronite",
            sanguinite: "Sanguinite", fumingsalt: "Fuming Salt", lupium: "Lupium", gemmetal: "Gem Metal"
        }
    },
    fr: {
        tabPrefs: "Préférences", tabInteg: "Intégrations", tabData: "Données", resetDesc: "Effacez tout votre inventaire, les quantités du panier et les objectifs.",
        themeToggle: "☀️ / 🌙 Mode Jour/Nuit", format: "Format d'affichage", optUnits: "Unités", optStacks: "Piles (10k)", webhook: "URL Webhook Discord",
        prodCmd: "Commande de Production", targetMetalLabel: "Métal Cible", boSource: "Stratégie d'Extraction", optAttractor: "Efficace (Broyeurs)", optCrusher: "Rendement Max (Concasseurs)", crafters: "Artisans", target: "Quantité", btnMaxText: "⚡ Calculer le Maximum",
        yieldMods: "Modificateurs", mastery: "Maîtrise (+6%)", refining: "Raffinage (+3%)", extraction: "Extraction (+3%)",
        btnDiscord: "📋 Copier l'ordre", btnSend: "🚀 Envoyer sur Discord",
        invBank: "Banque d'Inventaire", showAllBank: "Afficher Tout", btnReset: "🧹 Réinitialiser Tout", defGather: "Déficit à Récolter", mfgPipe: "Pipeline de Fabrication", marketCart: "Panier", btnAutoFill: "🛒",
        tblPrice: "Prix/10k", tblBuy: "Qté à Acheter", tblCost: "Coût (o)", tblStash: "Banque + Achat", cartTotal: "Total Panier :",
        noTarget: "Aucun objectif défini.", allCovered: "✅ La banque couvre tout !",
        stepYields: "produit", stepExtract: "Extraire", stepAnd: "et", perCrafter: "(Par Artisan)", stepPrefix: "Étape",
        resetPrompt: "Réinitialiser toutes les valeurs à zéro ?", discHeader: "⚔️ ORDRE LOGISTIQUE", discReq: "RÉCOLTE MANUELLE REQUISE :", discStock: "Toute la récolte est couverte.", discCopied: "Copié dans le presse-papiers !",
        discMarket: "ACHATS AU MARCHÉ :", errWebhook: "URL Webhook invalide.", errSend: "Échec de l'envoi.", sucSend: "Ordre envoyé sur Discord !",
        qAdd: "+10k", qAddStk: "+1 Pile", byproductsTitle: "SOUS-PRODUITS RÉCUPÉRÉS",
        
        notifAwaiting: "En attente d'ordres. Entrez un montant ou calculez le max.",
        notifAllClear: "Tous les matériaux sont sécurisés ! Prêt à fabriquer.",
        notifNoPrimaryDetails: "Métaux primaires insuffisants pour 1 unité. Manquant : {0}",
        notifMaxFoundDetails: "Rendement max calculé. Catalyseurs manquants : {0}",
        notifMissingPrimaryDetails: "Déficit détecté. Métaux primaires manquants : {0}",
        notifMissingCatalystDetails: "Métaux primaires sécurisés ! Catalyseurs manquants : {0}",

        categories: { raw: "Matières Premières", basicExt: "Extractions de Base", intOre: "Minerais Intermédiaires", advOre: "Minerais Avancés", catalyst: "Catalyseurs", refined: "Métaux Raffinés" },
        items: { 
            granum: "Granum", calx: "Calx", saburra: "Saburra", tephra: "Tephra", water: "Eau (Water)", sp: "Poudre Saburra (Saburra Powder)", cp: "Poudre Calx (Calx Powder)", coal: "Charbon (Coal)", coke: "Coke", 
            bo: "Minerai de Sang (Blood Ore)", pi: "Fonte (Pig Iron)", gs: "Acier Grain (Grain Steel)", steel: "Acier (Steel)",
            cuprum: "Cuprum", bron: "Bron", messing: "Messing", tmessing: "Messing Tindremic (Tindremic Messing)", tungsteel: "Tungsteel", cronite: "Cronite", oghmium: "Oghmium",
            amarantum: "Amarantum", flakestone: "Flakestone", granumpowder: "Poudre Granum (Granum Powder)", malachite: "Malachite", bleckblende: "Bleckblende", calamine: "Calamine",
            jadeite: "Jadeite", calspar: "Calspar", galbinum: "Galbinum", redbleckblende: "Bleckblende Rouge (Red Bleckblende)", pyroxene: "Pyroxene", almine: "Almine", acronite: "Acronite",
            sanguinite: "Sanguinite", fumingsalt: "Sel Fumant (Fuming Salt)", lupium: "Lupium", gemmetal: "Métal Précieux (Gem Metal)"
        }
    },
    es: { notifAwaiting: "Esperando...", notifAllClear: "¡Todo asegurado!", notifNoPrimaryDetails: "Faltan primarios: {0}", notifMaxFoundDetails: "Max calculado. Faltan: {0}", notifMissingPrimaryDetails: "Faltan primarios: {0}", notifMissingCatalystDetails: "Faltan catalizadores: {0}", tabPrefs: "Preferencias", tabInteg: "Integraciones", tabData: "Datos", showAllBank: "Mostrar Todo", optAttractor: "Eficiente", optCrusher: "Rendimiento Max", stepExtract: "Extraer", stepAnd: "y", stepPrefix: "Paso", btnAutoFill: "🛒", categories: {}, items: { steel: "Acero (Steel)" } },
    pt: { notifAwaiting: "Aguardando...", notifAllClear: "Tudo garantido!", notifNoPrimaryDetails: "Faltam primários: {0}", notifMaxFoundDetails: "Max calculado. Faltam: {0}", notifMissingPrimaryDetails: "Faltam primários: {0}", notifMissingCatalystDetails: "Faltam catalisadores: {0}", tabPrefs: "Preferências", tabInteg: "Integrações", tabData: "Dados", showAllBank: "Mostrar Tudo", optAttractor: "Eficiente", optCrusher: "Rendimento Max", stepExtract: "Extrair", stepAnd: "e", stepPrefix: "Passo", btnAutoFill: "🛒", categories: {}, items: { steel: "Aço (Steel)" } },
    de: { notifAwaiting: "Warten auf Befehle...", notifAllClear: "Alles gesichert!", notifNoPrimaryDetails: "Fehlende Primärmetalle: {0}", notifMaxFoundDetails: "Max berechnet. Fehlende: {0}", notifMissingPrimaryDetails: "Fehlende Primärmetalle: {0}", notifMissingCatalystDetails: "Fehlende Katalysatoren: {0}", tabPrefs: "Präferenzen", tabInteg: "Integrationen", tabData: "Daten", showAllBank: "Alle Anzeigen", optAttractor: "Effizient", optCrusher: "Maximaler Ertrag", stepExtract: "Extrahieren", stepAnd: "und", stepPrefix: "Schritt", btnAutoFill: "🛒", categories: {}, items: { steel: "Stahl (Steel)" } }
};

['es', 'pt', 'de'].forEach(l => i18n[l] = { ...i18n.en, ...i18n[l], categories: { ...i18n.en.categories, ...i18n[l].categories }, items: { ...i18n.en.items, ...i18n[l].items } });