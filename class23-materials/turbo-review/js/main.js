// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

function isQuestion() {
    let str = "howdy?";
    //str.endsWith("?");
    if(str.includes("?")) {
        console.log("Is is a question!");
    }
    else {
        console.log("It is not question!");
    }
}
isQuestion();


//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

function softwareEngineer() {
    let str = "Hello I am a jr. dev";
    if(str.includes("jr. dev")) {
        str = str.replace("jr. dev", "software engineer");
    }
    console.log(str);
}
softwareEngineer();

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors() {
    let rng = Math.random();
    if(rng <= 0.33) {
        return "rock";
    }
    else if(rng <= 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) 
//and determines if they won a game of rock paper scissors against a bot using the above function

function win(choice) {
    botChoice = rockPaperScissors();

    if(choice === "rock" && botChoice === "scissors" ||
    choice === "paper" && botChoice === "rock" ||
    choice === "scissors" && botChoice === "paper") {
        console.log(`My choice was ${choice} bot choice was ${botChoice} -> I won!`);
    }
    else if(choice === botChoice) {
        console.log(`My choice was ${choice} bot choice was ${botChoice} -> Draw!`);
    }
    else {
        console.log(`My choice was ${choice} bot choice was ${botChoice} -> I lost!`);
    }
}



//*Loops*
//Create a function that takes an array of choices. 
//Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playGame(choiceArr) {
    choiceArr.forEach((choice) => win(choice));
}
playGame(["rock", "paper", "scissors"]);

