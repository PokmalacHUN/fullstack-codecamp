// *Variables*
// Create a variable and console log the value

let hello = 5;
console.log(hello);

// Create a variable, add 10 to it, and alert the value

let addTen = 10;
alert(add + 10);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function fourNumbers(a, b, c, d) {
    alert(a - b - c - d);
}

// Create a function that divides one number by another and returns the remainder

function mod(a, b) {
    return a % b;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function jumanji(a, b) {
    if(a + b > 50) {
        alert("Jumanji");
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function zebra(a, b, c) {
    if((a * b * c) % 3 == 0) {
        alert("Zebra!");
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function loopy(word, number) {
    for(i = 0; i < number; i++) {
        console.log(word);
    }
}
