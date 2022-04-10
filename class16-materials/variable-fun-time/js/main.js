//--- Easy
//create a variable and assign it a number

let variable = 15;

//minus 10 from that number

variable-=10;

//print that number to the console

console.log(variable);

//--- Medium
//create a variable that holds a value from the input

//let a = document.querySelector('#danceDanceRevolution').value;


//add 25 to that number

//a = a + 25;

//alert that number

//alert(a);

//--- Hard
//create a variable that holds the h1

const h1Holder = document.querySelector('h1');

//document.querySelector("#danceDanceRevolution").innerText = fahrenheit;


//add an event listener to that element that console logs the sum of the two previous variables

h1Holder.addEventListener('click', sum)

function sum() {
    let a = document.querySelector('#danceDanceRevolution').value;
    console.log(variable + Number(a));
}
