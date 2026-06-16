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
            operate(numOne, operator, numTwo)
            console.log(numOne);
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

// i want to make operate run whenever operator is pressed for the second time
// but the result should only be displayed when you press 
// make a variable that tells if secondpress is true or false
// if true then run operate 
// after running operate change to newly pressed button
// i will also make the result value be equal to numOne


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
