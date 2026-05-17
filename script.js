document.addEventListener('DOMContentLoaded', () => {
    const lightRadio = document.getElementById('light');
    const darkRadio = document.getElementById('dark');

    // Central function to update both the DOM control state and the global attribute
    function applyTheme(theme) {
        if (theme === 'dark') {
            darkRadio.checked = true;
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            lightRadio.checked = true;
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }

    // Detect system preference or local storage cached setting
    const savedTheme = localStorage.getItem('portfolio-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (systemPrefersDark) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }

    // Listen for manual interactions and save configurations locally
    lightRadio.addEventListener('change', () => {
        if (lightRadio.checked) {
            applyTheme('light');
            localStorage.setItem('portfolio-theme', 'light');
        }
    });

    darkRadio.addEventListener('change', () => {
        if (darkRadio.checked) {
            applyTheme('dark');
            localStorage.setItem('portfolio-theme', 'dark');
        }
    });
});