
let num1 = '';
let num2 = '';
let selectedOperator = '';
let result = '';
let screen = document.getElementById('screen');
let num = document.getElementsByClassName('num');
let operator = document.getElementsByClassName('operator');
let equal = document.getElementById('equal');

for (let i = 0; i < num.length; i++) {
    num[i].addEventListener('click', function(e) {
        if (selectedOperator === "") {
            num1 += e.target.textContent;
        } else {
            num2 += e.target.textContent;
        }
        screen.textContent += e.target.textContent;
}
);}

for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function(e) {
        selectedOperator = e.target.textContent; 
        screen.textContent = '';
    });
}


let clear = document.getElementById('clear')
clear.addEventListener('click', function(e){
    screen.textContent = '';
    num1 = '';
    num2 = '';
    selectedOperator = '';
});


function add(num1, num2) {
    return num1 + num2
};

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
        return num1 / num2;
}


function operate(num1, selectedOperator, num2 ) {
    
    switch (selectedOperator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case 'x':
            return multiply(num1, num2);
        case '÷':
         if(num2 === 0){
            return alert("You can't divide by 0 genius 🤓")
         } else { 
        return divide(num1, num2);
        } 
        default:
            return NaN;
    }
}
if (Math.abs(result % 1) !== 0) {
        result = result.toFixed(2);
      }

equal.addEventListener('click',function(e){
    num1 = Number(num1);
    num2 = Number(num2);

    result = operate(num1, selectedOperator, num2 );
    screen.textContent = result;
    selectedOperator = '';
    num1 = result;
    num2 = '';
});