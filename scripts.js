console.log("hello world");

function add(first, second){
    return first + second;
}

function subtract(first, second){
    return first - second;
}

function multiply(first, second){
    return first * second;
}

function divide(first, second){
    return first / second;
}

let numOne;
let numTwo;
let operator;

function operate(numOne, operator, numTwo){
    switch(operator){
        case "+" :
            return add(numOne, numTwo);
            break;
        case "-" :
            return subtract(numOne, numTwo);
            break;
        case "*" :
            return multiply(numOne, numTwo);
            break;
        case "/":
            return divide(numOne, numTwo);
            break;
    }
}