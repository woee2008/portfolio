document.addEventListener('DOMContentLoaded', () => {
    const lightRadio = document.getElementById('light');
    const darkRadio = document.getElementById('dark');

    // Safe encapsulation to apply selection across the browser layout tree
    function applyTheme(theme) {
        if (theme === 'dark') {
            darkRadio.checked = true;
        } else {
            lightRadio.checked = true;
        }
    }

    // Step 1: Detect cached profiles or fallbacks to native OS settings
    const savedTheme = localStorage.getItem('portfolio-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (systemPrefersDark) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }

    // Step 2: Register structural event hooks to monitor interactions
    lightRadio.addEventListener('change', () => {
        if (lightRadio.checked) {
            localStorage.setItem('portfolio-theme', 'light');
        }
    });

    darkRadio.addEventListener('change', () => {
        if (darkRadio.checked) {
            localStorage.setItem('portfolio-theme', 'dark');
        }
    });
});