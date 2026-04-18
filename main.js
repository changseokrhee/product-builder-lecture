document.addEventListener('DOMContentLoaded', () => {
    const lottoDisplay = document.querySelector('.lotto-display');
    const generateBtn = document.querySelector('.generate-btn');

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
                numberElement.classList.add('lotto-number');
                numberElement.textContent = number;
                numberElement.style.backgroundColor = getNumberColor(number);
                lottoDisplay.appendChild(numberElement);
            }, index * 100); // 순차적으로 나타나는 애니메이션 효과
        });
    };

    generateBtn.addEventListener('click', () => {
        const newNumbers = generateLottoNumbers();
        displayNumbers(newNumbers);
    });

    // 페이지 로드 시 초기 번호 생성
    const initialNumbers = generateLottoNumbers();
    displayNumbers(initialNumbers);
});
