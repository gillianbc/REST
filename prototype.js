function Player() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer) {
        this.life -= 1;
        targetPlayer.life += 1;
    };
    this.printout = function () {
        console.log("Name " + this.name + " life " + this.life);
    }
}

let gill = new Player();
gill.name = "Gillian";

let harry = new Player();
harry.name = "Harry";

gill.giveLife(harry);

gill.printout();
harry.printout();

//This adds to the existing class Player
//It is not hoisted so you cannot use it above here
Player.prototype.hit = function hitPlayer(targetPlayer){
  targetPlayer.life -= 3;
};
gill.hit(harry);

gill.printout();
harry.printout();
