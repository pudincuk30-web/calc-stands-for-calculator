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

let display = document.querySelector(".numDisplay p");
let buttons = document.querySelectorAll(".numbers button")
buttons.forEach(function(button){
    button.addEventListener("click", function(){
        if(operator === "="){
            console.log("equal detected on buttonpress")
            operator = undefined;
            display.textContent = undefined;
        }
        let num = button.textContent
        // make a check to reset display if result is detected
        switch (operator){
            case undefined:
                numOne += num;
                console.log(`numOne is ${numOne}, it is a ${typeof numOne}`)
                break;
            default:
                numTwo += num;
                console.log(`numTwo is ${numTwo}, it is a ${typeof numTwo}`);
        }
        display.textContent += num;
        
    })
})

let opButtons = document.querySelectorAll(".operators button");
let followUpPress = false;
opButtons.forEach(function(button){
    button.addEventListener("click", function(e){

        // make a variable called tempOperator that remembers previous operator value
        // at first when followUpPress isnt on it will run to the bottom
        // so every switch case will store the valu eto previousOperator
        let tempOperator = button.textContent;
        if(followUpPress === true){
            if (tempOperator === "="){
                // tempOperator gets reset every buttonpress
                // a pontential solution would be to place it outside but theres already so much global variables :sob:
                // just set operator to equal brah
                numOne = operate(numOne, operator, numTwo);
                console.log(numOne, "equal detected");
                let result = numOne;
                operator = "="
                numOne = 0;
                numTwo = 0;
                followUpPress = false;
                return display.textContent = result;
            } else{
            numOne = operate(numOne, operator, numTwo)
            console.log(numOne);
            numTwo = 0;
            }
        }
        operator = button.textContent;
        switch(operator){
            case "X":
                operator = "*"
                break;
            case "÷":
                operator = "/"
                break;
            case "=":
                display.textContent = numOne;
                followUpPress = false;
            default:
        }
        tempOperator = operator;
        console.log(`operator is ${operator}, it is a ${typeof operator}`);
        display.textContent = undefined
        followUpPress = true
        
    })
})




function operate(numOne, operator, numTwo){
    let intNumOne = parseInt(numOne);
    let intNumTwo = parseInt(numTwo);
    switch(operator){
        case "+" :
            return add(intNumOne, intNumTwo);
            break;
        case "-" :
            return subtract(intNumOne, intNumTwo);
            break;
        case "*" :
            return multiply(intNumOne, intNumTwo);
            break;
        case "/":
            return divide(intNumOne, intNumTwo);
            break;
    }
}
