function displayFn() {
    displayValue += this.textContent;
    display.textContent = displayValue;
}

let displayValue = '';


const display = document.querySelector('.display')
display.textContent=displayValue

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((numberButton) => {
numberButton.addEventListener('click',displayFn)
});

let operator;
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((operatorButton) => {
operatorButton.addEventListener('click',displayFn)
operatorButton.addEventListener('click',() => {
    operator=operatorButton.textContent
})
});

let firstValue;
let secondValue;    
function getValues() {
let splitDisplay = () => displayValue.split(/[+\,*\,/\,-]+/);
splitValue = splitDisplay();
firstValue = Number(splitValue[0]);
secondValue = Number(splitValue[1]);
}
const equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', () => {
getValues();
display.textContent=operate(operator,firstValue,secondValue)

})