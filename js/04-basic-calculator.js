/*eslint-env browser*/

var firstNumber = window.prompt("Please enter a number.");

var secondNumber = window.prompt("Please enter another number.");

var yourOperation = window.prompt("Enter the name of the operation you would like to perform - add, subtract, multiply, or divide.");

function calculate(numone, numtwo, operate) {
    "use strict";
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        window.alert("Please enter two valid numbers.");
    }
    switch (yourOperation) {
    case "add": 
        window.alert((parseFloat(firstNumber)) + (parseFloat(secondNumber)));
        break;
    case "subtract": 
        window.alert((parseFloat(firstNumber)) - (parseFloat(secondNumber)));
        break;
    case "multiply": 
        window.alert((parseFloat(firstNumber)) * (parseFloat(secondNumber)));
        break;
    case "divide": 
        window.alert((parseFloat(firstNumber)) - (parseFloat(secondNumber)));
        break;
    default : alert("That is not a valid operation.  Please start over and try again.");
    }
    
}

calculate(firstNumber, secondNumber, yourOperation);
