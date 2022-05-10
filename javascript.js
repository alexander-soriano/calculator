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
let operatorCheck;

const display = document.querySelector('.display');

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', () => {
        if (display.textContent.includes('.') && numberButton.textContent==='.'){return} // to prevent multiple decimal point
        if (Number(display.textContent)>=10000000) {return}
        displayValue += numberButton.textContent
        if (displayValue.includes('.')){
        display.textContent = Number(displayValue).toPrecision(6)/1;
        }
        display.textContent = Number(displayValue)
    })
})

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        if (firstValue==='' || operator===''){
            firstValue = display.textContent;
            operator = operatorButton.textContent;
            displayValue = '';
        } else if (operator.length!==0 && displayValue == ''){ // remove bug of cannot change operator when clicked new one
            operator = operatorButton.textContent;
        } else {
            secondValue = display.textContent;
            let result = operate(operator,Number(firstValue),Number(secondValue));
            display.textContent = Number(result).toPrecision(6)/1;
            firstValue = result;
            displayValue = '';
            operator = operatorButton.textContent;
        }
    })
})

const equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', () => {
    secondValue = display.textContent;
    display.textContent = (operate(operator,Number(firstValue),Number(secondValue))).toPrecision(6)/1;
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
    display.textContent = '';
});

const backspaceButton = document.querySelector('.backspace');
backspaceButton.addEventListener('click', () => {
    displayValue = displayValue.substring(0,displayValue.length-1);
    display.textContent = displayValue;
})

document.addEventListener('keydown', (e) => {
    console.log(e.code);
    const key = document.querySelector(`.${e.code}`)
    key.click();
})

const asd = document.querySelector('.number.asd');


// to do: add +/- integer