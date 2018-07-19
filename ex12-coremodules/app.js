const fs = require('fs'); //file system module for IO
const path = require('path'); // path module
function show(){
    console.log(fs.readFileSync("list.txt").toString());
}
fs.writeFileSync("list.txt","ABC");

show();

//using the show() as the callback
fs.appendFile("list.txt","DEF",show);
//Same again but wait 5s
fs.appendFile("list.txt","DEF",setTimeout(show,5000));


const homePath = 'C:\!myfiles/Notebook/My Notebook.docx';  //yes, it caters for dodgy slashes
console.log(path.normalize(homePath));
console.log(path.dirname(homePath));
console.log(path.extname(homePath));
//Some other useful path commands
console.log(__dirname);
console.log(__filename);