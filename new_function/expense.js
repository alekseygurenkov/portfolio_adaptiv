const LIMIT = 10000;

const expenses = [];

const inputNode = document.querySelector('.js-expense-input');
const buttonNode = document.querySelector('.js-button');
const historyNode = document.querySelector('.js-history');
const sumNode = document.querySelector('.js-sum');
const limitNode = document.querySelector('.js-limit');
const statusNode = document.querySelector('.js-status');

limitNode.innerText = LIMIT;

buttonNode.addEventListener('click', function () {
    // 1. Получаем значение из поля ввода
    if(inputNode.value === '') {
        return;
    }

    const expense = parseInt(inputNode.value); // inputNode = константа, value - вывести, parseInt- преобразовнаие строки в число

    inputNode.value = '';    // обнуление значения после того как пользователь ввел данные

    // 2. Сохраняем трату в список 
    expenses.push(expense);

    // console.log(expenses);

    // 3. Выведем новый список трат
    let expensesListHTML = '';

    expenses.forEach(element => {
        const elementHTML = `<li>${element} руб.</li>`;
        expensesListHTML += elementHTML;
    });

    historyNode.innerHTML = `<ol>${expensesListHTML}</ol>`;

    // 4. Посчитать и вывести сумму

    let sum = 0;

    expenses.forEach(element => {
        const elementHTML = `<li>${element} руб.</li>`;
        sum += element;
        console.log(sum);
    });

    sumNode.innerText = sum;

    // 5. Сравнение с лимитом и вывод статуса
    if(sum <= LIMIT) {
        statusNode.innerText = 'все хорошо';
    } else {
        statusNode.innerText = 'все плохо';
        statusNode.classList.add('status_red'); // добавляем класс элементу, его стиль css прописываю в файле css оописываю его 
    }
});
