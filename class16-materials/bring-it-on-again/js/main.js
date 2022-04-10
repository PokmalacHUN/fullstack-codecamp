// *Variables*
// Declare a variable, assign it a value, and alert the value

let lofasz = 5;
alert(lofasz);

// Create a variable, divide it by 10, and console log the value

let hello = 10;
console.log(hello / 10);

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product

function threeNumbersAlert(a, b, c) {
    alert(a * b* c);
}

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result

function four(a, b, c, d) {
    let aPlusB = a + b; 
    let cMinusD = c - d;
    console.log(aPlusB, cMinusD);
}

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. 
//If the value is greater then 25, console log "WE HAVE A WINNNA"

function condiThree(a, b, c) {
    let hundred = 100;
    hundred + a;
    hundred - b;
    hundred / c;
    if(hundred == 25) {
        console.log("WE HAVE A WINNA!");
    }
}

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". 
//Handle capitilization and if the user does not enter a day of the week alert "Try again!"

function week (day) {

    if(day.toLowerCase() == "saturday" || day.toLowerCase() == "sunday") {
        alert("weekend!")
    }
    
    if(day.toLowerCase() == "monday" || 
    day.toLowerCase() == "tuesday" || 
    day.toLowerCase() == "wednesday" || 
    day.toLowerCase() == "thursday" || 
    day.toLowerCase() == "friday") {
        alert("weekday!")
    }

    if(day.toLowerCase() == "") {
        alert("Try again");
    }
}


//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3

function loopy(num) {
    for(i = 1; i <= num; i + 3) {
        console.log(i);
    }
}


