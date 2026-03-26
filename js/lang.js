const baseItems = {
    granum: "Granum", calx: "Calx", saburra: "Saburra", tephra: "Tephra", bor: "Bor", gabore: "Gabore", kimurite: "Kimurite", lodestone: "Lodestone", risensacrificecarcass: "Risen Sacrifice",
    sp: "Saburra Powder", cp: "Calx Powder", gaborepowder: "Gabore Powder", lodestonepowder: "Lodestone Powder",
    bo: "Blood Ore", gs: "Grain Steel",
    cuprum: "Cuprum", bron: "Bron", messing: "Messing", tmessing: "Tindremic Messing", tungsteel: "Tungsteel", cronite: "Cronite", oghmium: "Oghmium",
    amarantum: "Amarantum", flakestone: "Flakestone", granumpowder: "Granum Powder", malachite: "Malachite", bleckblende: "Bleckblende", calamine: "Calamine",
    jadeite: "Jadeite", calspar: "Calspar", galbinum: "Galbinum", redbleckblende: "Red Bleckblende", pyroxene: "Pyroxene", almine: "Almine", acronite: "Acronite",
    sanguinite: "Sanguinite", fumingsalt: "Fuming Salt", lupium: "Lupium", gemmetal: "Gem Metal",
    tallow: "Tallow", dragonsalt: "Dragon Salt", ichor: "Ichor", sulfur: "Sulfur", rockoil: "Rock Oil",
    bleck: "Bleck", chalkglance: "Chalk Glance", cinnabar: "Cinnabar", magmum: "Magmum", aabam: "Aabam",
    gold: "Gold", silver: "Silver", skadite: "Skadite", pitch: "Pitch", kyanite: "Kyanite", maalite: "Maalite",
    pyropite: "Pyropite", nyx: "Nyx", volcanicash: "Volcanic Ash", waterstone: "Waterstone", ritualash: "Ritual Ash", pyrite: "Pyrite",
    water: "Water", coal: "Coal", coke: "Coke", steel: "Steel", pi: "Pig Iron"
};

const baseCategories = {
    raw: "Raw Materials", basicExt: "Basic Extractions", intOre: "Intermediate Ores", advOre: "Advanced Ores", catalyst: "Catalysts", refined: "Refined Metals",
    "Raw Materials": "Raw Materials", "Basic Extractions": "Basic Extractions", "Intermediate Ores": "Intermediate Ores", "Advanced Ores": "Advanced Ores", "Catalysts": "Catalysts", "Refined Metals": "Refined Metals"
};

