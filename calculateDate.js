function addMonthsMinusOneDay(dateStr) {
    const dateParts = dateStr.split('/');
    const date = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
    date.setMonth(date.getMonth() + 11);
    date.setDate(date.getDate() - 1);
    return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
}

function calculateDate() {
    const input = document.getElementById('dateInput').value;
    const result = addMonthsMinusOneDay(input);
    document.getElementById('result-date').innerText = `Результат: ${result}`;
}