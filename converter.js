function numberToWords(num) {
    const units = [
        '', 'один', 'два', 'три', 'четыре', 'пять', 
        'шесть', 'семь', 'восемь', 'девять'
    ];
    const teens = [
        'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 
        'четырнадцать', 'пятнадцать', 'шестнадцать', 
        'семнадцать', 'восемнадцать', 'девятнадцать'
    ];
    const tens = [
        '', '', 'двадцать', 'тридцать', 'сорок', 
        'пятьдесят', 'шестьдесят', 'семьдесят', 
        'восемьдесят', 'девяносто'
    ];
    const hundreds = [
        '', 'сто', 'двести', 'триста', 'четыреста', 
        'пятьсот', 'шестьсот', 'семьсот', 
        'восемьсот', 'девятьсот'
    ];

    if (num === 0) return 'ноль';

    let words = '';

    // Обрабатываем тысячи
    if (Math.floor(num / 1000) > 0) {
        const thousands = Math.floor(num / 1000);
        if (thousands === 1) {
            words += 'одна тысяча ';
        } else if (thousands === 2) {
            words += 'две тысячи ';
        } else {
            words += units[thousands] + ' тысяч ';
        }
        num %= 1000;
    }

    // Обрабатываем сотни
    if (Math.floor(num / 100) > 0) {
        words += hundreds[Math.floor(num / 100)] + ' ';
        num %= 100;
    }

    // Обрабатываем десятки и единицы
    if (num >= 10 && num < 20) {
        words += teens[num - 10] + ' ';
    } else {
        if (Math.floor(num / 10) > 0) {
            words += tens[Math.floor(num / 10)] + ' ';
        }
        if (num % 10 > 0) {
            words += units[num % 10] + ' ';
        }
    }

    return words.trim();
}

// Обработчик события для кнопки
document.getElementById('convertButton').addEventListener('click', () => {
    const numberInput = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');
    
    if (numberInput === '') {
        resultDiv.textContent = 'Пожалуйста, введите число.';
        return;
    }

    const number = parseInt(numberInput, 10);
    if (isNaN(number) || number < 0 || number > 9999) {
        resultDiv.textContent = 'Введите корректное число от 0 до 9999.';
    } else {
        resultDiv.textContent = numberToWords(number);
    }
});
