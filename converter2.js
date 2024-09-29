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

function convertDecimalToWords(decimalPart) {
    const decimalUnits = [
        '', 'десятая', 'сотая', 'тысячная', 'десятитысячная', 'стотысячная'
    ];

    let words = '';
    for (let i = 0; i < decimalPart.length; i++) {
        const digit = parseInt(decimalPart[i], 10);
        if (digit > 0) {
            words += numberToWords(digit) + ' ' + decimalUnits[i] + ' ';
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

    const numberParts = numberInput.split('.');
    const integerPart = parseInt(numberParts[0], 10);
    const decimalPart = numberParts[1] || '';

    if (isNaN(integerPart) || integerPart < 0 || integerPart > 9999 || (decimalPart && decimalPart.length > 6)) {
        resultDiv.textContent = 'Введите корректное число от 0 до 9999, и дробная часть не должна превышать 6 знаков.';
    } else {
        let words = numberToWords(integerPart);
        if (decimalPart) {
            words += ' целых ' + convertDecimalToWords(decimalPart);
        }
        resultDiv.textContent = words;
    }
});
