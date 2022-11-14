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

// =============================================================================================================================================================================

// require() allows us to access a module. Good practise to use consts for loading modules.
const myModule = require('./myModule');
console.log(myModule.print("hello"));
console.log(myModule.n);
console.log("\n");

// =============================================================================================================================================================================

// path is an in-built module for working with filepaths. It saves us from having to parse any directory strings.
const path = require('path');

// filename is one of the parameters from the Module Wrapper Function, meaning it has information about the current module.
var pathObject = path.parse(__filename);

console.log(pathObject);
console.log("\n");

// =============================================================================================================================================================================

// the os module contains useful information about the operating system. Note that it is a Node specific thing; it is not available for native JavaScript!
const os = require('os');

console.log("total memory: " + os.totalmem);
console.log("free memory: " + os.freemem);
console.log("\n");

// =============================================================================================================================================================================

// fs is short for FileSystem. It allows us to manipulate local files. Functionality in this module is asynchronous by default, but has a synchronous version (append 'Sync')
const fs = require('fs');

const files = fs.readdirSync('./'); // get a list of files in the same directory as the module.
console.log(files);
console.log("\n");

// now we read the files asynchronously, in true node fashion!
// hover over the readdir function to see how it behaves. In particular, we must note the arguments of the callback function.
//fs.readdir();

// so, we call readdir, pass in the directory (first argument) and the callback function (second argument).
// change dir to invoke and error and see how the result changes.
const dir = './'
fs.readdir(dir, function(err, returnedFiles) {
   if (err) console.log("Error: " + err);
   else console.log("returned files: " + returnedFiles);
});

// ARROW NOTATION for callbacks, instead of writing function then having the arguments, we instead put an arrow between the arguments and the body of the function. Syntactical sugar
fs.readdir(dir, (err, returnedFiles) => {
    if (err) console.log("Error: " + err);
    else console.log("returned files: " + returnedFiles);
 });