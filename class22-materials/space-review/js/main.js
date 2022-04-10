//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let nums = [42,19,77,33,57]
function add(nums) {
    let sum = nums.reduce((acc, c) => acc + +c, 0); 
    // acc is the sum of the numbers, 
    //C is the actual number, 
    //0 is from where acc starts, 
    //+ in front of c converts string to number
}
add(nums);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function squared(arr) {
    //let squaredArray = nums.map(n => n * n);
    let squaredArray = [];
    for(let i = 0; i < arr.length; i++){
        squaredArray[i] = Math.pow(arr[i], 2);
    }
    console.log(squaredArray);
}
squared([2,3,4,5]);

//Create a function that takes string
//Print the reverse of that string to the console

function isPalindrome(str) {
    let reversedStr = (str.split("").reverse().join(""));
    alert(str + "  -  " + reversedStr);
    if(str === reversedStr) {
        return true;
    }
    else {
        return false;
    }
     
}

//Create a function that takes in a string
//Alert if the string is a palindrome or not

//const isPalindrome = = s => s === s.split("").reverse().join("") ? alert("Yes") : alert("No");

function palindrome(str) {
    if(isPalindrome(str)) {
        alert("It is a palindrome!");
    }
    else {
        alert("It is not a palindrome!");
    }
}
palindrome("hello");
