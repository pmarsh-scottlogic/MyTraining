// https://johnresig.com/apps/learn/#18

// Functions, when interpreted become Function objects! Thus they can have properties, methods and be stored in variables...
function add(a, b) {
    return a + b;
}

// we can assign data to functions
add.meta = "this function adds stuff!"

// add method to a function???
add.five = (a) => {
    return a + 5
}

console.log(add.meta);
console.log("9 + 8 = " + add(9, 8).toString());
console.log("20 add 5 = " + add.five(20));