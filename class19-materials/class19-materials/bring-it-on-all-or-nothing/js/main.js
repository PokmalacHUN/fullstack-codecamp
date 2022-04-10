// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let booly = true;
alert(booly);

// Declare a variable, reassign it to your favorite color, and console log the value
let color = "blue";
color = "black";
console.log(color);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.

function fourNumbers(a, b, c, d) {
    return (a + b + c) / d;
}
fourNumbers(50, 40, 20, 10);

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function power(a, b) {
    console.log(Math.pow(a, b));
}
power(10, 2);

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function hello(bool, str) {
    if(bool === true) {
        alert(str);
    }
    else {
        console.log(str);
    }
}
const hello = (bool, str) => b ? alert(str) : console.log(str);

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" 
//instead of that number, if the number is divisible by 5 log "buzz" instead of the number, 
//and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function cs (num) {
    for(i = 0; i < num; i++) {
        if(i % 15 == 0 || (i % 3 == 0 && i % 5 == 0)) {
            console.log("fizzbuzz");
        }
        else if (i % 5 == 0) {
            console.log("buzz");
        }
        else if (i % 3 == 0) {
            console.log("fizz");
        }
        else {
            console.log(i);
        }
    }
}


