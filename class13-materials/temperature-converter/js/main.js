//Write your pseduo code first! 

//1. Get the value
//convert it to Fahrenheight 1Celsius=33.8F

document.querySelector("#convert").addEventListener("click", convert)

function convert() {
    const celsius = document.querySelector("#input").value
    let fahrenheit = celsius * 9/5 + 32;
    document.querySelector("#fahrenheit").innerText = fahrenheit;
}

