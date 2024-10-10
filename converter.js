function numberToWords(num) {
    const units = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    const teens = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    const tens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    const hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

    if (num === 0) return 'ноль';

    let words = '';

    // Обрабатываем тысячи
    if (Math.floor(num / 1000) > 0) {
        const thousands = Math.floor(num / 1000);
        words += (thousands === 1 ? 'одна тысяча ' : thousands === 2 ? 'две тысячи ' : units[thousands] + ' тысяч ');
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

function decimalToWords(decimal) {
    const [integerPart, fractionalPart] = decimal.split('.').map(Number);

    let words = numberToWords(integerPart);
    if (fractionalPart !== undefined) {
        const fractionalWords = numberToWords(fractionalPart);
        if (fractionalPart < 10) {
            words += ' целых ' + fractionalWords + ' десятых'; // Десятые, если одна цифра
        } else {
            words += ' целых ' + fractionalWords + ' сотых'; // Сотые, если две цифры
        }
    }

    return words;
}

// Обработчик события для кнопки
document.getElementById('convertButton').addEventListener('click', () => {
    const numberInput = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');
    
    if (numberInput === '') {
        resultDiv.textContent = 'Пожалуйста, введите число.';
        return;
    }

    if (!/^\d+(\.\d+)?$/.test(numberInput)) {
        resultDiv.textContent = 'Введите корректное десятичное число.';
        return;
    }

    // Разделяем число на целую и дробную части
    const [integerPart, fractionalPart] = numberInput.split('.').map(Number);

    if (integerPart > 9999) {
        resultDiv.textContent = 'Число должно быть от 0 до 9999 для целой части.';
    } else {
        const result = decimalToWords(numberInput);
        resultDiv.textContent = result;
    }
});
