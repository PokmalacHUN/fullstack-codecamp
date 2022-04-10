// *Variables*
// Declare a variable and assign it to your fav drink as a string. 
//Make sure there is no whitespace on either side of the string, and print the value to the console

let drink = "cola";
console.log(drink.trim()); // trims whitespaces from the bgining and the end

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let multipleWords = "multiple word in one string";

function apple(multipleWords) {
    console.log(multipleWords.search("apple")); // get you nine if its -1 its not found
    console.log()
}

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function random() {
    let rng = Math.random();
    if(rng < 0.33) {
        return "rock";
    }
    else if(rng < 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot 
//using the above function

function rps(input) {
    let bot = random();

    if((input === "rock" && bot === "scissors") ||
    (input === "paper" && bot === "rock") ||
    (input === "scissors" && bot === "paper")) {
        console.log("you win");
    }
    else if(input === bot){
        console.log("you tied");
    }
    else {
        console.log("you lose");
    }

    /*
    if(input == "rock" && bot == "scissors") {
        console.log("You Won!");
    }
    else if (input == "rock" && bot == "paper"){
        console.log("You Lost!");
    }
    
    if(input == "paper" && bot == "rock") {
        console.log("You Won!");
    }
    else if (input == "paper" && bot == "scissors"){
        console.log("You Lost!");
    }

    if(input == "scissors" && bot == "paper") {
        console.log("You Won!");
    }
    else if (input == "scissors" && bot == "rock"){
        console.log("You Lost!");
    }
    */
}



//*Loops*
//Create a function that takes an array of choices. 
//Play the game x times where x is the number of choices in the array. 
//Print the results of each game to the console.

function game(choices) {
    for(let i = 0; i < choices.length; i++) {
        rps();
    }

    //choices.forEach(choice => rps(choice));
}
game(["rock", "paper", "scissors"]);

