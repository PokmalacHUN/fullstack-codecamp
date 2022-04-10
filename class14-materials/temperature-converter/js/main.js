//Write your pseduo code first! 

/*
1. Get the value from input
2. Calc the fahreheit value and put it to the don (h2)
*/

document.querySelector("#convert").addEventListener("click", convert)

function convert() {
    const celsius = document.querySelector("input").value
    let fahrenheit = celsius * 9/5 + 32;
    document.querySelector("#fahrenheit").innerText = fahrenheit;
}


