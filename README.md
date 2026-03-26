# Quartermaster Command ⚔️
**The Ultimate Mortal Online 2 Refining Suite & Logistics Dashboard**

Quartermaster Command is an advanced, offline-capable Progressive Web Application (PWA) designed to calculate, track, and dispatch complex metallurgy and extraction pipelines in Mortal Online 2. 

Made by **[MTM] Jaegh** for the MERCANTORM guild.

---

## 🌟 Key Features

### 🧠 Intelligent Pipeline & Dynamic Routing
Automatically maps out the multi-step extraction, refining, and smelting tasks required for complex metals like Steel, Tungsteel, and Oghmium.
Force the calculation engine to prioritize specific recipes using the route badges:
* **[E] Efficient Path:** Prioritizes recipes with the absolute lowest raw material cost.
* **[Y] Max Yield:** Prioritizes recipes that generate the highest amount of secondary byproducts.
* **[R] Region Locked:** Restricts the calculation to only use machinery available in specific local regions (e.g., locking out blast furnaces if you are in a remote town).

### 🧮 "Calculate Max Craftable" Engine
Instantly calculates the absolute maximum amount of a target metal you can produce based *strictly* on what you currently have in your inventory. No more guessing how much Steel your current Pig Iron and Coal will yield.

### 🛒 Smart Market Cart
Acts as a shopping list and budget tracker for your refining pipelines. 
* Input local market prices and desired buy quantities. 
* Use the **Auto-Fill** feature to let the system calculate exactly what materials you are missing. 
* The total gold cost updates dynamically as you adjust tiers and quantities.

### 📡 Discord Dispatch
Generates a beautifully formatted Markdown work order—cleanly separating items you need to buy on the Market from items that require Manual Gathering. You can copy the text directly to your clipboard or push it straight to a Discord Webhook from the app.

### 🌍 Global Localization (16 Languages)
Fully translated and instantly toggleable between 16 different languages via the settings menu, including:
*English, French, Arabic, Czech, German, Spanish, Finnish, Hungarian, Italian, Polish, Portuguese, Romanian, Russian, Swedish, Turkish, and Ukrainian.*

### 🎨 Deep Customization & UI
* **Dynamic Progress:** Visual progress bars track your missing components, shifting from red to green as you fulfill your logistics requirements.
* **Theme Control:** Toggle Dark/Light modes, adjust primary/secondary accent colors, and hide modules you don't actively need.
* **Byproduct Tracking:** Toggle the visibility of all secondary byproducts generated during the manufacturing pipeline.

### 🔗 State Sharing & Export
Save your current inventory, shopping cart, and pipeline goals to share with other crafters. Generate a short string code to share with guildmates, or choose CSV export to download your data as a spreadsheet.

---

## 🚀 Installation & Offline Setup

Quartermaster Command is a static, client-side application. **No backend server or database is required**, meaning your data stays entirely local to your browser.

1. **Web Browser:** Simply access the hosted URL to use the app immediately.
2. **Mobile / App Install (PWA):** Quartermaster Command features a Service Worker (`sw.js`). Visit the URL on a supported mobile or desktop browser and tap **"Add to Home Screen"** or **"Install"** to install it as a native, fully offline-capable app.
3. **Local Use:** Download the repository files and double-click `index.html`.

### 🔄 Auto-Updating PWA
When installed as a PWA, Quartermaster Command will automatically detect when a new version is pushed to the repository. It will download the update silently in the background and notify you to refresh, ensuring you always have the latest MO2 recipes and features without losing your local inventory data.

---

## 📂 Project Structure

* `/index.html` - The core application layout, modals, and UI framework.
* `/styles.css` - Custom styling, responsive mobile grids, CSS badges, and theme variables.
* `/js/app.js` - Main initialization, pipeline calculation loop, and DOM interaction logic.
* `/js/engine.js` - The heavy-lifting recursive extraction and recipe resolution math.
* `/js/data.js` - Database containing all MO2 item categories, prices, recipes, and yield tables.
* `/js/lang.js` - 16-language translation dictionary and dynamic HTML Help injector.
* `/js/market_bank.js` - Inventory, shopping cart, tier management, and search filtering logic.
* `/js/pipeline.js` - Logic for checking off steps, routing path choices, and progress bar updates.
* `/js/ui.js` - Modal triggers, sidebar toggles, and UI interactions.
* `/js/state.js` - LocalStorage saving/loading mechanisms.
* `/js/discord.js` - Webhook payload generation and string formatting.
* `/js/theme.js` - Dark/Light mode and custom color hex handlers.
* `/sw.js` - Service Worker for offline PWA caching and background updates.
* `/manifest.json` - Web App Manifest for native installation capabilities.
