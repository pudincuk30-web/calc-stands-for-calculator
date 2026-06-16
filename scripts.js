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
let operator;
console.log(`numOne is ${typeof numOne}`)
// ok lets just turn textcontent into number first 
// wait we'll just keep it as a string until we need to operate them
// in that case keeping them as a string shall be alright!
let buttons = document.querySelectorAll(".numbers button")
buttons.forEach(function(button){
    button.addEventListener("click", function(){
        let num = button.textContent
        switch (operator){
            case undefined:
                numOne += num;
                console.log(`numOne is ${numOne}, it is a ${typeof numOne}`)
                break;
            default:
                numTwo += num;
                console.log(`numTwo is ${numTwo}, it is a ${typeof numTwo}`)
        }
        ;
    })
})
// change value instead of adding it up
let opButtons = document.querySelectorAll(".operators button")
opButtons.forEach(function(button){
    button.addEventListener("click", function(e){
        operator = button.textContent
        switch(operator){
            case "X":
                operator = "*"
                break;
            case "÷":
                operator = "/"
                break;
            default:
        }
        console.log(`operator is ${operator}, it is a ${typeof operator}`);
        
    })
})

// now when that is pressed we'll need to make it switch to inputting numTwo
// make a variable that sets the state
// if state is true then textContent will be put inside second button


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
