//Create a mouse object that has four properties and three methods

let mouse = {};

mouse.brand = "logitech";
mouse.color = "black";
mouse.model = "MX Ergo";
mouse.wireless = true;

mouse.leftclick = function() {
    console.log("leftclick");
}

mouse.rightclick = function() {
    console.log("rightclick");
}

mouse.scroll = function() {
    console.log("scroll");
}


