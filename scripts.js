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
        if(result !== undefined){
            display.textContent = undefined;
        }
        display.textContent += num;
        
    })
})
// change value instead of adding it up
// this is how i think the algo works
// user clicks numberOne
// user clicks operator
// user clicks numberTwo
// user clicks operator again
// numOne gets changed to result of operate function
// when "=" is pressed the results will be displayed
// and followUpPress will be set to false
// assume theres no bugs for now
let opButtons = document.querySelectorAll(".operators button");
let followUpPress = false;
opButtons.forEach(function(button){
    button.addEventListener("click", function(e){
        // make a function that checks if user pressed =
        // if they did, make it print the results, set followUpPress to false, and return the function
        // i should just make it so pressing equal resets everything smh
        let tempOperator = button.textContent;
        if(followUpPress === true){
            if (tempOperator === "="){
                numOne = operate(numOne, operator, numTwo);
                console.log(numOne, "equal detected");
                let result = numOne;
                operator = undefined;
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
        operator = button.textContent
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
