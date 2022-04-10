//Create a stopwatch object that has four properties and three methods
let stopwatch = {};

stopwatch.currentime = 12;
stopwatch.weight = 10;
stopwatch.seconds = 45;
stopwatch.color = "Black";

stopwatch.gettime = function(time) {
    console.log(`the current time is ${time}.`);
}

stopwatch.getweight = function(weight) {
    console.log(`the weight is ${weight}.`);
}

stopwatch.getseconds = function(seconds) {
    console.log(`the current seconds is ${seconds}.`);
}

stopwatch.getcolor = function(color) {
    console.log(`the color is ${color}.`);
}