Here is a highly organized, professional, and easy-to-read README.md file formatted perfectly for GitHub or Discord documentation.
You can copy and paste this directly into your repository!
⚔️ Quartermaster Command: Steel Logistics v4.2
> The ultimate Mortal Online 2 manufacturing calculator and logistics dashboard. > Designed and developed by Jaegh.
> 
Quartermaster Command is a client-side web application designed for MO2 Guild Leaders and Logistics Officers. It instantly calculates exact raw material requirements, multi-stage manufacturing steps, and market costs needed to produce any quantity of Steel, factoring in your existing bank stock and character skills.
🌟 Feature Overview
| Feature | Description |
|---|---|
| 🧠 Pipeline Intelligence | Automatically skips manufacturing steps (like Attracting or Smelting) if you already have intermediate materials like Pig Iron or Grain Steel in your bank. |
| ⚡ Max Solver | A one-click engine that calculates the absolute maximum amount of Steel you can produce based strictly on the metals in your current stockpile. |
| 🛒 Market Cart (NEW) | Enter market prices and buy quantities. The app automatically deducts purchased materials from your gathering deficit and calculates total gold cost. |
| 🤖 Auto-Fill Missing | One click on 🛒 Auto-Fill Missing populates your market cart with exactly what you need to finish the batch, giving you an instant gold quote. |
| 📋 Discord Dispatch | Generates a perfectly formatted Markdown work order—separating Market Purchases (with gold totals) from Manual Gathering tasks—ready to paste into Discord. |
| 💾 Persistent Memory | Uses browser localStorage to save your inventory, prices, and UI settings automatically. No database required. |
| 🌍 Multi-Language | Fully localized and instantly toggleable between English, Français, Español, Português, and Deutsch. |
📖 How to Use
1. Set Your Objective
 * Enter your Target Steel amount. Toggle between Units or Stacks (10k) for easier reading.
 * Set your Crafters count to automatically divide the workload steps.
2. Check Your Bank
 * Input your current inventory into the Inventory Bank section.
 * Tip: Use the +10k or +1 Stk quick-add buttons for rapid data entry.
3. Go Shopping (Optional)
 * Check the Market Cart module. Set your local server prices.
 * Enter how much of each raw material you want to buy, OR click 🛒 Auto-Fill Missing to automatically buy your entire deficit.
4. Dispatch the Order
 * Review the Manufacturing Pipeline for your exact step-by-step processing instructions.
 * Click 📋 Copy Discord Order and paste the resulting text directly into your guild's logistics channel.
🧮 Extraction Math & Yields
This tool is strictly synchronized with official Mortal Online 2 extraction values. It dynamically updates yields based on your selected Lore and Skill toggles.
| Material | Machine / Process | Catalyst Used | Base Yield |
|---|---|---|---|
| Granum | Attractor | Calx Powder (7.15%) | 1.98% Blood Ore |
| Calx | Grinder | Water (10%) | 20.58% Calx Powder 
 11.40% Coal |
| Calx | Crusher | None | 21.60% Coal |
| Saburra | Grinder | Water (10%) | 42.75% Saburra Powder |
| Blood Ore | Furnace | Coke (3.85%) | 100% Pig Iron |
> Note on Modifiers: Toggles are included for Ore Extraction Mastery (+6%), Extraction Bonus (+3%), and Refining Bonus (+3%).
> 
💻 Installation & Hosting
Because Quartermaster Command is 100% client-side (HTML/CSS/JS), there is no backend server or database to configure.
Option A: Run Locally
 * Download the index.html file.
 * Double-click to open it in any modern web browser (Chrome, Firefox, Edge, Safari).
Option B: Host for your Guild
 * Upload the index.html file to a free hosting service like GitHub Pages, Netlify, or Vercel.
 * Share the generated URL with your guildmates. It functions perfectly on both desktop and mobile devices.
⚖️ Credits
Created by Jaegh for the Mortal Online 2 community.
May your furnaces burn hot and your stockpiles never empty.
