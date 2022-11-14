var internalVariable = 1;
var externalVariable = 2;

function internalPrint(text) {
    console.log("this teext is printed internally: " + text);
}

function externalPrint(text) {
    console.log("this text was printed from " + module.id + ": " + text);
}

// this is how we allow functions and variables to be accessible from outside the module
module.exports.print = externalPrint;
// exports is simply shorthand for module.exports, however we can't change the name this way
// so the following is actually module.exports.externalVariable = externalVariable
module.exports.n = externalVariable;