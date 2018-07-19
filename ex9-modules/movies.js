function printAvatar() {
    console.log("Avatar");
}

function printShining() {
    console.log("The Shining");
}

//Both functions public
module.exports.blue = printAvatar;
module.exports.red = printShining;