// Объявление переменных - Строковых констант
const STATUS_IN_LIMIT = 'всё хорошо';
const STATUS_OUT_OF_LIMIT = 'всё плохо';

// Объявление переменных - ссылок на html элементы
const inputNode = document.getElementById("expenseInput");
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
        sum +=expense;
    }); 

    return sum;
};

// Тут закончил
const renderStatus = () => {
    const total = getTotal(expenses);
    totalValueNode.innerText = total;

    if (total <= limit) {
        statusNode.innerText = STATUS_IN_LIMIT;
        statusNode.className = "stats__statusText_positive"
    } else {
        statusNode.innerText = `${STATUS_OUT_OF_LIMIT} (${limit - total} руб)`; // Шаблонная строка
        statusNode.className = "stats__statusText_negative";
    }
};

const renderHistory = () => {
    historyList.innerHTML = "";
    expenses.forEach((expense) => {
        const historyItem = document.createElement("li");
        historyItem.className = "rub";
        historyItem.innerText = expense;

        historyList.appendChild(historyItem);
    });
};

const render = () => {
    renderStatus();
    renderHistory();
};

const getExpenseFromUser = () => parseInt(inputNode.value);

const clearInput = () => {
    inputNode.value = "";
};
// Обработчик кнопки длинная запись функцию
function addButtonHandler() {
    const expense = getExpenseFromUser();
    if (!expense) {
        return;
    }

    expenses.push(expense);

    console.log(expenses);

    render();
    clearInput();
};
// Обработчик кнопки короткая запись
const clearButtonHandler = () => {
    expenses = [];
    render();
};

addButtonNode.addEventListener("click", addButtonHandler);
clearButtonNode.addEventListener("click", clearButtonHandler);



