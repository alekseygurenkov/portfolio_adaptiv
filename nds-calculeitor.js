document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('calculateBtn').onclick = calculateVAT;
    document.getElementById('excludeBtn').onclick = excludeVAT;
});

function calculateVAT() {
    const amount = parseFloat(document.getElementById('amountInput').value);
    const rate = parseFloat(document.getElementById('vatRate').value) / 100;
    const vat = amount * rate;
    const total = amount + vat;
    document.getElementById('result-nds').innerText = `С НДС: ${total.toFixed(2)} (НДС: ${vat.toFixed(2)})`;
}

function excludeVAT() {
    const amount = parseFloat(document.getElementById('amountInput').value);
    const rate = parseFloat(document.getElementById('vatRate').value) / 100;
    const netAmount = amount / (1 + rate);
    const vat = amount - netAmount;
    document.getElementById('result-nds').innerText = `Без НДС: ${netAmount.toFixed(2)} (НДС: ${vat.toFixed(2)})`;
}