function applyColors() {
    const acc = document.getElementById('colorAccent').value;
    const bg = document.getElementById('colorBg').value;
    const txt = document.getElementById('colorText').value;
    customColors.accent = acc;
    customColors.bg = bg;
    customColors.text = txt;
    document.documentElement.style.setProperty('--accent', acc);
    document.documentElement.style.setProperty('--bg-card', bg);
    document.documentElement.style.setProperty('--text', txt);
    save();
}

function resetColors() {
    customColors = { accent: null, bg: null, text: null };
    document.documentElement.style.removeProperty('--accent');
    document.documentElement.style.removeProperty('--bg-card');
    document.documentElement.style.removeProperty('--text');
    
    const isLight = document.body.classList.contains('light-theme');
    document.getElementById('colorAccent').value = isLight ? '#8a6312' : '#d4af37';
    document.getElementById('colorBg').value = isLight ? '#ffffff' : '#1c1c21';
    document.getElementById('colorText').value = isLight ? '#111111' : '#e0e0e0';
    save();
}

function toggleTheme() { 
    document.body.classList.toggle('light-theme'); 
    resetColors(); 
}