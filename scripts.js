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

// now lets make delete and clear work :D
// we'll start by giving them both a special class so they wont be inside buttons variable

buttons.forEach(function(button){
    button.addEventListener("click", function(){
        // make a check to reset display
        if(operator === "="){
            console.log("equal detected on buttonpress")
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
                    console.log(`numOne is ${numOne}, it is a ${typeof numOne}`)
                    break;
                default:
                    numTwo += num;
                    display.textContent = parseFloat(numTwo);
                    console.log(`numTwo is ${numTwo}, it is a ${typeof numTwo}`);
            }
        
        
    })
})

let opButtons = document.querySelectorAll(".operators button");
let followUpPress = false;
opButtons.forEach(function(button){
    button.addEventListener("click", function(e){
        let tempOperator = button.textContent;
        console.log("follow up press == ", followUpPress)
        if(followUpPress === true && numTwo !== 0){
            if (tempOperator === "="){
                numOne = operate(numOne, operator, numTwo);
                console.log(numOne, "equal detected");
                let result = numOne;
                operator = "="
                numOne = 0;
                numTwo = 0;
                followUpPress = false;
                return display.textContent = result;
            } else{
                if(numOne === "AGEMASEN!!!!!"){
                console.log("previous value divided by zero, restting..")
                operator = "="
                numOne = 0;
                numTwo = 0;
                followUpPress = false;
                return display.textContent = "AGEMASEN!!!!!";
                }
            numOne = operate(numOne, operator, numTwo);
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
                return;
            case ".":
                // make it return a float value that only accepts one decimal
                // click button
                // latest number will be added with decimal
                // other numbers add
                // press decimal again and it dont work
                // will work again when decimal is deleted manually
                // turn current number into object

                // check if decimal exists first, we'll do it by using an array (fuckkk)
                // its printing numTwo because false check
                let currentNum = numTwo === 0 ? numOne : numTwo;
                // turn currentnum into an array
                let currentArr = currentNum.split("")
                console.log(currentArr);
                // find if . exists in array, just return it if yes, push if no
                currentArr.includes(".") === true ? currentArr : currentArr.push(".");
                console.log(currentArr);
                // turn it back into string
                numTwo === 0 ? numOne = currentArr.join("") : numTwo = currentArr.join("");
                // set operator back to undefined so it will continue filling numOne
                operator = undefined;
                return display.textContent = parseFloat(currentArr.join(""));
                


            default:
        }
        tempOperator = operator;
        console.log(`operator is ${operator}, it is a ${typeof operator}`);
        display.textContent = followUpPress === true ? numOne : undefined;
        followUpPress = true;
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
            if (numTwo == 0){
                return "AGEMASEN!!!!!"
            }
            return divide(intNumOne, intNumTwo);
            break;
    }
}

// error only happens when you press functions other than = after dividing by zero