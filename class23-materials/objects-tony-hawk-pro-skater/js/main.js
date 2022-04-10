//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function TonyHawk(taunt, build, name, specialMove) {
    this.taunt=taunt;
    this.build=build;
    this.name=name;
    this.specialMove=specialMove;
    this.punch = function() {
        alert("punch");
    }
    this.kick = function() {
        alert("kick");
    }
    this.fatality = function() {
        alert("fatality");
    }
}
