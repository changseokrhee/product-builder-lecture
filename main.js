document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            if (themeToggle) themeToggle.textContent = 'Light Mode';
        } else {
            body.classList.remove('dark-mode');
            if (themeToggle) themeToggle.textContent = 'Dark Mode';
        }
    };

    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = body.classList.toggle('dark-mode');
            const newTheme = isDark ? 'dark' : 'light';
            themeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
            localStorage.setItem('theme', newTheme);
        });
    }

    console.log("AFCRefereeHub: Expert Insights loaded.");
});
