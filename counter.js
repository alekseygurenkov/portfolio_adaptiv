const counterEl = document.querySelector('[data-find="counterValue"]');
const addOnePoolButton = document.getElementById("addOnePoolButton");
const addTwoPoolsButton = document.getElementById("addTwoPoolsButton");
const resetButton = document.getElementById("resetButton");

console.log(addOnePoolButton.dataset);

const COUNTER_INITIAL_VALUE = 0;

let counter = COUNTER_INITIAL_VALUE;
counterEl.innerText = counter;

addOnePoolButton.addEventListener("click", function () {
    counter = counter + parseInt(addOnePoolButton.dataset.pools);
    counterEl.innerText = counter;
});

addTwoPoolsButton.addEventListener("click", function () {
    counter = counter + parseInt(addTwoPoolsButton.dataset.pools);
    counterEl.innerText = counter;
});

resetButton.addEventListener("click", function () {
    counter = COUNTER_INITIAL_VALUE;
    counterEl.innerText = counter;
});
