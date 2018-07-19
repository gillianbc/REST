//When a module is imported from multiple contexts, they are all referring to the same object
//- they don't have their own copy.  If you want individual objects, you can use an object factory
//i.e. the modules will use a function that creates you an object

let someFilms = require('./films');

let myFilm = someFilms();
let yourFilm = someFilms();

myFilm.favouriteFilm = "Fried Green Tomatoes";
yourFilm.favouriteFilm = "Star Wars";
myFilm.printOut();
yourFilm.printOut();