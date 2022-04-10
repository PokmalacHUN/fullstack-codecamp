//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function MakeFighter(name, height, build, haircolor) {
    this.name = name;
    this.height = height;
    this.build = build;
    this.haircolor = haircolor;
    this.punch = function() {
        alert("punch");
    }
    this.kick = function() {
        alert("kick");
    }
    this.jump = function() {
        alert("jump");
    }
}