const i18n = {
    en: {
        tabPrefs: "Preferences", tabData: "Data", tabHelp: "Help", tabView: "View", tabGuide: "Guide", tabLegend: "Legend",
        resetDesc: "Clear all your saved inventory, market cart quantities, and targets.",
        shareTitle: "Share / Import Setup", shareDesc: "Generate a code to share your current inventory, market cart, and target with others, or paste a code to load theirs.",
        btnGenCode: "Generate & Copy", btnLoadCode: "Load Code", importSuccess: "Setup loaded successfully!", importError: "Invalid code provided.", exportSuccess: "Code copied to clipboard!",
        format: "Display Format", optUnits: "Units", optStacks: "Stacks (10k)", webhook: "Discord Webhook URL",
        btnProd: "Production", prodCmdTitle: "Production Command", targetMetalLabel: "Target Resource", crafters: "Crafters", target: "Amount",
        btnAutoFill: "Fill", btnClearCart: "Clear",
        yieldMods: "Preferences", mastery: "Mastery (+6%)", refining: "Refining (+3%)", extraction: "Extraction (+3%)",
        btnDiscord: "Copy to Clipboard", btnSend: "Send Order to Discord",
        btnPrefs: "Preferences", yieldModsModal: "Preferences",
        btnBank: "Inventory", invBankTitle: "Inventory",
        invBank: "Inventory", showAllBank: "Show All Materials", showAllCart: "Show All Materials", btnReset: "Reset All", defGather: "Missing Components", mfgPipe: "Manufacturing Pipeline", marketCart: "Market Cart", marketCartTitle: "Market Cart",
        tblPrice: "Price", tblBuy: "Amount to Buy", tblCost: "Cost", tblStash: "Stash", cartTotal: "Cart Total:", tblOrder: "Order",
        noTarget: "No target set.", allCovered: "Inventory & Cart cover all required materials!", searchPlaceholder: "Search...",
        verbCrush: "Crush", verbGrind: "Grind", verbExtract: "Extract", verbSmelt: "Smelt", verbBake: "Bake", verbAlloy: "Alloy", verbProcess: "Process",
        inMachine: "in the", stepWith: "with", stepAnd: "and", perCrafter: "(Per Crafter)", stepPrefix: "Step",
        stepYieldsMain: "Yields:", stepByproducts: "Byproducts:", none: "None",
        pipeCompleted: "Production Progress", btnPipeReset: "Reset",
        tooltipBestYield: "Most Efficient (Lowest Total Material Cost)", tooltipMaxYield: "Max Byproducts Generated", tooltipRegionLocked: "Region Locked Machine",
        tooltipMaxCraft: "Calculate how much you can make with just your inventory", tooltipShowAll: "Show items not strictly related to the target metal",
        resetPrompt: "Reset all inventory values and shopping cart to zero?", restartPrompt: "Restart the pipeline? This will un-check all steps and remove their yields from your inventory.", modalActionsTitle: "Pipeline Actions",
        discHeader: "LOGISTICS ORDER", discReq: "MISSING COMPONENTS:", discStock: "All gathering covered.", discCopied: "Copied to clipboard!",
        discMarket: "MARKET PURCHASES:", errWebhook: "Please enter a valid Discord Webhook URL.", errSend: "Failed to send to Discord.", sucSend: "Order dispatched to Discord!",
        qAdd: "+10k", qAddStk: "+1 Stk", qSub: "-10k", qSubStk: "-1 Stk", byproductsTitle: "TOTAL RECOVERED BYPRODUCTS", bpTitle: "TOTAL RECOVERED BYPRODUCTS", btnBp: "Byproducts",
        btnPrefEfficient: "Efficient Path", btnPrefYield: "Max Yield", lblEfficient: "Efficient", lblMaxYield: "Max Yield", lblRegionLocked: "Region Locked",
        chkBp: "Show byproducts", colorAccent: "Primary Color", colorBg: "Secondary Color", colorText: "Text Color", btnResetColors: "Reset Colors to Default",
        viewPers: "Personalization", viewVis: "Module Visibility", viewLang: "Language", viewGather: "Missing Components", viewPipe: "Manufacturing Pipeline", viewProdCmd: "Production Command",
        btnCart: "Cart", btnSettings: "Settings", btnHelp: "Help", btnExportCSV: "Export to CSV", actDiscord: "Discord Dispatch",
        btnMaxText: "Calculate Max Craftable", maxTitle: "Crafting Limit Reached", maxAcknowledge: "Acknowledge",
        maxCraftAny: "Cannot craft any [item] with your current bank.", maxMissing: "To reach your original target of [target], you are still missing:", maxTotalCraft: "You have enough materials to craft", maxCalculatedGoal: "You have enough to meet or exceed your target.",
        legAcronyms: "Acronyms", legEff: "Efficient", legYld: "Max Yield", legReg: "Region Locked", categories: baseCategories, items: baseItems,
        helpHtml: `
            <p>Welcome to the <strong>Quartermaster Command</strong> Help Page. This application is an advanced, offline-capable dashboard designed to simplify complex metallurgy and extraction pipelines in Mortal Online 2.</p>
            <p>Below you will find a breakdown of every feature and how to utilize it to maximize your refining efficiency.</p>
            <h3 style="border-bottom: 1px solid var(--border); padding-bottom: 4px; margin-top: 20px;">🌟 Key Features & How to Use Them</h3>
            <h4 style="color:var(--text); margin-bottom: 5px;">1. Pipeline Intelligence & Dynamic Recipe Routing</h4>
            <ul style="margin-top: 0;">
                <li style="margin-bottom: 6px;"><strong>What it does:</strong> Automatically maps out the multi-step extraction, refining, and smelting tasks required for complex metals like Steel, Tungsteel, and Oghmium.</li>
                <li style="margin-bottom: 6px;"><strong>How to use it:</strong> Select your target metal and quantity. Choose your routing method:
                    <ul style="margin-top: 4px;">
                        <li style="margin-bottom: 4px;"><strong>[E] Efficient Path:</strong> Prioritizes recipes with the lowest raw material cost.</li>
                        <li style="margin-bottom: 4px;"><strong>[Y] Max Yield:</strong> Prioritizes recipes that generate the highest amount of secondary byproducts.</li>
                        <li style="margin-bottom: 4px;"><strong>[R] Region Locked:</strong> Restricts the calculation to only use machinery available in your specific local region.</li>
                    </ul>
                </li>
            </ul>
            <h4 style="color:var(--text); margin-bottom: 5px;">2. Calculate Max Craftable</h4>
            <ul style="margin-top: 0;">
                <li style="margin-bottom: 6px;"><strong>What it does:</strong> Instantly calculates the absolute maximum amount of a target metal you can produce based <em>strictly</em> on what you currently have in your bags or bank.</li>
                <li style="margin-bottom: 6px;"><strong>How to use it:</strong> Enter your current on-hand materials into the inventory system, select your target metal, and trigger the calculation.</li>
            </ul>
            <h4 style="color:var(--text); margin-bottom: 5px;">3. Smart Market Cart</h4>
            <ul style="margin-top: 0;">
                <li style="margin-bottom: 6px;"><strong>What it does:</strong> Acts as a shopping list and budget tracker for your refining pipelines.</li>
                <li style="margin-bottom: 6px;"><strong>How to use it:</strong> Input local market prices and desired buy quantities. Use the <strong>Auto-Fill</strong> feature to let the system automatically calculate exactly what materials you are missing. The total gold cost updates dynamically.</li>
            </ul>
            <h4 style="color:var(--text); margin-bottom: 5px;">4. Discord Dispatch</h4>
            <ul style="margin-top: 0;">
                <li style="margin-bottom: 6px;"><strong>What it does:</strong> Generates a beautifully formatted Markdown work order—cleanly separating items you need to buy on the Market from items that require Manual Gathering.</li>
                <li style="margin-bottom: 6px;"><strong>How to use it:</strong> Once your pipeline and cart are ready, trigger the dispatch. Copy the text directly or push it straight to a Discord Webhook.</li>
            </ul>
            <h4 style="color:var(--text); margin-bottom: 5px;">5. State Sharing & Export</h4>
            <ul style="margin-top: 0;">
                <li style="margin-bottom: 6px;"><strong>What it does:</strong> Allows you to save your current inventory, shopping cart, and pipeline goals to share with other crafters.</li>
                <li style="margin-bottom: 6px;"><strong>How to use it:</strong> Click export to generate a short string code to share with guildmates, or choose CSV export to download your data as a spreadsheet.</li>
            </ul>
            <h4 style="color:var(--text); margin-bottom: 5px;">6. Deep Customization & Bilingual Support</h4>
            <ul style="margin-top: 0;">
                <li style="margin-bottom: 6px;"><strong>Languages:</strong> Toggle between multiple languages at any time from the app settings.</li>
                <li style="margin-bottom: 6px;"><strong>Customization:</strong> Access settings to toggle Dark/Light modes, adjust accent colors, and hide modules you don't actively need.</li>
            </ul>
            <h3 style="border-bottom: 1px solid var(--border); padding-bottom: 4px; margin-top: 20px;">🚀 Installation & Offline Setup</h3>
            <p>Quartermaster Command is a static, client-side application requiring no backend.</p>
            <ul style="margin-top: 0;">
                <li style="margin-bottom: 6px;"><strong>Web Browser:</strong> Simply access the hosted URL.</li>
                <li style="margin-bottom: 6px;"><strong>Mobile / App Install (PWA):</strong> Visit the URL on a supported device and tap "Add to Home Screen" to install it as a native offline app.</li>
                <li style="margin-bottom: 6px;"><strong>Local Use:</strong> Download the repository files and double-click <code>index.html</code>.</li>
            </ul>`
    },

    fr: {
        tabPrefs: "Préférences", tabData: "Données", tabHelp: "Aide", tabView: "Vue", tabGuide: "Aide", tabLegend: "Légende",
        resetDesc: "Effacez tout votre inventaire, les quantités du panier et les objectifs.",
        shareTitle: "Partager / Importer", shareDesc: "Générez un code pour partager votre inventaire, votre panier et votre objectif, ou collez un code pour charger celui d'un autre.",
        btnGenCode: "Générer & Copier", btnLoadCode: "Charger le Code", importSuccess: "Configuration chargée avec succès !", importError: "Code invalide fourni.", exportSuccess: "Code copié dans le presse-papiers !",
        format: "Format d'affichage", optUnits: "Unités", optStacks: "Piles (10k)", webhook: "URL du Webhook Discord",
        btnProd: "Production", prodCmdTitle: "Commande de Production", targetMetalLabel: "Ressource Cible", crafters: "Artisans", target: "Quantité",
        btnAutoFill: "Remplir", btnClearCart: "Vider",
        yieldMods: "Préférences", mastery: "Maîtrise (+6%)", refining: "Raffinage (+3%)", extraction: "Extraction (+3%)",
        btnDiscord: "Copier dans le presse-papiers", btnSend: "Envoyer l'ordre sur Discord",
        btnPrefs: "Préférences", yieldModsModal: "Préférences",
        btnBank: "Inventaire", invBankTitle: "Inventaire",
        invBank: "Inventaire", showAllBank: "Afficher tous les matériaux", showAllCart: "Afficher tous les matériaux", btnReset: "Tout réinitialiser", defGather: "Composants manquants", mfgPipe: "Pipeline de fabrication", marketCart: "Panier du marché", marketCartTitle: "Panier du marché",
        tblPrice: "Prix", tblBuy: "Quantité à acheter", tblCost: "Coût", tblStash: "Stock", cartTotal: "Total du panier :", tblOrder: "Commande",
        noTarget: "Aucun objectif défini.", allCovered: "L'inventaire et le panier couvrent tous les matériaux requis !", searchPlaceholder: "Rechercher...",
        verbCrush: "Concassez", verbGrind: "Broyez", verbExtract: "Extrayez", verbSmelt: "Fondez", verbBake: "Cuisez", verbAlloy: "Alliez", verbProcess: "Traitez",
        inMachine: "dans le", stepWith: "avec", stepAnd: "et", perCrafter: "(Par artisan)", stepPrefix: "Étape",
        stepYieldsMain: "Produits :", stepByproducts: "Sous-produits :", none: "Aucun",
        pipeCompleted: "Progression de la production", btnPipeReset: "Réinitialiser",
        tooltipBestYield: "Plus efficace (Coût matériel total le plus bas)", tooltipMaxYield: "Maximum de sous-produits générés", tooltipRegionLocked: "Restreint par région",
        tooltipMaxCraft: "Calculez ce que vous pouvez fabriquer uniquement avec votre inventaire", tooltipShowAll: "Afficher les éléments non strictement liés au métal cible",
        resetPrompt: "Réinitialiser toutes les valeurs d'inventaire et le panier à zéro ?", restartPrompt: "Redémarrer le pipeline ? Cela décochea toutes les étapes et supprimera leurs produits de votre inventaire.", modalActionsTitle: "Actions du pipeline",
        discHeader: "ORDRE LOGISTIQUE", discReq: "COMPOSANTS MANQUANTS :", discStock: "Toute la récolte est couverte.", discCopied: "Copié dans le presse-papiers !",
        discMarket: "ACHATS AU MARCHÉ :", errWebhook: "Veuillez entrer une URL de Webhook Discord valide.", errSend: "Échec de l'envoi vers Discord.", sucSend: "Ordre envoyé sur Discord !",
        qAdd: "+10k", qAddStk: "+1 Pile", qSub: "-10k", qSubStk: "-1 Pile", byproductsTitle: "TOTAL DES SOUS-PRODUITS RÉCUPÉRÉS", bpTitle: "TOTAL DES SOUS-PRODUITS RÉCUPÉRÉS", btnBp: "Sous-produits",
        btnPrefEfficient: "Route Efficace", btnPrefYield: "Rendement Max", lblEfficient: "Efficace", lblMaxYield: "Rendement Max", lblRegionLocked: "RESTREINT PAR RÉGION",
        chkBp: "Afficher les sous-produits", colorAccent: "Couleur primaire", colorBg: "Couleur secondaire", colorText: "Couleur du texte", btnResetColors: "Réinitialiser les couleurs par défaut",
        viewPers: "Personnalisation", viewVis: "Visibilité des modules", viewLang: "Langue", viewGather: "Composants manquants", viewPipe: "Pipeline de fabrication", viewProdCmd: "Commande de production",
        btnCart: "Panier", btnSettings: "Paramètres", btnHelp: "Aide", btnExportCSV: "Exporter en CSV", actDiscord: "Envoi Discord",
        btnMaxText: "Calculer le max fabricable", maxTitle: "Limite de fabrication atteinte", maxAcknowledge: "Accepter",
        maxCraftAny: "Impossible de fabriquer du [item] avec votre banque actuelle.", maxMissing: "Pour atteindre votre objectif initial de [target], il vous manque encore :", maxTotalCraft: "Vous avez assez de matériaux pour fabriquer", maxCalculatedGoal: "Vous avez tout ce qu'il faut pour atteindre votre objectif !",
        legAcronyms: "Acronymes", legEff: "Efficace", legYld: "Rendement Max", legReg: "Restreint par région",
        categories: {
            raw: "Matières premières", basicExt: "Extractions de base", intOre: "Minerais intermédiaires", advOre: "Minerais avancés", catalyst: "Catalyseurs", refined: "Métaux raffinés",
            "Raw Materials": "Matières premières", "Basic Extractions": "Extractions de base", "Intermediate Ores": "Minerais intermédiaires", "Advanced Ores": "Minerais avancés", "Catalysts": "Catalyseurs", "Refined Metals": "Métaux raffinés"
        },
        items: baseItems,
        helpHtml: `
            <p>Bienvenue sur la page d'aide de <strong>Quartermaster Command</strong>. Cette application est un tableau de bord avancé, fonctionnant hors-ligne, conçu pour simplifier les processus complexes de métallurgie et d'extraction dans Mortal Online 2.</p>
            <p>Vous trouverez ci-dessous une description détaillée de chaque fonctionnalité et de la manière de l'utiliser pour maximiser l'efficacité de votre raffinage.</p>
            <h3 style="border-bottom: 1px solid var(--border); padding-bottom: 4px; margin-top: 20px;">🌟 Fonctionnalités Principales et Guide d'Utilisation</h3>
            <h4 style="color:var(--text); margin-bottom: 5px;">1. Intelligence de Pipeline & Routage Dynamique</h4>
            <ul style="margin-top: 0;">
                <li style="margin-bottom: 6px;"><strong>Ce que ça fait :</strong> Planifie automatiquement les étapes complexes d'extraction, de raffinage et de fusion requises pour des métaux avancés comme l'Acier, le Tungsteel et l'Oghmium.</li>
                <li style="margin-bottom: 6px;"><strong>Comment l'utiliser :</strong> Sélectionnez le métal désiré et la quantité. Choisissez votre méthode de routage :
                    <ul style="margin-top: 4px;">
                        <li style="margin-bottom: 4px;"><strong>[E] Voie Efficace :</strong> Priorise les recettes avec le coût en matières premières le plus bas.</li>
                        <li style="margin-bottom: 4px;"><strong>[Y] Rendement Maximum :</strong> Priorise les recettes qui génèrent la plus grande quantité de sous-produits secondaires.</li>
                        <li style="margin-bottom: 4px;"><strong>[R] Verrouillage Régional :</strong> Restreint le calcul pour utiliser uniquement les machines disponibles dans votre région spécifique.</li>
                    </ul>
                </li>
            </ul>
            <h4 style="color:var(--text); margin-bottom: 5px;">2. Calcul du Maximum Fabricable</h4>
            <ul style="margin-top: 0;">
                <li style="margin-bottom: 6px;"><strong>Ce que ça fait :</strong> Calcule instantanément la quantité maximale absolue d'un métal cible que vous pouvez fabriquer en vous basant <em>strictement</em> sur ce que vous avez actuellement dans vos sacs ou votre banque.</li>
                <li style="margin-bottom: 6px;"><strong>Comment l'utiliser :</strong> Entrez vos matériaux actuels dans le système d'inventaire, sélectionnez votre métal cible et lancez le calcul.</li>
            </ul>
            <h4 style="color:var(--text); margin-bottom: 5px;">3. Panier de Marché Intelligent</h4>
            <ul style="margin-top: 0;">
                <li style="margin-bottom: 6px;"><strong>Ce que ça fait :</strong> Sert de liste de courses et de suivi budgétaire pour vos pipelines de raffinage.</li>
                <li style="margin-bottom: 6px;"><strong>Comment l'utiliser :</strong> Saisissez les prix du marché local et les quantités souhaitées. Utilisez <strong>Remplissage Automatique</strong> pour calculer les matériaux manquants. Le coût total en or se met à jour dynamiquement.</li>
            </ul>
            <h4 style="color:var(--text); margin-bottom: 5px;">4. Envoi sur Discord (Discord Dispatch)</h4>
            <ul style="margin-top: 0;">
                <li style="margin-bottom: 6px;"><strong>Ce que ça fait :</strong> Génère un bon de travail magnifiquement formaté en Markdown, séparant les articles à acheter de ceux nécessitant une récolte manuelle.</li>
                <li style="margin-bottom: 6px;"><strong>Comment l'utiliser :</strong> Une fois prêt, déclenchez l'envoi pour copier le texte ou le pousser vers un Webhook Discord.</li>
            </ul>
            <h4 style="color:var(--text); margin-bottom: 5px;">5. Partage d'État et Exportation</h4>
            <ul style="margin-top: 0;">
                <li style="margin-bottom: 6px;"><strong>Ce que ça fait :</strong> Permet de sauvegarder votre inventaire, panier et objectifs pour les partager.</li>
                <li style="margin-bottom: 6px;"><strong>Comment l'utiliser :</strong> Cliquez sur exporter pour générer un code texte à partager avec votre guilde, ou exportez en CSV.</li>
            </ul>
            <h4 style="color:var(--text); margin-bottom: 5px;">6. Personnalisation Avancée et Bilinguisme</h4>
            <ul style="margin-top: 0;">
                <li style="margin-bottom: 6px;"><strong>Langues :</strong> Basculez entre plusieurs langues depuis les paramètres.</li>
                <li style="margin-bottom: 6px;"><strong>Personnalisation :</strong> Ajustez le mode Sombre/Clair, les couleurs d'accentuation, et masquez les panneaux inutilisés.</li>
            </ul>
            <h3 style="border-bottom: 1px solid var(--border); padding-bottom: 4px; margin-top: 20px;">🚀 Installation et Configuration Hors-Ligne</h3>
            <p>Quartermaster Command est une application statique côté client (aucun serveur requis).</p>
            <ul style="margin-top: 0;">
                <li style="margin-bottom: 6px;"><strong>Utilisation Web :</strong> Accédez simplement à l'URL hébergée.</li>
                <li style="margin-bottom: 6px;"><strong>Installation Mobile / PWA :</strong> Visitez l'URL sur un appareil compatible et appuyez sur "Ajouter à l'écran d'accueil".</li>
                <li style="margin-bottom: 6px;"><strong>Utilisation Locale :</strong> Téléchargez les fichiers et ouvrez <code>index.html</code>.</li>
            </ul>`
    },

    de: {
        tabPrefs: "Einstellungen", tabData: "Daten", tabHelp: "Hilfe", tabView: "Ansicht", tabGuide: "Anleitung", tabLegend: "Legende",
        resetDesc: "Löschen Sie Ihr gesamtes gespeichertes Inventar, die Warenkorbmengen und Ziele.",
        shareTitle: "Setup Teilen / Importieren", shareDesc: "Generieren Sie einen Code, um Ihr aktuelles Setup zu teilen, oder fügen Sie einen Code ein.",
        btnGenCode: "Generieren & Kopieren", btnLoadCode: "Code Laden", importSuccess: "Setup erfolgreich geladen!", importError: "Ungültiger Code.", exportSuccess: "Code in die Zwischenablage kopiert!",
        format: "Anzeigeformat", optUnits: "Einheiten", optStacks: "Stapel (10k)", webhook: "Discord Webhook-URL",
        btnProd: "Produktion", prodCmdTitle: "Produktionsbefehl", targetMetalLabel: "Zielressource", crafters: "Handwerker", target: "Menge",
        btnAutoFill: "Füllen", btnClearCart: "Leeren",
        yieldMods: "Präferenzen", mastery: "Meisterschaft (+6%)", refining: "Raffinierung (+3%)", extraction: "Extraktion (+3%)",
        btnDiscord: "In Zwischenablage kopieren", btnSend: "Auftrag an Discord senden", btnPrefs: "Präferenzen", yieldModsModal: "Präferenzen",
        btnBank: "Inventar", invBankTitle: "Inventar",
        invBank: "Inventar", showAllBank: "Alle Materialien anzeigen", showAllCart: "Alle Materialien anzeigen", btnReset: "Alles Zurücksetzen", defGather: "Fehlende Komponenten", mfgPipe: "Fertigungspipeline", marketCart: "Warenkorb", marketCartTitle: "Warenkorb",
        tblPrice: "Preis", tblBuy: "Kaufmenge", tblCost: "Kosten", tblStash: "Vorrat", cartTotal: "Warenkorb Gesamt:", tblOrder: "Bestellung",
        noTarget: "Kein Ziel festgelegt.", allCovered: "Inventar & Warenkorb decken alle benötigten Materialien ab!", searchPlaceholder: "Suchen...",
        verbCrush: "Zerkleinern", verbGrind: "Mahlen", verbExtract: "Extrahieren", verbSmelt: "Schmelzen", verbBake: "Backen", verbAlloy: "Legieren", verbProcess: "Verarbeiten",
        inMachine: "im", stepWith: "mit", stepAnd: "und", perCrafter: "(Pro Handwerker)", stepPrefix: "Schritt",
        stepYieldsMain: "Ergibt:", stepByproducts: "Nebenprodukte:", none: "Keine",
        pipeCompleted: "Produktionsfortschritt", btnPipeReset: "Zurücksetzen",
        tooltipBestYield: "Am effizientesten (Niedrigste Materialkosten)", tooltipMaxYield: "Max. Nebenprodukte generiert", tooltipRegionLocked: "Region-gesperrt",
        tooltipMaxCraft: "Berechnen, wie viel mit dem Inventar herstellbar ist", tooltipShowAll: "Materialien anzeigen, die nicht zum Zielmetall gehören",
        resetPrompt: "Alle Inventarwerte und den Warenkorb auf null zurücksetzen?", restartPrompt: "Pipeline neu starten? Dadurch werden alle Schritte deaktiviert und Ausbeuten entfernt.", modalActionsTitle: "Pipeline-Aktionen",
        discHeader: "LOGISTIKAUFTRAG", discReq: "FEHLENDE KOMPONENTEN:", discStock: "Alle Materialien abgedeckt.", discCopied: "Kopiert!",
        discMarket: "MARKTKÄUFE:", errWebhook: "Bitte gültige Discord-Webhook-URL eingeben.", errSend: "Fehler beim Senden an Discord.", sucSend: "Auftrag an Discord gesendet!",
        qAdd: "+10k", qAddStk: "+1 Stk", qSub: "-10k", qSubStk: "-1 Stk", byproductsTitle: "GESAMTE NEBENPRODUKTE", bpTitle: "GESAMTE NEBENPRODUKTE", btnBp: "Nebenprodukte",
        btnPrefEfficient: "Effizienter Pfad", btnPrefYield: "Max. Ausbeute", lblEfficient: "Effizient", lblMaxYield: "Max. Ausbeute", lblRegionLocked: "Region-gesperrt",
        chkBp: "Nebenprodukte anzeigen", colorAccent: "Primärfarbe", colorBg: "Sekundärfarbe", colorText: "Textfarbe", btnResetColors: "Farben zurücksetzen",
        viewPers: "Personalisierung", viewVis: "Modulsichtbarkeit", viewLang: "Sprache", viewGather: "Fehlende Komponenten", viewPipe: "Fertigungspipeline", viewProdCmd: "Produktionsbefehl",
        btnCart: "Warenkorb", btnSettings: "Einstellungen", btnHelp: "Hilfe", btnExportCSV: "Als CSV exportieren", actDiscord: "Discord-Versand",
        btnMaxText: "Max. Herstellbar berechnen", maxTitle: "Herstellungslimit erreicht", maxAcknowledge: "Bestätigen",
        maxCraftAny: "Kann mit aktuellem Inventar kein [item] herstellen.", maxMissing: "Um das ursprüngliche Ziel von [target] zu erreichen, fehlt:", maxTotalCraft: "Ausreichend Materialien zum Herstellen von", maxCalculatedGoal: "Sie haben genug, um das Ziel zu erreichen.",
        legAcronyms: "Akronyme", legEff: "Effizient", legYld: "Max. Ausbeute", legReg: "Region-gesperrt",
        categories: { raw: "Rohmaterialien", basicExt: "Basis-Extraktionen", intOre: "Zwischenerze", advOre: "Fortgeschrittene Erze", catalyst: "Katalysatoren", refined: "Raffinierte Metalle", "Raw Materials": "Rohmaterialien", "Basic Extractions": "Basis-Extraktionen", "Intermediate Ores": "Zwischenerze", "Advanced Ores": "Fortgeschrittene Erze", "Catalysts": "Katalysatoren", "Refined Metals": "Raffinierte Metalle" },
        items: baseItems,
        helpHtml: `<p>Willkommen auf der <strong>Quartermaster Command</strong> Hilfeseite. Verwenden Sie das Seitenleistenmenü für die Navigation. Das System wählt automatisch die besten Routen zum Raffinieren.</p>`
    },

    es: {
        tabPrefs: "Preferencias", tabData: "Datos", tabHelp: "Ayuda", tabView: "Vista", tabGuide: "Guía", tabLegend: "Leyenda",
        resetDesc: "Borra todo tu inventario guardado, carrito y objetivos.",
        shareTitle: "Compartir / Importar Configuración", shareDesc: "Genera un código para compartir tu configuración, o pega uno para cargarlo.",
        btnGenCode: "Generar y Copiar", btnLoadCode: "Cargar Código", importSuccess: "¡Configuración cargada!", importError: "Código inválido.", exportSuccess: "¡Copiado al portapapeles!",
        format: "Formato de Visualización", optUnits: "Unidades", optStacks: "Pilas (10k)", webhook: "URL de Webhook de Discord",
        btnProd: "Producción", prodCmdTitle: "Comando de Producción", targetMetalLabel: "Recurso Objetivo", crafters: "Artesanos", target: "Cantidad",
        btnAutoFill: "Llenar", btnClearCart: "Limpiar",
        yieldMods: "Preferencias", mastery: "Maestría (+6%)", refining: "Refinado (+3%)", extraction: "Extracción (+3%)",
        btnDiscord: "Copiar al Portapapeles", btnSend: "Enviar Pedido a Discord", btnPrefs: "Preferencias", yieldModsModal: "Preferencias",
        btnBank: "Inventario", invBankTitle: "Inventario",
        invBank: "Inventario", showAllBank: "Mostrar todos los materiales", showAllCart: "Mostrar todos los materiales", btnReset: "Restablecer Todo", defGather: "Componentes Faltantes", mfgPipe: "Línea de Fabricación", marketCart: "Carrito de Mercado", marketCartTitle: "Carrito de Mercado",
        tblPrice: "Precio", tblBuy: "Cantidad a Comprar", tblCost: "Costo", tblStash: "Reserva", cartTotal: "Total del Carrito:", tblOrder: "Pedido",
        noTarget: "Sin objetivo establecido.", allCovered: "¡El inventario cubre todos los materiales requeridos!", searchPlaceholder: "Buscar...",
        verbCrush: "Triturar", verbGrind: "Moler", verbExtract: "Extraer", verbSmelt: "Fundir", verbBake: "Hornear", verbAlloy: "Alear", verbProcess: "Procesar",
        inMachine: "en la", stepWith: "con", stepAnd: "y", perCrafter: "(Por Artesano)", stepPrefix: "Paso",
        stepYieldsMain: "Produce:", stepByproducts: "Subproductos:", none: "Ninguno",
        pipeCompleted: "Progreso de Producción", btnPipeReset: "Restablecer",
        tooltipBestYield: "Más Eficiente (Menor Costo de Materiales)", tooltipMaxYield: "Máx. Subproductos Generados", tooltipRegionLocked: "Bloqueado por Región",
        tooltipMaxCraft: "Calcular cuánto se puede hacer solo con el inventario", tooltipShowAll: "Mostrar elementos no relacionados",
        resetPrompt: "¿Restablecer todos los valores a cero?", restartPrompt: "¿Reiniciar la línea de producción? Esto desmarcará los pasos y eliminará las ganancias.", modalActionsTitle: "Acciones de la Línea",
        discHeader: "PEDIDO LOGÍSTICO", discReq: "COMPONENTES FALTANTES:", discStock: "Toda la recolección está cubierta.", discCopied: "¡Copiado!",
        discMarket: "COMPRAS EN EL MERCADO:", errWebhook: "Por favor, introduce una URL válida.", errSend: "Error al enviar a Discord.", sucSend: "¡Pedido enviado a Discord!",
        qAdd: "+10k", qAddStk: "+1 Pila", qSub: "-10k", qSubStk: "-1 Pila", byproductsTitle: "TOTAL DE SUBPRODUCTOS", bpTitle: "TOTAL DE SUBPRODUCTOS", btnBp: "Subproductos",
        btnPrefEfficient: "Ruta Eficiente", btnPrefYield: "Máx. Rendimiento", lblEfficient: "Eficiente", lblMaxYield: "Máx. Rendimiento", lblRegionLocked: "Bloqueo Regional",
        chkBp: "Mostrar subproductos", colorAccent: "Color Principal", colorBg: "Color Secundario", colorText: "Color de Texto", btnResetColors: "Restablecer Colores",
        viewPers: "Personalización", viewVis: "Visibilidad de Módulos", viewLang: "Idioma", viewGather: "Componentes Faltantes", viewPipe: "Línea de Fabricación", viewProdCmd: "Comando de Producción",
        btnCart: "Carrito", btnSettings: "Ajustes", btnHelp: "Ayuda", btnExportCSV: "Exportar a CSV", actDiscord: "Despacho Discord",
        btnMaxText: "Calcular Máximo Fabricable", maxTitle: "Límite de Elaboración", maxAcknowledge: "Aceptar",
        maxCraftAny: "No se puede elaborar [item] con el banco actual.", maxMissing: "Para alcanzar tu objetivo original de [target], todavía te falta:", maxTotalCraft: "Tienes suficientes materiales para elaborar", maxCalculatedGoal: "Tienes suficiente para alcanzar tu objetivo.",
        legAcronyms: "Acrónimos", legEff: "Eficiente", legYld: "Máx. Rendimiento", legReg: "Bloqueo Regional",
        categories: { raw: "Materias Primas", basicExt: "Extracciones Básicas", intOre: "Minerales Intermedios", advOre: "Minerales Avanzados", catalyst: "Catalizadores", refined: "Metales Refinados", "Raw Materials": "Materias Primas", "Basic Extractions": "Extracciones Básicas", "Intermediate Ores": "Minerales Intermedios", "Advanced Ores": "Minerales Avanzados", "Catalysts": "Catalizadores", "Refined Metals": "Metales Refinados" },
        items: baseItems,
        helpHtml: `<p>Bienvenido a la página de ayuda de <strong>Quartermaster Command</strong>. Usa la barra lateral para navegar. El sistema calcula automáticamente la mejor ruta de fabricación.</p>`
    },

    it: {
        tabPrefs: "Preferenze", tabData: "Dati", tabHelp: "Aiuto", tabView: "Vista", tabGuide: "Guida", tabLegend: "Leggenda",
        resetDesc: "Cancella tutto l'inventario salvato, il carrello e gli obiettivi.",
        shareTitle: "Condividi / Importa", shareDesc: "Genera un codice per condividere la configurazione, o incollane uno per caricarlo.",
        btnGenCode: "Genera & Copia", btnLoadCode: "Carica Codice", importSuccess: "Configurazione caricata!", importError: "Codice non valido.", exportSuccess: "Copiato negli appunti!",
        format: "Formato", optUnits: "Unità", optStacks: "Pile (10k)", webhook: "URL Webhook Discord",
        btnProd: "Produzione", prodCmdTitle: "Comando di Produzione", targetMetalLabel: "Risorsa Obiettivo", crafters: "Artigiani", target: "Quantità",
        btnAutoFill: "Riempi", btnClearCart: "Svuota",
        yieldMods: "Preferenze", mastery: "Maestria (+6%)", refining: "Raffinazione (+3%)", extraction: "Estrazione (+3%)",
        btnDiscord: "Copia negli Appunti", btnSend: "Invia Ordine a Discord", btnPrefs: "Preferenze", yieldModsModal: "Preferenze",
        btnBank: "Inventario", invBankTitle: "Inventario",
        invBank: "Inventario", showAllBank: "Mostra tutti i materiali", showAllCart: "Mostra tutti i materiali", btnReset: "Resetta Tutto", defGather: "Componenti Mancanti", mfgPipe: "Linea di Produzione", marketCart: "Carrello", marketCartTitle: "Carrello",
        tblPrice: "Prezzo", tblBuy: "Q.tà da Comprare", tblCost: "Costo", tblStash: "Scorta", cartTotal: "Totale Carrello:", tblOrder: "Ordine",
        noTarget: "Nessun obiettivo impostato.", allCovered: "Inventario copre tutti i materiali richiesti!", searchPlaceholder: "Cerca...",
        verbCrush: "Frantuma", verbGrind: "Macina", verbExtract: "Estrai", verbSmelt: "Fondi", verbBake: "Cuoci", verbAlloy: "Lega", verbProcess: "Processa",
        inMachine: "nel", stepWith: "con", stepAnd: "e", perCrafter: "(Per Artigiano)", stepPrefix: "Fase",
        stepYieldsMain: "Produce:", stepByproducts: "Sottoprodotti:", none: "Nessuno",
        pipeCompleted: "Progresso", btnPipeReset: "Resetta",
        tooltipBestYield: "Più Efficace (Costo Materiali Minore)", tooltipMaxYield: "Max Sottoprodotti Generati", tooltipRegionLocked: "Blocco Regionale",
        tooltipMaxCraft: "Calcola quanto si può produrre con l'inventario attuale", tooltipShowAll: "Mostra elementi non strettamente collegati",
        resetPrompt: "Resettare tutti i valori a zero?", restartPrompt: "Riavviare la produzione?", modalActionsTitle: "Azioni",
        discHeader: "ORDINE LOGISTICO", discReq: "COMPONENTI MANCANTI:", discStock: "Materiali coperti.", discCopied: "Copiato!",
        discMarket: "ACQUISTI MERCATO:", errWebhook: "Inserisci un URL Discord valido.", errSend: "Errore nell'invio.", sucSend: "Ordine inviato a Discord!",
        qAdd: "+10k", qAddStk: "+1 Pila", qSub: "-10k", qSubStk: "-1 Pila", byproductsTitle: "TOTALE SOTTOPRODOTTI", bpTitle: "TOTALE SOTTOPRODOTTI", btnBp: "Sottoprodotti",
        btnPrefEfficient: "Percorso Efficace", btnPrefYield: "Max Resa", lblEfficient: "Efficace", lblMaxYield: "Max Resa", lblRegionLocked: "Blocco Reg.",
        chkBp: "Mostra sottoprodotti", colorAccent: "Colore Primario", colorBg: "Colore Secondario", colorText: "Colore Testo", btnResetColors: "Resetta Colori",
        viewPers: "Personalizzazione", viewVis: "Visibilità Moduli", viewLang: "Lingua", viewGather: "Componenti Mancanti", viewPipe: "Linea di Produzione", viewProdCmd: "Comando di Produzione",
        btnCart: "Carrello", btnSettings: "Impostazioni", btnHelp: "Aiuto", btnExportCSV: "Esporta CSV", actDiscord: "Spedizione Discord",
        btnMaxText: "Calcola Max Producibile", maxTitle: "Limite Raggiunto", maxAcknowledge: "Accetta",
        maxCraftAny: "Impossibile produrre [item] con la banca attuale.", maxMissing: "Per raggiungere l'obiettivo originale di [target], manca:", maxTotalCraft: "Hai materiali sufficienti per produrre", maxCalculatedGoal: "Hai abbastanza per raggiungere l'obiettivo.",
        legAcronyms: "Acronimi", legEff: "Efficace", legYld: "Max Resa", legReg: "Blocco Reg.",
        categories: { raw: "Materie Prime", basicExt: "Estrazioni Base", intOre: "Minerali Intermedi", advOre: "Minerali Avanzati", catalyst: "Catalizzatori", refined: "Metalli Raffinati", "Raw Materials": "Materie Prime", "Basic Extractions": "Estrazioni Base", "Intermediate Ores": "Minerali Intermedi", "Advanced Ores": "Minerali Avanzados", "Catalysts": "Catalizzatori", "Refined Metals": "Metalli Raffinati" },
        items: baseItems,
        helpHtml: `<p>Benvenuti in <strong>Quartermaster Command</strong>. Questo sistema calcola automaticamente i requisiti per la raffinazione dei metalli.</p>`
    },

    ar: {
        tabPrefs: "التفضيلات", tabData: "بيانات", tabHelp: "مساعدة", tabView: "عرض", tabGuide: "دليل", tabLegend: "مفتاح الرموز",
        resetDesc: "مسح جميع المخزونات المحفوظة، وكميات سلة السوق، والأهداف.",
        shareTitle: "مشاركة / استيراد الإعداد", shareDesc: "قم بإنشاء رمز لمشاركة إعدادك الحالي، أو الصق رمزًا لتحميل إعداد آخر.",
        btnGenCode: "إنشاء ونسخ", btnLoadCode: "تحميل الرمز", importSuccess: "تم التحميل بنجاح!", importError: "رمز غير صالح.", exportSuccess: "تم النسخ!",
        format: "تنسيق العرض", optUnits: "وحدات", optStacks: "رزم (10k)", webhook: "رابط Discord Webhook",
        btnProd: "الإنتاج", prodCmdTitle: "أمر الإنتاج", targetMetalLabel: "المورد الهدف", crafters: "الحرفيون", target: "الكمية",
        btnAutoFill: "ملء", btnClearCart: "مسح",
        yieldMods: "التفضيلات", mastery: "إتقان (+6%)", refining: "تكرير (+3%)", extraction: "استخراج (+3%)",
        btnDiscord: "نسخ إلى الحافظة", btnSend: "إرسال الطلب إلى Discord", btnPrefs: "التفضيلات", yieldModsModal: "التفضيلات",
        btnBank: "المخزون", invBankTitle: "المخزون",
        invBank: "المخزون", showAllBank: "إظهار كل المواد", showAllCart: "إظهار كل المواد", btnReset: "إعادة ضبط الكل", defGather: "المكونات المفقودة", mfgPipe: "خط التصنيع", marketCart: "سلة السوق", marketCartTitle: "سلة السوق",
        tblPrice: "السعر", tblBuy: "كمية الشراء", tblCost: "التكلفة", tblStash: "المخزون", cartTotal: "إجمالي السلة:", tblOrder: "الطلب",
        noTarget: "لم يتم تحديد هدف.", allCovered: "المخزون يغطي جميع المواد المطلوبة!", searchPlaceholder: "بحث...",
        verbCrush: "سحق", verbGrind: "طحن", verbExtract: "استخراج", verbSmelt: "صهر", verbBake: "خبز", verbAlloy: "سبك", verbProcess: "معالجة",
        inMachine: "في", stepWith: "مع", stepAnd: "و", perCrafter: "(لكل حرفي)", stepPrefix: "خطوة",
        stepYieldsMain: "الإنتاج:", stepByproducts: "النواتج الثانوية:", none: "لا يوجد",
        pipeCompleted: "تقدم الإنتاج", btnPipeReset: "إعادة ضبط",
        tooltipBestYield: "الأكثر كفاءة (أقل تكلفة مواد)", tooltipMaxYield: "أقصى نواتج ثانوية", tooltipRegionLocked: "مخصص للمنطقة",
        tooltipMaxCraft: "احسب الحد الأقصى الذي يمكنك صنعه", tooltipShowAll: "إظهار العناصر غير المرتبطة بالهدف",
        resetPrompt: "هل تريد إعادة ضبط جميع القيم إلى الصفر؟", restartPrompt: "هل تريد إعادة تشغيل خط الإنتاج؟", modalActionsTitle: "إجراءات الخط",
        discHeader: "طلب لوجستي", discReq: "المكونات المفقودة:", discStock: "المواد متوفرة.", discCopied: "تم النسخ!",
        discMarket: "مشتريات السوق:", errWebhook: "يرجى إدخال رابط Discord صحيح.", errSend: "فشل الإرسال.", sucSend: "تم إرسال الطلب إلى Discord!",
        qAdd: "+10k", qAddStk: "+1 رزمة", qSub: "-10k", qSubStk: "-1 رزمة", byproductsTitle: "إجمالي النواتج الثانوية", bpTitle: "إجمالي النواتج", btnBp: "نواتج ثانوية",
        btnPrefEfficient: "المسار الفعال", btnPrefYield: "أقصى إنتاج", lblEfficient: "فعال", lblMaxYield: "أقصى إنتاج", lblRegionLocked: "مخصص للمنطقة",
        chkBp: "إظهار النواتج الثانوية", colorAccent: "اللون الأساسي", colorBg: "اللون الثانوي", colorText: "لون النص", btnResetColors: "إعادة ضبط الألوان",
        viewPers: "تخصيص", viewVis: "رؤية الوحدات", viewLang: "اللغة", viewGather: "المكونات المفقودة", viewPipe: "خط التصنيع", viewProdCmd: "أمر الإنتاج",
        btnCart: "السلة", btnSettings: "الإعدادات", btnHelp: "مساعدة", btnExportCSV: "تصدير CSV", actDiscord: "إرسال Discord",
        btnMaxText: "حساب الحد الأقصى للإنتاج", maxTitle: "تم الوصول للحد", maxAcknowledge: "تأكيد",
        maxCraftAny: "لا يمكنك صنع [item] بالمخزون الحالي.", maxMissing: "للوصول إلى هدفك [target]، ما زلت تحتاج إلى:", maxTotalCraft: "لديك مواد كافية لصنع", maxCalculatedGoal: "لديك ما يكفي للوصول للهدف.",
        legAcronyms: "اختصارات", legEff: "فعال", legYld: "أقصى إنتاج", legReg: "مخصص للمنطقة",
        categories: { raw: "مواد خام", basicExt: "استخراج أساسي", intOre: "خامات متوسطة", advOre: "خامات متقدمة", catalyst: "محفزات", refined: "معادن مكررة", "Raw Materials": "مواد خام", "Basic Extractions": "استخراج أساسي", "Intermediate Ores": "خامات متوسطة", "Advanced Ores": "خامات متقدمة", "Catalysts": "محفزات", "Refined Metals": "معادن مكررة" },
        items: baseItems,
        helpHtml: `<p>مرحبًا بك في <strong>Quartermaster Command</strong>. استخدم القائمة الجانبية للتنقل.</p>`
    },

    ro: {
        tabPrefs: "Preferințe", tabData: "Date", tabHelp: "Ajutor", tabView: "Vizualizare", tabGuide: "Ghid", tabLegend: "Legendă",
        resetDesc: "Ștergeți tot inventarul salvat, cantitățile din coș și obiectivele.",
        shareTitle: "Partajare / Import Configurare", shareDesc: "Generați un cod pentru a partaja configurarea sau introduceți unul.",
        btnGenCode: "Generare și Copiere", btnLoadCode: "Încărcare Cod", importSuccess: "Configurare încărcată cu succes!", importError: "Cod invalid.", exportSuccess: "Copiat în clipboard!",
        format: "Format Afișare", optUnits: "Unități", optStacks: "Stive (10k)", webhook: "URL Webhook Discord",
        btnProd: "Producție", prodCmdTitle: "Comandă Producție", targetMetalLabel: "Resursă Țintă", crafters: "Artizani", target: "Cantitate",
        btnAutoFill: "Completare", btnClearCart: "Golire",
        yieldMods: "Preferințe", mastery: "Măiestrie (+6%)", refining: "Rafinare (+3%)", extraction: "Extracție (+3%)",
        btnDiscord: "Copiere în Clipboard", btnSend: "Trimitere Comandă pe Discord", btnPrefs: "Preferințe", yieldModsModal: "Preferințe",
        btnBank: "Inventar", invBankTitle: "Inventar",
        invBank: "Inventar", showAllBank: "Afișare toate materialele", showAllCart: "Afișare toate materialele", btnReset: "Resetare Totală", defGather: "Componente Lipsă", mfgPipe: "Linie de Fabricație", marketCart: "Coș Piață", marketCartTitle: "Coș Piață",
        tblPrice: "Preț", tblBuy: "Cantitate de Cumpărat", tblCost: "Cost", tblStash: "Stoc", cartTotal: "Total Coș:", tblOrder: "Comandă",
        noTarget: "Niciun obiectiv setat.", allCovered: "Inventarul și Coșul acoperă toate materialele!", searchPlaceholder: "Căutare...",
        verbCrush: "Zdrobește", verbGrind: "Macină", verbExtract: "Extrage", verbSmelt: "Topește", verbBake: "Coace", verbAlloy: "Aliază", verbProcess: "Procesează",
        inMachine: "în", stepWith: "cu", stepAnd: "și", perCrafter: "(Per Artizan)", stepPrefix: "Pasul",
        stepYieldsMain: "Produce:", stepByproducts: "Subproduse:", none: "Nimic",
        pipeCompleted: "Progres Producție", btnPipeReset: "Resetare",
        tooltipBestYield: "Cel mai eficient (Cost minim materiale)", tooltipMaxYield: "Max. Subproduse Generate", tooltipRegionLocked: "Blocat Regional",
        tooltipMaxCraft: "Calculați cât puteți produce cu inventarul", tooltipShowAll: "Afișare elemente necorelate",
        resetPrompt: "Resetați toate valorile la zero?", restartPrompt: "Reporniți linia de producție?", modalActionsTitle: "Acțiuni",
        discHeader: "COMANDĂ LOGISTICĂ", discReq: "COMPONENTE LIPSĂ:", discStock: "Toate materialele acoperite.", discCopied: "Copiat!",
        discMarket: "CUMPĂRĂTURI PIAȚĂ:", errWebhook: "Introduceți un URL Discord valid.", errSend: "Eroare la trimitere.", sucSend: "Comandă trimisă pe Discord!",
        qAdd: "+10k", qAddStk: "+1 Stivă", qSub: "-10k", qSubStk: "-1 Stivă", byproductsTitle: "TOTAL SUBPRODUSE", bpTitle: "TOTAL SUBPRODUSE", btnBp: "Subproduse",
        btnPrefEfficient: "Cale Eficientă", btnPrefYield: "Randament Max", lblEfficient: "Eficient", lblMaxYield: "Randament Max", lblRegionLocked: "Blocat Regional",
        chkBp: "Afișare subproduse", colorAccent: "Culoare Primară", colorBg: "Culoare Secundară", colorText: "Culoare Text", btnResetColors: "Resetare Culori",
        viewPers: "Personalizare", viewVis: "Vizibilitate Module", viewLang: "Limbă", viewGather: "Componente Lipsă", viewPipe: "Linie de Fabricație", viewProdCmd: "Comandă Producție",
        btnCart: "Coș", btnSettings: "Setări", btnHelp: "Ajutor", btnExportCSV: "Export CSV", actDiscord: "Expediere Discord",
        btnMaxText: "Calculare Max Productibil", maxTitle: "Limită de Producție Atingută", maxAcknowledge: "Confirmare",
        maxCraftAny: "Nu se poate produce [item] cu inventarul curent.", maxMissing: "Pentru a atinge obiectivul de [target], lipsesc:", maxTotalCraft: "Aveți materiale pentru", maxCalculatedGoal: "Aveți destul pentru obiectiv.",
        legAcronyms: "Acronime", legEff: "Eficient", legYld: "Randament Max", legReg: "Blocat Regional",
        categories: { raw: "Materii Prime", basicExt: "Extracții de Bază", intOre: "Minereuri Intermediare", advOre: "Minereuri Avansate", catalyst: "Catalizatori", refined: "Metale Rafinate", "Raw Materials": "Materii Prime", "Basic Extractions": "Extracții de Bază", "Intermediate Ores": "Minereuri Intermediare", "Advanced Ores": "Minereuri Avansate", "Catalysts": "Catalizatori", "Refined Metals": "Metale Rafinate" },
        items: baseItems,
        helpHtml: `<p>Bun venit la <strong>Quartermaster Command</strong>. Sistemul calculează automat cele mai bune rute de rafinare.</p>`
    },

    pl: {
        tabPrefs: "Preferencje", tabData: "Dane", tabHelp: "Pomoc", tabView: "Widok", tabGuide: "Przewodnik", tabLegend: "Legenda",
        resetDesc: "Wyczyść cały ekwipunek, koszyk i cele.",
        shareTitle: "Udostępnij / Importuj", shareDesc: "Wygeneruj kod, aby udostępnić konfigurację.",
        btnGenCode: "Generuj i Kopiuj", btnLoadCode: "Wczytaj Kod", importSuccess: "Konfiguracja wczytana!", importError: "Nieprawidłowy kod.", exportSuccess: "Skopiowano do schowka!",
        format: "Format Wyświetlania", optUnits: "Jednostki", optStacks: "Stosy (10k)", webhook: "URL Webhooka Discord",
        btnProd: "Produkcja", prodCmdTitle: "Panel Produkcji", targetMetalLabel: "Zasób Docelowy", crafters: "Rzemieślnicy", target: "Ilość",
        btnAutoFill: "Wypełnij", btnClearCart: "Wyczyść",
        yieldMods: "Preferencje", mastery: "Mistrzostwo (+6%)", refining: "Rafinacja (+3%)", extraction: "Ekstrakcja (+3%)",
        btnDiscord: "Kopiuj do Schowka", btnSend: "Wyślij Zamówienie na Discord", btnPrefs: "Preferencje", yieldModsModal: "Preferencje",
        btnBank: "Ekwipunek", invBankTitle: "Ekwipunek",
        invBank: "Ekwipunek", showAllBank: "Pokaż wszystkie materiały", showAllCart: "Pokaż wszystkie materiały", btnReset: "Zresetuj Wszystko", defGather: "Brakujące Komponenty", mfgPipe: "Linia Produkcyjna", marketCart: "Koszyk Rynkowy", marketCartTitle: "Koszyk Rynkowy",
        tblPrice: "Cena", tblBuy: "Ilość do Kupienia", tblCost: "Koszt", tblStash: "Zapas", cartTotal: "Suma Koszyka:", tblOrder: "Zamówienie",
        noTarget: "Nie wybrano celu.", allCovered: "Ekwipunek pokrywa wszystkie materiały!", searchPlaceholder: "Szukaj...",
        verbCrush: "Kruszenie", verbGrind: "Mielenie", verbExtract: "Ekstrakcja", verbSmelt: "Przetapianie", verbBake: "Wypalanie", verbAlloy: "Stopowanie", verbProcess: "Przetwarzanie",
        inMachine: "w", stepWith: "z", stepAnd: "i", perCrafter: "(Na Rzemieślnika)", stepPrefix: "Krok",
        stepYieldsMain: "Daje:", stepByproducts: "Produkty uboczne:", none: "Brak",
        pipeCompleted: "Postęp Produkcji", btnPipeReset: "Zresetuj",
        tooltipBestYield: "Najbardziej Wydajne (Najniższy Koszt)", tooltipMaxYield: "Maks. Produkty Uboczne", tooltipRegionLocked: "Zablokowane Regionalnie",
        tooltipMaxCraft: "Oblicz maksimum możliwe do wytworzenia", tooltipShowAll: "Pokaż materiały niezwiązane z celem",
        resetPrompt: "Zresetować wszystkie wartości do zera?", restartPrompt: "Zrestartować linię produkcyjną?", modalActionsTitle: "Akcje",
        discHeader: "ZAMÓWIENIE LOGISTYCZNE", discReq: "BRAKUJĄCE KOMPONENTY:", discStock: "Wszystkie materiały pokryte.", discCopied: "Skopiowano!",
        discMarket: "ZAKUPY NA RYNKU:", errWebhook: "Wprowadź prawidłowy URL Discord.", errSend: "Błąd wysyłania.", sucSend: "Zamówienie wysłane!",
        qAdd: "+10k", qAddStk: "+1 Stos", qSub: "-10k", qSubStk: "-1 Stos", byproductsTitle: "SUMA PRODUKTÓW UBOCZNYCH", bpTitle: "SUMA PRODUKTÓW UBOCZNYCH", btnBp: "Produkty uboczne",
        btnPrefEfficient: "Ścieżka Wydajna", btnPrefYield: "Maksymalny Zysk", lblEfficient: "Wydajny", lblMaxYield: "Maks. Zysk", lblRegionLocked: "Zablokowane Reg.",
        chkBp: "Pokaż produkty uboczne", colorAccent: "Kolor Główny", colorBg: "Kolor Drugorzędny", colorText: "Kolor Tekstu", btnResetColors: "Zresetuj Kolory",
        viewPers: "Personalizacja", viewVis: "Widoczność Modułów", viewLang: "Język", viewGather: "Brakujące Komponenty", viewPipe: "Linia Produkcyjna", viewProdCmd: "Panel Produkcji",
        btnCart: "Koszyk", btnSettings: "Ustawienia", btnHelp: "Pomoc", btnExportCSV: "Eksportuj CSV", actDiscord: "Wysyłka Discord",
        btnMaxText: "Oblicz Maks. do Wytworzenia", maxTitle: "Osiągnięto Limit", maxAcknowledge: "Potwierdź",
        maxCraftAny: "Nie można wytworzyć [item] z obecnym ekwipunkiem.", maxMissing: "Aby osiągnąć cel [target], brakuje:", maxTotalCraft: "Masz materiały na", maxCalculatedGoal: "Masz wystarczająco dużo materiałów.",
        legAcronyms: "Akronimy", legEff: "Wydajny", legYld: "Maks. Zysk", legReg: "Zablokowane Reg.",
        categories: { raw: "Surowce", basicExt: "Podstawowe Ekstrakcje", intOre: "Rudy Pośrednie", advOre: "Rudy Zaawansowane", catalyst: "Katalizatory", refined: "Rafinowane Metale", "Raw Materials": "Surowce", "Basic Extractions": "Podstawowe Ekstrakcje", "Intermediate Ores": "Rudy Pośrednie", "Advanced Ores": "Rudy Zaawansowane", "Catalysts": "Katalizatory", "Refined Metals": "Rafinowane Metale" },
        items: baseItems,
        helpHtml: `<p>Witamy w <strong>Quartermaster Command</strong>. System automatycznie oblicza najlepsze trasy rafinacji metali.</p>`
    },

    pt: {
        tabPrefs: "Preferências", tabData: "Dados", tabHelp: "Ajuda", tabView: "Visão", tabGuide: "Guia", tabLegend: "Legenda",
        resetDesc: "Limpar todo o inventário, quantidades do carrinho e objetivos.",
        shareTitle: "Compartilhar / Importar Config", shareDesc: "Gere um código para compartilhar ou cole um para carregar.",
        btnGenCode: "Gerar e Copiar", btnLoadCode: "Carregar Código", importSuccess: "Carregado com sucesso!", importError: "Código inválido.", exportSuccess: "Copiado para a área de transferência!",
        format: "Formato", optUnits: "Unidades", optStacks: "Pilhas (10k)", webhook: "URL Webhook Discord",
        btnProd: "Produção", prodCmdTitle: "Comando de Produção", targetMetalLabel: "Recurso Alvo", crafters: "Artesãos", target: "Quantidade",
        btnAutoFill: "Preencher", btnClearCart: "Limpar",
        yieldMods: "Preferências", mastery: "Maestria (+6%)", refining: "Refino (+3%)", extraction: "Extração (+3%)",
        btnDiscord: "Copiar Área Transf.", btnSend: "Enviar para o Discord", btnPrefs: "Preferências", yieldModsModal: "Preferências",
        btnBank: "Inventário", invBankTitle: "Inventário",
        invBank: "Inventário", showAllBank: "Mostrar todos os materiais", showAllCart: "Mostrar todos os materiais", btnReset: "Resetar Tudo", defGather: "Componentes Faltantes", mfgPipe: "Linha de Produção", marketCart: "Carrinho", marketCartTitle: "Carrinho de Mercado",
        tblPrice: "Preço", tblBuy: "Comprar", tblCost: "Custo", tblStash: "Reserva", cartTotal: "Total do Carrinho:", tblOrder: "Pedido",
        noTarget: "Nenhum alvo definido.", allCovered: "Inventário cobre todos os materiais!", searchPlaceholder: "Pesquisar...",
        verbCrush: "Triturar", verbGrind: "Moer", verbExtract: "Extrair", verbSmelt: "Fundir", verbBake: "Assar", verbAlloy: "Fundir Liga", verbProcess: "Processar",
        inMachine: "em", stepWith: "com", stepAnd: "e", perCrafter: "(Por Artesão)", stepPrefix: "Passo",
        stepYieldsMain: "Rende:", stepByproducts: "Subprodutos:", none: "Nenhum",
        pipeCompleted: "Progresso", btnPipeReset: "Resetar",
        tooltipBestYield: "Mais Eficiente (Menor Custo)", tooltipMaxYield: "Máx Subprodutos Gerados", tooltipRegionLocked: "Bloqueado por Região",
        tooltipMaxCraft: "Calcular produção máxima com o inventário", tooltipShowAll: "Mostrar itens não relacionados",
        resetPrompt: "Zerar todos os valores?", restartPrompt: "Reiniciar linha de produção?", modalActionsTitle: "Ações",
        discHeader: "PEDIDO LOGÍSTICO", discReq: "COMPONENTES FALTANTES:", discStock: "Tudo coberto.", discCopied: "Copiado!",
        discMarket: "COMPRAS NO MERCADO:", errWebhook: "Insira uma URL do Discord válida.", errSend: "Erro ao enviar.", sucSend: "Enviado com sucesso!",
        qAdd: "+10k", qAddStk: "+1 Pilha", qSub: "-10k", qSubStk: "-1 Pilha", byproductsTitle: "TOTAL DE SUBPRODUTOS", bpTitle: "TOTAL DE SUBPRODUTOS", btnBp: "Subprodutos",
        btnPrefEfficient: "Rota Eficiente", btnPrefYield: "Máximo Rendimento", lblEfficient: "Eficiente", lblMaxYield: "Máx Rendimento", lblRegionLocked: "Bloqueio Regional",
        chkBp: "Mostrar subprodutos", colorAccent: "Cor Primária", colorBg: "Cor Secundária", colorText: "Cor do Texto", btnResetColors: "Resetar Cores",
        viewPers: "Personalização", viewVis: "Visibilidade dos Módulos", viewLang: "Idioma", viewGather: "Componentes Faltantes", viewPipe: "Linha de Produção", viewProdCmd: "Comando de Produção",
        btnCart: "Carrinho", btnSettings: "Configurações", btnHelp: "Ajuda", btnExportCSV: "Exportar CSV", actDiscord: "Despacho Discord",
        btnMaxText: "Calcular Máximo Fabricável", maxTitle: "Limite Atingido", maxAcknowledge: "Confirmar",
        maxCraftAny: "Não é possível fabricar [item] com o inventário atual.", maxMissing: "Para atingir o alvo [target], falta:", maxTotalCraft: "Materiais suficientes para fabricar", maxCalculatedGoal: "Você tem o suficiente para o objetivo.",
        legAcronyms: "Acrônimos", legEff: "Eficiente", legYld: "Máx Rendimento", legReg: "Bloqueio Regional",
        categories: { raw: "Matérias-Primas", basicExt: "Extrações Básicas", intOre: "Minérios Intermediários", advOre: "Minérios Avançados", catalyst: "Catalisadores", refined: "Metais Refinados", "Raw Materials": "Matérias-Primas", "Basic Extractions": "Extrações Básicas", "Intermediate Ores": "Minérios Intermediários", "Advanced Ores": "Minérios Avançados", "Catalysts": "Catalisadores", "Refined Metals": "Metais Refinados" },
        items: baseItems,
        helpHtml: `<p>Bem-vindo ao <strong>Quartermaster Command</strong>. O sistema calcula automaticamente as melhores rotas de refino.</p>`
    },

    ru: {
        tabPrefs: "Настройки", tabData: "Данные", tabHelp: "Помощь", tabView: "Вид", tabGuide: "Руководство", tabLegend: "Легенда",
        resetDesc: "Очистить весь инвентарь, корзину и цели.",
        shareTitle: "Поделиться / Импорт", shareDesc: "Создайте код для обмена настройками.",
        btnGenCode: "Создать и Скопировать", btnLoadCode: "Загрузить Код", importSuccess: "Успешно загружено!", importError: "Неверный код.", exportSuccess: "Скопировано в буфер!",
        format: "Формат отображения", optUnits: "Единицы", optStacks: "Стаки (10k)", webhook: "Discord Webhook URL",
        btnProd: "Производство", prodCmdTitle: "Панель производства", targetMetalLabel: "Целевой ресурс", crafters: "Ремесленники", target: "Количество",
        btnAutoFill: "Заполнить", btnClearCart: "Очистить",
        yieldMods: "Настройки", mastery: "Мастерство (+6%)", refining: "Очистка (+3%)", extraction: "Извлечение (+3%)",
        btnDiscord: "Скопировать", btnSend: "Отправить в Discord", btnPrefs: "Настройки", yieldModsModal: "Настройки",
        btnBank: "Инвентарь", invBankTitle: "Инвентарь",
        invBank: "Инвентарь", showAllBank: "Показать все", showAllCart: "Показать все", btnReset: "Сбросить все", defGather: "Недостающие компоненты", mfgPipe: "Линия производства", marketCart: "Корзина", marketCartTitle: "Корзина",
        tblPrice: "Цена", tblBuy: "Купить", tblCost: "Стоимость", tblStash: "Запас", cartTotal: "Итого корзина:", tblOrder: "Заказ",
        noTarget: "Цель не задана.", allCovered: "Инвентарь покрывает все нужды!", searchPlaceholder: "Поиск...",
        verbCrush: "Дробить", verbGrind: "Измельчать", verbExtract: "Извлекать", verbSmelt: "Плавить", verbBake: "Выпекать", verbAlloy: "Сплавлять", verbProcess: "Обрабатывать",
        inMachine: "в", stepWith: "с", stepAnd: "и", perCrafter: "(На ремесленника)", stepPrefix: "Шаг",
        stepYieldsMain: "Дает:", stepByproducts: "Побочные продукты:", none: "Нет",
        pipeCompleted: "Прогресс", btnPipeReset: "Сброс",
        tooltipBestYield: "Самый эффективный (Мин. затраты)", tooltipMaxYield: "Макс. побочных продуктов", tooltipRegionLocked: "Блок региона",
        tooltipMaxCraft: "Рассчитать максимум из инвентаря", tooltipShowAll: "Показать не связанные элементы",
        resetPrompt: "Сбросить все значения до нуля?", restartPrompt: "Перезапустить линию?", modalActionsTitle: "Действия",
        discHeader: "ЗАКАЗ ЛОГИСТИКИ", discReq: "НЕДОСТАЮЩИЕ КОМПОНЕНТЫ:", discStock: "Все материалы в наличии.", discCopied: "Скопировано!",
        discMarket: "ПОКУПКИ НА РЫНКЕ:", errWebhook: "Введите корректный URL Discord.", errSend: "Ошибка отправки.", sucSend: "Успешно отправлено!",
        qAdd: "+10k", qAddStk: "+1 Стак", qSub: "-10k", qSubStk: "-1 Стак", byproductsTitle: "ВСЕГО ПОБОЧНЫХ", bpTitle: "ВСЕГО ПОБОЧНЫХ", btnBp: "Побочные продукты",
        btnPrefEfficient: "Эффективный путь", btnPrefYield: "Макс. Выход", lblEfficient: "Эффективно", lblMaxYield: "Макс. Выход", lblRegionLocked: "Блок региона",
        chkBp: "Показать побочные", colorAccent: "Основной цвет", colorBg: "Вторичный цвет", colorText: "Цвет текста", btnResetColors: "Сбросить цвета",
        viewPers: "Персонализация", viewVis: "Видимость модулей", viewLang: "Язык", viewGather: "Недостающие компоненты", viewPipe: "Линия производства", viewProdCmd: "Панель производства",
        btnCart: "Корзина", btnSettings: "Настройки", btnHelp: "Помощь", btnExportCSV: "Экспорт CSV", actDiscord: "Отправка Discord",
        btnMaxText: "Рассчитать максимум", maxTitle: "Достигнут предел", maxAcknowledge: "Подтвердить",
        maxCraftAny: "Невозможно создать [item] из текущего инвентаря.", maxMissing: "Для достижения цели [target] не хватает:", maxTotalCraft: "У вас есть материалы для создания", maxCalculatedGoal: "Материалов достаточно для цели.",
        legAcronyms: "Аббревиатуры", legEff: "Эффективно", legYld: "Макс. Выход", legReg: "Блок региона",
        categories: { raw: "Сырье", basicExt: "Базовые экстракции", intOre: "Промежуточные руды", advOre: "Продвинутые руды", catalyst: "Катализаторы", refined: "Очищенные металлы", "Raw Materials": "Сырье", "Basic Extractions": "Базовые экстракции", "Intermediate Ores": "Промежуточные руды", "Advanced Ores": "Продвинутые руды", "Catalysts": "Катализаторы", "Refined Metals": "Очищенные металлы" },
        items: baseItems,
        helpHtml: `<p>Добро пожаловать в <strong>Quartermaster Command</strong>. Система автоматически рассчитывает оптимальные маршруты переработки.</p>`
    },

    fi: {
        tabPrefs: "Asetukset", tabData: "Tiedot", tabHelp: "Apua", tabView: "Näkymä", tabGuide: "Opas", tabLegend: "Selite",
        resetDesc: "Tyhjennä kaikki varasto, ostoskori ja tavoitteet.",
        shareTitle: "Jaa / Tuo asetukset", shareDesc: "Luo koodi jakamista varten.",
        btnGenCode: "Luo ja kopioi", btnLoadCode: "Lataa koodi", importSuccess: "Ladattu onnistuneesti!", importError: "Virheellinen koodi.", exportSuccess: "Kopioitu leikepöydälle!",
        format: "Esitysmuoto", optUnits: "Yksiköt", optStacks: "Pinot (10k)", webhook: "Discord Webhook URL",
        btnProd: "Tuotanto", prodCmdTitle: "Tuotantopaneeli", targetMetalLabel: "Kohderesurssi", crafters: "Käsityöläiset", target: "Määrä",
        btnAutoFill: "Täytä", btnClearCart: "Tyhjennä",
        yieldMods: "Asetukset", mastery: "Mestaruus (+6%)", refining: "Jalostus (+3%)", extraction: "Louhinta (+3%)",
        btnDiscord: "Kopioi leikepöydälle", btnSend: "Lähetä Discordiin", btnPrefs: "Asetukset", yieldModsModal: "Asetukset",
        btnBank: "Varasto", invBankTitle: "Varasto",
        invBank: "Varasto", showAllBank: "Näytä kaikki", showAllCart: "Näytä kaikki", btnReset: "Nollaa kaikki", defGather: "Puuttuvat komponentit", mfgPipe: "Tuotantolinja", marketCart: "Ostoskori", marketCartTitle: "Ostoskori",
        tblPrice: "Hinta", tblBuy: "Osta", tblCost: "Kustannus", tblStash: "Varasto", cartTotal: "Korin yhteensä:", tblOrder: "Tilaus",
        noTarget: "Ei tavoitetta.", allCovered: "Varasto kattaa kaiken!", searchPlaceholder: "Etsi...",
        verbCrush: "Murskaa", verbGrind: "Jauha", verbExtract: "Erota", verbSmelt: "Sulata", verbBake: "Paista", verbAlloy: "Seosta", verbProcess: "Käsittele",
        inMachine: "koneessa", stepWith: "kanssa", stepAnd: "ja", perCrafter: "(Per käsityöläinen)", stepPrefix: "Vaihe",
        stepYieldsMain: "Tuottaa:", stepByproducts: "Sivutuotteet:", none: "Ei mitään",
        pipeCompleted: "Edistyminen", btnPipeReset: "Nollaa",
        tooltipBestYield: "Tehokkain (Pienimmät kustannukset)", tooltipMaxYield: "Maks. sivutuotteet", tooltipRegionLocked: "Aluelukittu",
        tooltipMaxCraft: "Laske maksimi varastosta", tooltipShowAll: "Näytä liittymättömät esineet",
        resetPrompt: "Nollataanko kaikki arvot?", restartPrompt: "Käynnistetäänkö linja uudelleen?", modalActionsTitle: "Toiminnot",
        discHeader: "LOGISTIIKKATILAUS", discReq: "PUUTTUVAT KOMPONENTIT:", discStock: "Kaikki materiaalit katettu.", discCopied: "Kopioitu!",
        discMarket: "MARKET-OSTOKSET:", errWebhook: "Anna kelvollinen Discord URL.", errSend: "Virhe lähetyksessä.", sucSend: "Lähetetty Discordiin!",
        qAdd: "+10k", qAddStk: "+1 Pino", qSub: "-10k", qSubStk: "-1 Pino", byproductsTitle: "SIVUTUOTTEET YHTEENSÄ", bpTitle: "SIVUTUOTTEET", btnBp: "Sivutuotteet",
        btnPrefEfficient: "Tehokas reitti", btnPrefYield: "Maks. Tuotto", lblEfficient: "Tehokas", lblMaxYield: "Maks. Tuotto", lblRegionLocked: "Aluelukittu",
        chkBp: "Näytä sivutuotteet", colorAccent: "Pääväri", colorBg: "Toissijainen väri", colorText: "Tekstin väri", btnResetColors: "Nollaa värit",
        viewPers: "Mukauttaminen", viewVis: "Moduulien näkyvyys", viewLang: "Kieli", viewGather: "Puuttuvat komponentit", viewPipe: "Tuotantolinja", viewProdCmd: "Tuotantopaneeli",
        btnCart: "Ostoskori", btnSettings: "Asetukset", btnHelp: "Apua", btnExportCSV: "Vie CSV", actDiscord: "Discord-lähetys",
        btnMaxText: "Laske maksimituotanto", maxTitle: "Raja saavutettu", maxAcknowledge: "Hyväksy",
        maxCraftAny: "Ei voida valmistaa [item] nykyisellä varastolla.", maxMissing: "Tavoitteen [target] saavuttamiseksi puuttuu:", maxTotalCraft: "Materiaaleja riittää tuottamaan", maxCalculatedGoal: "Tarpeeksi materiaaleja tavoitteeseen.",
        legAcronyms: "Lyhenteet", legEff: "Tehokas", legYld: "Maks. Tuotto", legReg: "Aluelukittu",
        categories: { raw: "Raaka-aineet", basicExt: "Peruserottelut", intOre: "Välimalmit", advOre: "Edistyneet malmit", catalyst: "Katalyytit", refined: "Jalostetut metallit", "Raw Materials": "Raaka-aineet", "Basic Extractions": "Peruserottelut", "Intermediate Ores": "Välimalmit", "Advanced Ores": "Edistyneet malmit", "Catalysts": "Katalyytit", "Refined Metals": "Jalostetut metallit" },
        items: baseItems,
        helpHtml: `<p>Tervetuloa <strong>Quartermaster Commandiin</strong>. Järjestelmä laskee optimaaliset jalostusreitit automaattisesti.</p>`
    },

    uk: {
        tabPrefs: "Налаштування", tabData: "Дані", tabHelp: "Допомога", tabView: "Вигляд", tabGuide: "Гайд", tabLegend: "Легенда",
        resetDesc: "Очистити весь інвентар, кошик та цілі.",
        shareTitle: "Поділитися / Імпорт", shareDesc: "Створити код для обміну налаштуваннями.",
        btnGenCode: "Створити та Копіювати", btnLoadCode: "Завантажити Код", importSuccess: "Успішно завантажено!", importError: "Недійсний код.", exportSuccess: "Скопійовано!",
        format: "Формат відображення", optUnits: "Одиниці", optStacks: "Стаки (10k)", webhook: "Discord Webhook URL",
        btnProd: "Виробництво", prodCmdTitle: "Панель виробництва", targetMetalLabel: "Цільовий ресурс", crafters: "Ремісники", target: "Кількість",
        btnAutoFill: "Заповнити", btnClearCart: "Очистити",
        yieldMods: "Налаштування", mastery: "Майстерність (+6%)", refining: "Очищення (+3%)", extraction: "Видобуток (+3%)",
        btnDiscord: "Скопіювати", btnSend: "Відправити в Discord", btnPrefs: "Налаштування", yieldModsModal: "Налаштування",
        btnBank: "Інвентар", invBankTitle: "Інвентар",
        invBank: "Інвентар", showAllBank: "Показати все", showAllCart: "Показати все", btnReset: "Скинути все", defGather: "Відсутні компоненти", mfgPipe: "Лінія виробництва", marketCart: "Кошик", marketCartTitle: "Кошик",
        tblPrice: "Ціна", tblBuy: "Купити", tblCost: "Вартість", tblStash: "Запас", cartTotal: "Всього кошик:", tblOrder: "Замовлення",
        noTarget: "Ціль не задана.", allCovered: "Інвентар покриває всі потреби!", searchPlaceholder: "Пошук...",
        verbCrush: "Подрібнити", verbGrind: "Молоти", verbExtract: "Видобувати", verbSmelt: "Плавити", verbBake: "Випікати", verbAlloy: "Сплавляти", verbProcess: "Обробляти",
        inMachine: "в", stepWith: "з", stepAnd: "та", perCrafter: "(На ремісника)", stepPrefix: "Крок",
        stepYieldsMain: "Дає:", stepByproducts: "Побічні продукти:", none: "Немає",
        pipeCompleted: "Прогрес", btnPipeReset: "Скинути",
        tooltipBestYield: "Найефективніший (Мін. витрати)", tooltipMaxYield: "Макс. побічних продуктів", tooltipRegionLocked: "Блок регіону",
        tooltipMaxCraft: "Розрахувати максимум з інвентарю", tooltipShowAll: "Показати незв'язані елементи",
        resetPrompt: "Скинути всі значення до нуля?", restartPrompt: "Перезапустити лінію?", modalActionsTitle: "Дії",
        discHeader: "ЛОГІСТИЧНЕ ЗАМОВЛЕННЯ", discReq: "ВІДСУТНІ КОМПОНЕНТИ:", discStock: "Всі матеріали в наявності.", discCopied: "Скопійовано!",
        discMarket: "ПОКУПКИ НА РИНКУ:", errWebhook: "Введіть коректний URL Discord.", errSend: "Помилка відправки.", sucSend: "Успішно відправлено!",
        qAdd: "+10k", qAddStk: "+1 Стак", qSub: "-10k", qSubStk: "-1 Стак", byproductsTitle: "ВСЬОГО ПОБІЧНИХ", bpTitle: "ВСЬОГО ПОБІЧНИХ", btnBp: "Побічні продукти",
        btnPrefEfficient: "Ефективний шлях", btnPrefYield: "Макс. Вихід", lblEfficient: "Ефективно", lblMaxYield: "Макс. Вихід", lblRegionLocked: "Блок регіону",
        chkBp: "Показати побічні", colorAccent: "Основний колір", colorBg: "Вторинний колір", colorText: "Колір тексту", btnResetColors: "Скинути кольори",
        viewPers: "Персоналізація", viewVis: "Видимість модулів", viewLang: "Мова", viewGather: "Відсутні компоненти", viewPipe: "Лінія виробництва", viewProdCmd: "Панель виробництва",
        btnCart: "Кошик", btnSettings: "Налаштування", btnHelp: "Допомога", btnExportCSV: "Експорт CSV", actDiscord: "Відправка Discord",
        btnMaxText: "Розрахувати максимум", maxTitle: "Досягнуто межу", maxAcknowledge: "Підтвердити",
        maxCraftAny: "Неможливо створити [item] з поточного інвентарю.", maxMissing: "Для досягнення цілі [target] не вистачає:", maxTotalCraft: "У вас є матеріали для створення", maxCalculatedGoal: "Матеріалів достатньо для цілі.",
        legAcronyms: "Абревіатури", legEff: "Ефективно", legYld: "Макс. Вихід", legReg: "Блок регіону",
        categories: { raw: "Сировина", basicExt: "Базові екстракції", intOre: "Проміжні руди", advOre: "Просунуті руди", catalyst: "Каталізатори", refined: "Очищені метали", "Raw Materials": "Сировина", "Basic Extractions": "Базові екстракції", "Intermediate Ores": "Проміжні руди", "Advanced Ores": "Просунуті руди", "Catalysts": "Каталізатори", "Refined Metals": "Очищені метали" },
        items: baseItems,
        helpHtml: `<p>Ласкаво просимо в <strong>Quartermaster Command</strong>. Система автоматично розраховує оптимальні маршрути переробки.</p>`
    },

    hu: {
        tabPrefs: "Beállítások", tabData: "Adatok", tabHelp: "Súgó", tabView: "Nézet", tabGuide: "Útmutató", tabLegend: "Jelmagyarázat",
        resetDesc: "Törölje a mentett készletet, a kosár tartalmát és a célokat.",
        shareTitle: "Megosztás / Importálás", shareDesc: "Generáljon kódot a beállítások megosztásához.",
        btnGenCode: "Generálás és Másolás", btnLoadCode: "Kód Betöltése", importSuccess: "Sikeresen betöltve!", importError: "Érvénytelen kód.", exportSuccess: "Vágólapra másolva!",
        format: "Megjelenítési formátum", optUnits: "Egységek", optStacks: "Halmok (10k)", webhook: "Discord Webhook URL",
        btnProd: "Termelés", prodCmdTitle: "Termelési Parancs", targetMetalLabel: "Cél nyersanyag", crafters: "Kézművesek", target: "Mennyiség",
        btnAutoFill: "Kitöltés", btnClearCart: "Törlés",
        yieldMods: "Beállítások", mastery: "Mester (+6%)", refining: "Finomítás (+3%)", extraction: "Kivonás (+3%)",
        btnDiscord: "Vágólapra másolás", btnSend: "Küldés Discordra", btnPrefs: "Beállítások", yieldModsModal: "Beállítások",
        btnBank: "Leltár", invBankTitle: "Leltár",
        invBank: "Leltár", showAllBank: "Összes mutatása", showAllCart: "Összes mutatása", btnReset: "Minden Visszaállítása", defGather: "Hiányzó Komponensek", mfgPipe: "Gyártósor", marketCart: "Piac Kosár", marketCartTitle: "Piac Kosár",
        tblPrice: "Ár", tblBuy: "Vétel", tblCost: "Költség", tblStash: "Készlet", cartTotal: "Kosár Összesen:", tblOrder: "Rendelés",
        noTarget: "Nincs cél megadva.", allCovered: "A leltár és a kosár fedez mindent!", searchPlaceholder: "Keresés...",
        verbCrush: "Zúzás", verbGrind: "Őrlés", verbExtract: "Kivonás", verbSmelt: "Olvasztás", verbBake: "Sütés", verbAlloy: "Ötvözés", verbProcess: "Feldolgozás",
        inMachine: "a", stepWith: "vele", stepAnd: "és", perCrafter: "(Kézművesenként)", stepPrefix: "Lépés",
        stepYieldsMain: "Hozam:", stepByproducts: "Melléktermékek:", none: "Nincs",
        pipeCompleted: "Haladás", btnPipeReset: "Visszaállítás",
        tooltipBestYield: "Leghatékonyabb (Legkisebb költség)", tooltipMaxYield: "Max. Melléktermék", tooltipRegionLocked: "Régiózáras",
        tooltipMaxCraft: "Kiszámítja a maximumot a leltárból", tooltipShowAll: "Nem kapcsolódó elemek mutatása",
        resetPrompt: "Minden érték nullázása?", restartPrompt: "Újraindítja a gyártósort?", modalActionsTitle: "Műveletek",
        discHeader: "LOGISZTIKAI RENDELÉS", discReq: "HIÁNYZÓ KOMPONENSEK:", discStock: "Minden anyag fedezve.", discCopied: "Másolva!",
        discMarket: "PIACI VÁSÁRLÁS:", errWebhook: "Adjon meg egy érvényes Discord URL-t.", errSend: "Küldési hiba.", sucSend: "Sikeresen elküldve!",
        qAdd: "+10k", qAddStk: "+1 Halom", qSub: "-10k", qSubStk: "-1 Halom", byproductsTitle: "ÖSSZES MELLÉKTERMÉK", bpTitle: "ÖSSZES MELLÉKTERMÉK", btnBp: "Melléktermékek",
        btnPrefEfficient: "Hatékony Út", btnPrefYield: "Max. Hozam", lblEfficient: "Hatékony", lblMaxYield: "Max. Hozam", lblRegionLocked: "Régiózáras",
        chkBp: "Melléktermékek mutatása", colorAccent: "Elsődleges szín", colorBg: "Másodlagos szín", colorText: "Szövegszín", btnResetColors: "Színek alaphelyzetbe",
        viewPers: "Személyre szabás", viewVis: "Modulok láthatósága", viewLang: "Nyelv", viewGather: "Hiányzó Komponensek", viewPipe: "Gyártósor", viewProdCmd: "Termelési Parancs",
        btnCart: "Kosár", btnSettings: "Beállítások", btnHelp: "Súgó", btnExportCSV: "CSV Export", actDiscord: "Discord Küldés",
        btnMaxText: "Max Gyártható Kiszámítása", maxTitle: "Határ elérve", maxAcknowledge: "Elfogad",
        maxCraftAny: "Nem gyártható [item] a jelenlegi leltárból.", maxMissing: "A(z) [target] cél eléréséhez még hiányzik:", maxTotalCraft: "Van elég anyaga gyártani", maxCalculatedGoal: "Elegendő anyag áll rendelkezésre a célhoz.",
        legAcronyms: "Rövidítések", legEff: "Hatékony", legYld: "Max. Hozam", legReg: "Régiózáras",
        categories: { raw: "Nyersanyagok", basicExt: "Alap Extrakciók", intOre: "Köztes Ércek", advOre: "Haladó Ércek", catalyst: "Katalizátorok", refined: "Finomított Fémek", "Raw Materials": "Nyersanyagok", "Basic Extractions": "Alap Extrakciók", "Intermediate Ores": "Köztes Ércek", "Advanced Ores": "Haladó Ércek", "Catalysts": "Katalizátorok", "Refined Metals": "Finomított Fémek" },
        items: baseItems,
        helpHtml: `<p>Üdvözöljük a <strong>Quartermaster Command</strong> súgójában. A rendszer automatikusan kiszámítja a legjobb finomítási útvonalakat.</p>`
    },

    tr: {
        tabPrefs: "Tercihler", tabData: "Veri", tabHelp: "Yardım", tabView: "Görünüm", tabGuide: "Rehber", tabLegend: "Lejant",
        resetDesc: "Kayıtlı envanter, sepet ve hedefleri temizle.",
        shareTitle: "Paylaş / İçe Aktar", shareDesc: "Ayarlarınızı paylaşmak için bir kod oluşturun.",
        btnGenCode: "Oluştur ve Kopyala", btnLoadCode: "Kodu Yükle", importSuccess: "Başarıyla yüklendi!", importError: "Geçersiz kod.", exportSuccess: "Panoya kopyalandı!",
        format: "Görüntü Formatı", optUnits: "Birim", optStacks: "Yığın (10k)", webhook: "Discord Webhook URL",
        btnProd: "Üretim", prodCmdTitle: "Üretim Komutu", targetMetalLabel: "Hedef Kaynak", crafters: "Zanaatkarlar", target: "Miktar",
        btnAutoFill: "Doldur", btnClearCart: "Temizle",
        yieldMods: "Tercihler", mastery: "Ustalık (+6%)", refining: "Arıtma (+3%)", extraction: "Çıkarma (+3%)",
        btnDiscord: "Panoya Kopyala", btnSend: "Discord'a Gönder", btnPrefs: "Tercihler", yieldModsModal: "Tercihler",
        btnBank: "Envanter", invBankTitle: "Envanter",
        invBank: "Envanter", showAllBank: "Tümünü Göster", showAllCart: "Tümünü Göster", btnReset: "Sıfırla", defGather: "Eksik Bileşenler", mfgPipe: "Üretim Hattı", marketCart: "Market Sepeti", marketCartTitle: "Market Sepeti",
        tblPrice: "Fiyat", tblBuy: "Alınacak", tblCost: "Maliyet", tblStash: "Zula", cartTotal: "Sepet Toplamı:", tblOrder: "Sipariş",
        noTarget: "Hedef belirlenmedi.", allCovered: "Envanter tüm ihtiyaçları karşılıyor!", searchPlaceholder: "Ara...",
        verbCrush: "Ez", verbGrind: "Öğüt", verbExtract: "Çıkar", verbSmelt: "Erit", verbBake: "Pişir", verbAlloy: "Alaşımla", verbProcess: "İşle",
        inMachine: "içinde", stepWith: "ile", stepAnd: "ve", perCrafter: "(Zanaatkar Başına)", stepPrefix: "Adım",
        stepYieldsMain: "Verim:", stepByproducts: "Yan Ürünler:", none: "Yok",
        pipeCompleted: "Üretim İlerlemesi", btnPipeReset: "Sıfırla",
        tooltipBestYield: "En Verimli (Düşük Maliyet)", tooltipMaxYield: "Maks. Yan Ürün", tooltipRegionLocked: "Bölge Kilitli",
        tooltipMaxCraft: "Envanterle yapılabilecek maksimum miktarı hesapla", tooltipShowAll: "İlgisiz öğeleri göster",
        resetPrompt: "Tüm değerler sıfırlansın mı?", restartPrompt: "Hattı yeniden başlat?", modalActionsTitle: "İşlemler",
        discHeader: "LOJİSTİK SİPARİŞİ", discReq: "EKSİK BİLEŞENLER:", discStock: "Tüm malzemeler tamam.", discCopied: "Kopyalandı!",
        discMarket: "MARKET ALIMLARI:", errWebhook: "Geçerli bir Discord URL'si girin.", errSend: "Gönderim hatası.", sucSend: "Discord'a gönderildi!",
        qAdd: "+10k", qAddStk: "+1 Yığın", qSub: "-10k", qSubStk: "-1 Yığın", byproductsTitle: "TOPLAM YAN ÜRÜN", bpTitle: "TOPLAM YAN ÜRÜN", btnBp: "Yan Ürünler",
        btnPrefEfficient: "Verimli Yol", btnPrefYield: "Maks. Verim", lblEfficient: "Verimli", lblMaxYield: "Maks. Verim", lblRegionLocked: "Bölge Kilitli",
        chkBp: "Yan ürünleri göster", colorAccent: "Birincil Renk", colorBg: "İkincil Renk", colorText: "Metin Rengi", btnResetColors: "Renkleri Sıfırla",
        viewPers: "Kişiselleştirme", viewVis: "Modül Görünürlüğü", viewLang: "Dil", viewGather: "Eksik Bileşenler", viewPipe: "Üretim Hattı", viewProdCmd: "Üretim Komutu",
        btnCart: "Sepet", btnSettings: "Ayarlar", btnHelp: "Yardım", btnExportCSV: "CSV Dışa Aktar", actDiscord: "Discord Gönderimi",
        btnMaxText: "Maks. Üretimi Hesapla", maxTitle: "Limit Aşıldı", maxAcknowledge: "Onayla",
        maxCraftAny: "Mevcut envanterle [item] yapılamıyor.", maxMissing: "[target] hedefine ulaşmak için eksik:", maxTotalCraft: "Şu kadar üretmek için malzeme var:", maxCalculatedGoal: "Hedef için yeterli malzeme var.",
        legAcronyms: "Kısaltmalar", legEff: "Verimli", legYld: "Maks. Verim", legReg: "Bölge Kilitli",
        categories: { raw: "Hammaddeler", basicExt: "Temel Çıkarımlar", intOre: "Ara Cevherler", advOre: "Gelişmiş Cevherler", catalyst: "Katalizörler", refined: "Rafine Metaller", "Raw Materials": "Hammaddeler", "Basic Extractions": "Temel Çıkarımlar", "Intermediate Ores": "Ara Cevherler", "Advanced Ores": "Gelişmiş Cevherler", "Catalysts": "Katalizörler", "Refined Metals": "Rafine Metaller" },
        items: baseItems,
        helpHtml: `<p><strong>Quartermaster Command</strong> yardım sayfasına hoş geldiniz. Sistem en iyi arıtma yollarını otomatik olarak hesaplar.</p>`
    },

    sv: {
        tabPrefs: "Inställningar", tabData: "Data", tabHelp: "Hjälp", tabView: "Vy", tabGuide: "Guide", tabLegend: "Teckenförklaring",
        resetDesc: "Rensa alla sparade förråd, kundvagn och mål.",
        shareTitle: "Dela / Importera", shareDesc: "Skapa en kod för att dela inställningar.",
        btnGenCode: "Skapa & Kopiera", btnLoadCode: "Ladda Kod", importSuccess: "Laddades framgångsrikt!", importError: "Ogiltig kod.", exportSuccess: "Kopierad till urklipp!",
        format: "Visningsformat", optUnits: "Enheter", optStacks: "Travar (10k)", webhook: "Discord Webhook URL",
        btnProd: "Produktion", prodCmdTitle: "Produktionspanel", targetMetalLabel: "Målresurs", crafters: "Hantverkare", target: "Mängd",
        btnAutoFill: "Fyll", btnClearCart: "Rensa",
        yieldMods: "Inställningar", mastery: "Mästerskap (+6%)", refining: "Raffinering (+3%)", extraction: "Extraktion (+3%)",
        btnDiscord: "Kopiera", btnSend: "Skicka till Discord", btnPrefs: "Inställningar", yieldModsModal: "Inställningar",
        btnBank: "Förråd", invBankTitle: "Förråd",
        invBank: "Förråd", showAllBank: "Visa allt", showAllCart: "Visa allt", btnReset: "Återställ allt", defGather: "Saknade komponenter", mfgPipe: "Produktionslinje", marketCart: "Kundvagn", marketCartTitle: "Kundvagn",
        tblPrice: "Pris", tblBuy: "Köpa", tblCost: "Kostnad", tblStash: "Lager", cartTotal: "Kundvagn Total:", tblOrder: "Beställning",
        noTarget: "Inget mål satt.", allCovered: "Förrådet täcker alla behov!", searchPlaceholder: "Sök...",
        verbCrush: "Krossa", verbGrind: "Mal", verbExtract: "Extrahera", verbSmelt: "Smält", verbBake: "Baka", verbAlloy: "Legera", verbProcess: "Bearbeta",
        inMachine: "i", stepWith: "med", stepAnd: "och", perCrafter: "(Per hantverkare)", stepPrefix: "Steg",
        stepYieldsMain: "Ger:", stepByproducts: "Biprodukter:", none: "Inga",
        pipeCompleted: "Framsteg", btnPipeReset: "Återställ",
        tooltipBestYield: "Mest Effektiv (Lägsta kostnad)", tooltipMaxYield: "Max. Biprodukter", tooltipRegionLocked: "Regionlåst",
        tooltipMaxCraft: "Beräkna max från förrådet", tooltipShowAll: "Visa orelaterade föremål",
        resetPrompt: "Återställ alla värden till noll?", restartPrompt: "Starta om linjen?", modalActionsTitle: "Åtgärder",
        discHeader: "LOGISTIKORDER", discReq: "SAKNADE KOMPONENTER:", discStock: "Alla material täckta.", discCopied: "Kopierad!",
        discMarket: "MARKNADSKÖP:", errWebhook: "Ange en giltig Discord URL.", errSend: "Kunde inte skicka.", sucSend: "Skickad till Discord!",
        qAdd: "+10k", qAddStk: "+1 Trave", qSub: "-10k", qSubStk: "-1 Trave", byproductsTitle: "TOTALA BIPRODUKTER", bpTitle: "TOTALA BIPRODUKTER", btnBp: "Biprodukter",
        btnPrefEfficient: "Effektiv Väg", btnPrefYield: "Max. Utbyte", lblEfficient: "Effektiv", lblMaxYield: "Max. Utbyte", lblRegionLocked: "Regionlåst",
        chkBp: "Visa biprodukter", colorAccent: "Primärfärg", colorBg: "Sekundärfärg", colorText: "Textfärg", btnResetColors: "Återställ färger",
        viewPers: "Personalisering", viewVis: "Modulsynlighet", viewLang: "Språk", viewGather: "Saknade komponenter", viewPipe: "Produktionslinje", viewProdCmd: "Produktionspanel",
        btnCart: "Kundvagn", btnSettings: "Inställningar", btnHelp: "Hjälp", btnExportCSV: "Exportera CSV", actDiscord: "Discord Utskick",
        btnMaxText: "Beräkna Max. Tillverkning", maxTitle: "Gräns nådd", maxAcknowledge: "Acceptera",
        maxCraftAny: "Kan inte tillverka [item] med nuvarande förråd.", maxMissing: "För att nå målet [target] saknas:", maxTotalCraft: "Du har material för att tillverka", maxCalculatedGoal: "Tillräckligt med material finns.",
        legAcronyms: "Förkortningar", legEff: "Effektiv", legYld: "Max. Utbyte", legReg: "Regionlåst",
        categories: { raw: "Råmaterial", basicExt: "Grundextraktioner", intOre: "Mellanmalmer", advOre: "Avancerade Malmer", catalyst: "Katalysatorer", refined: "Raffinerade Metaller", "Raw Materials": "Råmaterial", "Basic Extractions": "Grundextraktioner", "Intermediate Ores": "Mellanmalmer", "Advanced Ores": "Avancerade Malmer", "Catalysts": "Katalysatorer", "Refined Metals": "Raffinerade Metaller" },
        items: baseItems,
        helpHtml: `<p>Välkommen till <strong>Quartermaster Command</strong>. Systemet beräknar de bästa raffineringsvägarna automatiskt.</p>`
    },

    cs: {
        tabPrefs: "Předvolby", tabData: "Data", tabHelp: "Nápověda", tabView: "Zobrazit", tabGuide: "Průvodce", tabLegend: "Legenda",
        resetDesc: "Vymazat veškerý uložený inventář, košík a cíle.",
        shareTitle: "Sdílet / Importovat", shareDesc: "Vygenerujte kód pro sdílení nastavení.",
        btnGenCode: "Generovat a kopírovat", btnLoadCode: "Načíst kód", importSuccess: "Úspěšně načteno!", importError: "Neplatný kód.", exportSuccess: "Zkopírováno do schránky!",
        format: "Formát zobrazení", optUnits: "Jednotky", optStacks: "Hromádky (10k)", webhook: "Discord Webhook URL",
        btnProd: "Výroba", prodCmdTitle: "Výrobní panel", targetMetalLabel: "Cílový zdroj", crafters: "Řemeslníci", target: "Množství",
        btnAutoFill: "Vyplnit", btnClearCart: "Vymazat",
        yieldMods: "Předvolby", mastery: "Mistrovství (+6%)", refining: "Rafinace (+3%)", extraction: "Těžba (+3%)",
        btnDiscord: "Kopírovat", btnSend: "Odeslat na Discord", btnPrefs: "Předvolby", yieldModsModal: "Předvolby",
        btnBank: "Inventář", invBankTitle: "Inventář",
        invBank: "Inventář", showAllBank: "Zobrazit vše", showAllCart: "Zobrazit vše", btnReset: "Resetovat vše", defGather: "Chybějící komponenty", mfgPipe: "Výrobní linka", marketCart: "Košík", marketCartTitle: "Košík",
        tblPrice: "Cena", tblBuy: "Koupit", tblCost: "Cena", tblStash: "Zásoba", cartTotal: "Košík celkem:", tblOrder: "Objednávka",
        noTarget: "Nebyl stanoven žádný cíl.", allCovered: "Inventář pokrývá všechny potřeby!", searchPlaceholder: "Hledat...",
        verbCrush: "Drtit", verbGrind: "Mlít", verbExtract: "Extrahovat", verbSmelt: "Tavit", verbBake: "Péct", verbAlloy: "Slévat", verbProcess: "Zpracovat",
        inMachine: "v", stepWith: "s", stepAnd: "a", perCrafter: "(Na řemeslníka)", stepPrefix: "Krok",
        stepYieldsMain: "Vynáší:", stepByproducts: "Vedlejší produkty:", none: "Žádné",
        pipeCompleted: "Pokrok", btnPipeReset: "Resetovat",
        tooltipBestYield: "Nejefektivnější (Nejnižší náklady)", tooltipMaxYield: "Max. vedlejších produktů", tooltipRegionLocked: "Regionálně uzamčeno",
        tooltipMaxCraft: "Vypočítat maximum z inventáře", tooltipShowAll: "Zobrazit nesouvisející předměty",
        resetPrompt: "Resetovat všechny hodnoty na nulu?", restartPrompt: "Restartovat linku?", modalActionsTitle: "Akce",
        discHeader: "LOGISTICKÁ OBJEDNÁVKA", discReq: "CHYBĚJÍCÍ KOMPONENTY:", discStock: "Všechny materiály pokryty.", discCopied: "Zkopírováno!",
        discMarket: "NÁKUPY NA TRHU:", errWebhook: "Zadejte platnou Discord URL.", errSend: "Chyba při odesílání.", sucSend: "Odesláno na Discord!",
        qAdd: "+10k", qAddStk: "+1 Hromádka", qSub: "-10k", qSubStk: "-1 Hromádka", byproductsTitle: "CELKEM VEDLEJŠÍ PRODUKTY", bpTitle: "CELKEM VEDLEJŠÍ PRODUKTY", btnBp: "Vedlejší produkty",
        btnPrefEfficient: "Efektivní cesta", btnPrefYield: "Max. Výnos", lblEfficient: "Efektivní", lblMaxYield: "Max. Výnos", lblRegionLocked: "Uzamčeno",
        chkBp: "Zobrazit vedlejší produkty", colorAccent: "Primární barva", colorBg: "Sekundární barva", colorText: "Barva textu", btnResetColors: "Resetovat barvy",
        viewPers: "Personalizace", viewVis: "Viditelnost modulů", viewLang: "Jazyk", viewGather: "Chybějící komponenty", viewPipe: "Výrobní linka", viewProdCmd: "Výrobní panel",
        btnCart: "Košík", btnSettings: "Nastavení", btnHelp: "Nápověda", btnExportCSV: "Exportovat CSV", actDiscord: "Odeslání Discord",
        btnMaxText: "Vypočítat Max. Výrobu", maxTitle: "Dosažen limit", maxAcknowledge: "Potvrdit",
        maxCraftAny: "S aktuálním inventářem nelze vyrobit [item].", maxMissing: "K dosažení cíle [target] chybí:", maxTotalCraft: "Máte materiály k výrobě", maxCalculatedGoal: "Dostatek materiálů pro cíl.",
        legAcronyms: "Zkratky", legEff: "Efektivní", legYld: "Max. Výnos", legReg: "Uzamčeno",
        categories: { raw: "Suroviny", basicExt: "Základní extrakce", intOre: "Mezirudy", advOre: "Pokročilé rudy", catalyst: "Katalyzátory", refined: "Rafinované kovy", "Raw Materials": "Suroviny", "Basic Extractions": "Základní extrakce", "Intermediate Ores": "Mezirudy", "Advanced Ores": "Pokročilé rudy", "Catalysts": "Katalyzátory", "Refined Metals": "Rafinované kovy" },
        items: baseItems,
        helpHtml: `<p>Vítejte v <strong>Quartermaster Command</strong>. Systém automaticky vypočítá nejlepší rafinační cesty.</p>`
    }
};