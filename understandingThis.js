//this refers to the calling scope
const Gillian = {
    printFirstName: function(){
        console.log("I am Gillian - age " + this.age);
        console.log("I was called from Gillian? " + (this === Gillian));
    },
    age: 53
};

Gillian.printFirstName();
doSomethingElse();

function doSomethingElse(){
    console.log("doSomethingElse: Gillian? " + (this === Gillian));
    console.log("doSomethingElse: global? " + (this === global));
}
