// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday = "";
holiday = "CHRISTMAS";
console.log(holiday);


//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = "abcdef";
for(i = 0; i < str.length; i++) {
    if(i > str.length - 4) {
        alert(str[i]);
    }
}
alert(str.slice(-3));


// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function hundred(a, b, c, d, e) {
    let hundred = 100 ;
    hundred - a - b - c - d - e;
    alert(Math.abs(hundred));
}
hundred(10, 20, 30, 40, 50);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function lowHigh(a, b, c) {
    console.log(Math.max(a, b, c));
    console.log(Math.min(a, b, c));
}
lowHigh(10,20,30);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function random() {
    coinToss = Math.random(1, 100);

    if(coinToss < 50 ) {
        return "heads";
    }
    else {
        return "tails";
    }

    //turnary const headOrTails = _ => Math.random() < .5 ? "heads" : "tails";
    //turnary const headOrTails = () => Math.random() < .5 ? "heads" : "tails";
}

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is 
//the number passed into the function. Call the function.

function num(num) {
    for(i = 0; i < num; i++) {
        console.log(random());
    }
}

