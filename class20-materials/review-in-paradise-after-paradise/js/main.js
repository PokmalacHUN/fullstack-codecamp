/* Create a function that takes in an array. 
If the first number, is less than the last number, alert "Hi". 
If the first number is greater than the last number, alert "Bye". 
If they are equal, alert "We close in an hour".*/


function paradise(arr) {
    firstNumber = arr[0];
    lastNumber = arr[arr.length - 1];

    if(firstNumber < lastNumber) {
        alert("Hi")
    }

    if(firstNumber > lastNumber) {
        alert("Bye")
    }

    if(firstNumber == lastNumber) {
        alert("We close in an hour")
    }

}
