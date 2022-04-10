//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 


function summer(arr) {
    let result = 1;
    arr.forEach(num => result *= num);
    alert(result);
}

summer([10, 2, 3]);



