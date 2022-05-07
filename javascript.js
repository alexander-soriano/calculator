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
    if (b===0){return "HAHA NO"}; // to avoid division by 0
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

let displayValue = '';
let firstValue = '';
let secondValue = '';
let operator = '';

const display = document.querySelector('.display');

const decimalButton = document.querySelector('.decimal');
decimalButton.addEventListener('click', () => {
    
})

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', () => {
        if (display.textContent.includes('.') && numberButton.textContent==='.'){return} // to prevent multiple decimal point
        displayValue += numberButton.textContent
        display.textContent = displayValue
    })
})

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        if (firstValue==='' || operator===''){
            firstValue = display.textContent;
            operator = operatorButton.textContent;
            displayValue = '';
        } else {
            secondValue = display.textContent;
            let result = operate(operator,Number(firstValue),Number(secondValue));
            display.textContent = result;
            firstValue = result;
            displayValue = '';
            operator = operatorButton.textContent;
        }
    })
})

const equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', () => {
    secondValue = display.textContent;
    display.textContent = operate(operator,Number(firstValue),Number(secondValue));
    displayValue = '';
    firstValue = display.textContent
    operator = '' // to reinitialize operator value to avoid '=' > 'operator' bug
})

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    displayValue = '';
    firstValue = '';
    secondValue = '';
    operator = '';
    display.textContent = ''
})

