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
        let num = button.textContent
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
// change value instead of adding it up
let opButtons = document.querySelectorAll(".operators button");
let followUpPress = false;
opButtons.forEach(function(button){
    button.addEventListener("click", function(e){
        if(followUpPress === true){
            numOne = operate(numOne, operator, numTwo)
            console.log(numOne);
            numTwo = 0;
        }
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
