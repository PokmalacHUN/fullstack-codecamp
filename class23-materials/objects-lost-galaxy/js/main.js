//Create a dog object that has four properties and three methods

function Dog(color, size, breed, legs) {
    this.color=color;
    this.size=size;
    this.breed=breed;
    this.legs=legs;
    this.bark = function() {
        alert("wao");
    }
    this.walk = function() {
        alert("walking");
    }
    this.run = function() {
        alert("runnin");
    }
}

