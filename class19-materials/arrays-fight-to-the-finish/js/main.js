//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ["a", "b", "c"];
for (i = 0; i < movies.length; i++) {
    document.querySelector("h2").innerText += movies[i];
}

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let nums = [10, 20, 30];
for(i = 0; nums.length; i++) {
    nums[i] = nums[i] + 3;
}

nums.forEach((item, i) => {
    nums[i] = item + 3;
});

//Find the average of all the numbers from question three

let sum = 0;
nums.forEach((value, index) => {
    sum += nums[index];
});

//or
//nums.forEach((num) => sum += num);
let average = sum / nums.length;
