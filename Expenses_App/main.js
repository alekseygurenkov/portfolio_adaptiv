// Объявление переменных - Строковых констант
const STATUS_IN_LIMIT = 'всё хорошо';
const STATUS_OUT_OF_LIMIT = 'всё плохо';

// Объявление переменных - ссылок на html элементы
const inputNode = document.getElementById("expenseInput");
const categorySelectNode = document.getElementById("categorySelect");
const addButtonNode = document.getElementById("addButton");
const clearButtonNode = document.getElementById("clearButton");
const totalValueNode = document.getElementById("totalValue");
const statusNode = document.getElementById("statusText");
const historyList = document.getElementById("historyList");

// Получает лимит из элемента html с id limitValue
const limitNode = document.getElementById("limitValue");
const limit = parseInt(limitNode.innerText);

// Объявление нашей основной переменной
// При запуске она содержит в себе пустой массив
// который мы пополняем по нажатию на кнопку ДОБАВИТЬ
let expenses = [];

// ---ФУНКЦИИ-------------------------------------------------------------------

// Подсчитывает и возвращает сумму всех трат
const getTotal = () => {
    let sum = 0;
    expenses.forEach((expense) => {
        // пробегаем по массиву объектов expense, берем из каждого поле amount
        // и прибавляем к переменной sum
        sum +=expense.amount;
    }); 

    return sum;
};

// Отрисовывает/обновляет блок с "Всего", "Лимит" и "Статус"
const renderStatus = () => {
    // Создаем переменную total(всего) и записываем в неё результат выполнения getTotal
    const total = getTotal(expenses);
    totalValueNode.innerText = total;

    // условие сравнение - что больше "Всего" или "Лимит"
    if (total <= limit) {
        // Всего меньше чем лимит - все хорошо
        statusNode.innerText = STATUS_IN_LIMIT;
        statusNode.className = "stats__statusText_positive"
    } else {
        // всего меньше чем лимит - все плохо

        // шаблонная строка - строка в которую можно вставить переменные
        // тут вставлена переменная STATUS_OUT_OF_LIMIT
        // и будет вставлено значение разницы между лимитом и общей сумой расходов
        statusNode.innerText = `${STATUS_OUT_OF_LIMIT} (${limit - total} руб)`; // Шаблонная строка
        statusNode.className = "stats__statusText_negative";
    }
};

// Отрисовывает обновляет блок
function renderHistory() {
    historyList.innerHTML = "";
    // Сокращенная запись:
    // expenses.forEach((expense) => {

    // цикл по массиву expenses, где каждый элемент - запись о расходе (сумма и категория)
    expenses.forEach(function (expense) {
        // создаем элемент li (он пока создан только в памяти)
        const historyItem = document.createElement("li");

        // через свойство className также можно прописывать классы
        historyItem.className = "rub";

        // снова создаем шаблонную строку
        // формата "категория" - "сумма"  (а не наоборот, чтобы не усложнять html)
        historyItem.innerText = `${expense.category} - ${expense.amount}`;

        // берем наш li из памяти и вставляем в документ, в конец historyList
        historyList.appendChild(historyItem);
    });
}

// Отрисовывает/обновляет весь интерфейс (в нашем случае - историю, всего, статус)
function render () {
    // вызываем функцию обновления статуса и "всего"
    renderStatus();

    // вызываем функцию обновления истории
    renderHistory();
}

// Возвращает введенную пользователем сумму
function getExpenseFromUser () {
    return parseInt(inputNode.value);
} 

// Возвращает введенную пользователем сумму
function getSelectedCategory() {
    return categorySelectNode.value;
}

// Функция очистки поля ввода суммы
// на вход получает переменную input, в которой мы ожидаем html элемент input

// альтернативы
/*function clearInput(input) {
    input.value = "";
}*/

const clearInput = function (input) {
    input.value = "";    
};

/*
const clearInput = (input) => {
    input.value = "";
}
 */

// Функция-обработчик которая будет вызвана при нажатии кнопки Добавить
function addButtonHandler() {
    // Сохраняем в переменную currentAmound (текущая сумма) введенную сумму
    const currentAmound = getExpenseFromUser();
    if (!currentAmound) {
        return;
    }

    //сохраняем в переменную currentCategory(текущая категория) выбранную категорию
    const currentCategory = getSelectedCategory();
    // если текущаяКатегория равна значению Категория
    if(currentCategory === "Категория") {
        // тогда выйти из функции, т.к. это значение говорит нам о том
        // что пользователь не выбрал категорию
        return;
    }

    // из полученных переменных собираем объект newExpense(новыйРасход)
    // который состоит из двух полей - amount, в которое записано значение currentAmount
    // и category, в которое записано значение currentCategory
    const newExpense = { amount: currentAmound, category: currentCategory };
    console.log(newExpense);

    // Добавляем наш новыйРасход в массив расходов
    expenses.push(newExpense);

    // console.log(expenses);

    // перерисовываем интерфейс
    render();

    // сбрасываем введенную сумму
    clearInput(inputNode);
}

// Функция-обработчик кнопки Сбросить расходы
function clearButtonHandler() {
    expenses = [];
    render();
}

// ПРивязка функции-обработчика к кнопкам
addButtonNode.addEventListener("click", addButtonHandler);
clearButtonNode.addEventListener("click", clearButtonHandler);
