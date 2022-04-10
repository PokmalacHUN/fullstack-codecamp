//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
function numArrays(nums) {
    alert(nums.reduce((acc, c) => acc + +c, 0));
}
numArrays([2,3,4,5,6]);


//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function numArrays2(nums) {
    console.log(nums.map(num => num**2));
}
numArrays2([2,3,4,5,6]);


//Create a function that takes string
//Print the reverse of that string to the console
function reverseStr(str) {
    return (str.split("").reverse().join(""));
}



//Create a function that takes in a string
//Alert if the string is a palindrome or not
function isPalindrome(str) {
    let revStr = reverseStr(str);
    if(str === revStr) {
        alert(`str = ${str}, reverse = ${revStr}, it is a plaindrome!`);
    }
    else {
        alert(`str = ${str}, reverse = ${revStr}, it is not a plaindrome!`);
    }
}
isPalindrome("elle");

// const palindromeCheck = str => alert(str === str.split("").reverse().join(""))
//palindromeCheck("racecar");