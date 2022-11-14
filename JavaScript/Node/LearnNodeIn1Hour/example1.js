// standard syntax for printing
console.log("Hello World!");
console.log("\n");

// this will throw an error because window (which exists in JavaScript) doesn't exist in Node.
//window.console.log("Hello from window");

// In node, main functionality is contained in this object called global. lines like 'console.log()' will implicitly call it from the global object.
global.console.log("Hello from the global object");
console.log("\n");

// Here we create (what we think is) a global variable. However it is not part of the global object. Instead it only exists within the scope of this script.
var word = "hello";
console.log(global.word);
console.log("\n");

// The module object contains metadata about the module (or runtime instantiation of the script)
console.log(module);
console.log("\n");

// Allows us to access a module. Good practise to use consts for loading modules.
const myModule = require('./myModule');

console.log(myModule.print("hello"));
console.log(myModule.n);
console.log("\n");