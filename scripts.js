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

let numOne = 0;
let numTwo = 0;
let operator = 0;
console.log(`numOne is ${typeof numOne}`)
// ok lets just turn textcontent into number first 
// wait we'll just keep it as a string until we need to operate them
// in that case keeping them as a string shall be alright!
let buttons = document.querySelectorAll(".numbers button")
buttons.forEach(function(button){
    button.addEventListener("click", function(){
        let num = button.textContent
        numOne += num;
        console.log(`${numOne}, it is a ${typeof numOne}`);
    })
})


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
