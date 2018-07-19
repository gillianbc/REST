//anonymous function that returns an object with 2 properties
module.exports = function(){
    return {
        favouriteFilm: "",
        favouritePet: "",
        printOut: function(){
            console.log("Film: " + this.favouriteFilm + " Pet: " + this.favouritePet);
        }
    }
};