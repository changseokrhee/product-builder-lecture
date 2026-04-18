document.addEventListener('DOMContentLoaded', () => {
    const lottoDisplay = document.querySelector('.lotto-display');
    const generateBtn = document.querySelector('.generate-btn');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Theme Toggle Logic
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '화이트모드';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        themeToggle.textContent = isDarkMode ? '화이트모드' : '다크모드';
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });

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
            setTimeout(() => {
                const numberElement = document.createElement('div');
                numberElement.classList.add('lotto-ball');
                numberElement.textContent = number;
                numberElement.style.backgroundColor = getNumberColor(number);
                lottoDisplay.appendChild(numberElement);
            }, index * 100);
        });
    };

    generateBtn.addEventListener('click', () => {
        const newNumbers = generateLottoNumbers();
        displayNumbers(newNumbers);
    });

    // Initial load
    const initialNumbers = generateLottoNumbers();
    displayNumbers(initialNumbers);
});
