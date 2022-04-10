// *Variables*
// Create a variable and console log the value
let val = 2;
console.log(val);

// Create a variable, add 10 to it, and alert the value
val + 10;
alert(val);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract(a, b, c, d) {
    alert(a - b - c - d);
}


// Create a function that divides one number by another and returns the remainder
function modulo(num1, num2) {
    return num1 % num2;
}


// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function sum50(number1, number2) {
    let sum = number1 + number2;
    if(sum === 50) {
        alert("Jumanji");
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiply(numbr1, numbr2, numbr3) {
    let result = numbr1 * numbr2 * numbr3;
    if(result % 3 === 0) {
        alert("ZEBRA");
    }
}


