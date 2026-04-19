document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            if (themeToggle) themeToggle.textContent = '화이트모드';
        } else {
            body.classList.remove('dark-mode');
            if (themeToggle) themeToggle.textContent = '다크모드';
        }
    };

    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = body.classList.toggle('dark-mode');
            const newTheme = isDark ? 'dark' : 'light';
            themeToggle.textContent = isDark ? '화이트모드' : '다크모드';
            localStorage.setItem('theme', newTheme);
        });
    }

    // Lotto Logic (Only if on Home Page)
    const lottoDisplay = document.querySelector('.lotto-display');
    const generateBtn = document.querySelector('.generate-btn');

    if (lottoDisplay && generateBtn) {
        const getNumberColor = (number) => {
            if (number <= 10) return '#fbc400'; // 노란색
            if (number <= 20) return '#69c8f2'; // 파란색
            if (number <= 30) return '#ff7272'; // 빨간색
            if (number <= 40) return '#aaa';    // 회색
            return '#b0d840'; // 초록색
        };

        const generateLottoNumbers = () => {
            const numbers = new Set();
            while (numbers.size < 6) {
                const randomNumber = Math.floor(Math.random() * 45) + 1;
                numbers.add(randomNumber);
            }
            return Array.from(numbers).sort((a, b) => a - b);
        };

        const displayNumbers = (numbers) => {
            lottoDisplay.innerHTML = '';
            numbers.forEach((number, index) => {
                const ball = document.createElement('div');
                ball.classList.add('lotto-ball');
                ball.textContent = number;
                ball.style.backgroundColor = getNumberColor(number);
                ball.style.animationDelay = `${index * 0.1}s`;
                lottoDisplay.appendChild(ball);
            });
        };

        generateBtn.addEventListener('click', () => {
            const newNumbers = generateLottoNumbers();
            displayNumbers(newNumbers);
        });

        // Initial load
        displayNumbers(generateLottoNumbers());
    }
});
