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

let display = document.querySelector(".leftSide .numDisplay p");
let buttons = document.querySelectorAll(".leftSide .numbers button");


buttons.forEach(function(button){
    button.addEventListener("click", function(){
        // make a check to reset display
        if(operator === "="){
            operator = undefined;
            display.textContent = undefined;
        }

        let num = button.textContent
        switch(num){
            case "CLR" :
                display.textContent = undefined;
                followUpPress = false;
                operator = undefined;
                numOne = 0;
                numTwo = 0;
                return;
            case "DEL" :
                // numOne is a string
                // cutnumOne
                // then set numOne to display hehehehe
                let cutNum = display.textContent.slice(0, length - 1);
                display.textContent = cutNum;
                switch(operator){
                    case undefined:
                        numOne = 0 + cutNum
                        break;
                    default:
                        numTwo = 0 + cutNum;
                        break;
                }
                return;

        }
            switch (operator){
                case undefined:
                    numOne += num;
                    display.textContent = parseFloat(numOne);
                    break;
                default:
                    numTwo += num;
                    display.textContent = parseFloat(numTwo);
            }
        
        
    })
})

let opButtons = document.querySelectorAll(".operators button");
let followUpPress = false;
opButtons.forEach(function(button){
    button.addEventListener("click", function(e){
        let tempOperator = button.textContent;
        // this should make "." never be registered as an operator
        if(tempOperator === "."){
            let currentNum = numTwo === 0 ? numOne : numTwo;
            let currentArr = currentNum.split("")
            currentArr.includes(".") === true ? currentArr : currentArr.push(".");
            if(numTwo === 0){
                numOne = currentArr.join("");
                operator = undefined;
            } else {
                numTwo = currentArr.join("");
            }
            return display.textContent = parseFloat(currentArr.join(""));
        }

        if(followUpPress === true && numTwo !== 0){
            if (tempOperator === "="){
                numOne = operate(numOne, operator, numTwo);
                let result = numOne;
                operator = "="
                numOne = 0;
                numTwo = 0;
                followUpPress = false;
                return display.textContent = result;
            } else {
                if(numOne === "AGEMASEN!!!!!"){
                operator = "="
                numOne = 0;
                numTwo = 0;
                followUpPress = false;
                return display.textContent = "AGEMASEN!!!!!";
                }

                numOne = operate(numOne, operator, numTwo);
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
                return;
        }

        tempOperator = operator;
        display.textContent = followUpPress === true ? numOne : undefined;
        followUpPress = true;
    })
})




function operate(numOne, operator, numTwo){
    let intNumOne = parseFloat(numOne);
    let intNumTwo = parseFloat(numTwo);
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
            if (numTwo == 0){
                return "AGEMASEN!!!!!"
            }
            return divide(intNumOne, intNumTwo);
            break;
    }
}

// error only happens when you press functions other than = after dividing by zero