//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ["a", "b", "c"];
tvShows.forEach(element => {
    console.log(element);
});


//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let nums = [15, 20, 35, 40];
const evens = nums.forEach(element => {
    if(element % 2 == 0) {
        evens.push(element);
    }
})

// let onlyEvens 7 arr => arr.filter( n => % 2 === 0);
// console.log(onlyEvens(nums));


//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function lowHigh(numArray) {
    let sorted = numArray.sort((a, b) => a - b);
    alert(sorted[1] + sorted[sorted.length - 2]);
}

