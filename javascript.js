function add(a,b) {
    return a+b;
};

function subtract(a,b) {
    return a-b;
};

function multiply(a,b) {
    return a*b;
};

function divide(a,b) {
    return a/b;
}

function operate(operator,a,b) {
    if (operator === '+') {
        return add(a,b);
    } else if (operator === '-') {
        return subtract(a,b);
    } else if (operator === '*') {
        return multiply(a,b);
    } else if (operator === '/') {
        return divide(a,b);
    } return
}

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


