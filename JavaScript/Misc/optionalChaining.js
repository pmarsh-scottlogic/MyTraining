// https://javascript.info/optional-chaining
// we define an array of objects

let user1 = {
    name: {
        firstName:  'Peter',
        middleName: 'Kaku',
        lastNAme: 'Marsh',
    },
}

let user2 = {
    name: {
        firstName:  'John',
        middleName: 'Humphrey',
        lastNAme: 'Williams',
    },
}

let user3 = {
    address: '1 Cadnam Lane, Lancashire',
}

let users = [user1, user2, user3];

// Now, say we want to loop through and access their names, but not all of them have names, let alone first names!

/*
The following throws an error, because for user3, the intermediate property of name doesn't exist.

for (let user of users) {
    console.log(user.name.firstName);
}
console.log('\n');
*/

// Enter optional chaining!
// The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.
// The ?. checks the left part for null/undefined and allows the evaluation to proceed if it’s not so.
for (let user of users) {
    console.log(user?.name?.firstName);
}
console.log('\n');


// ====================================================================================================================================================

// we can equally use ?. for accessing properties with square bracket syntax
const key = 'firstName';
console.log(user3.name?.[key]);
console.log("\n");

// ====================================================================================================================================================

// Optional chaining can also be used for object methods
let userAdmin = {
    admin() {
      console.log("I am admin");
    }
  };
  
  let userGuest = {};
  
  userAdmin.admin?.(); // I am admin
  
  userGuest.admin?.(); // nothing happens (no such method)

// ====================================================================================================================================================

// Summary:
/*
obj?.prop – returns obj.prop if obj exists, otherwise undefined.
obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.
*/

// Warmings:
// Do not use ?. when logically, the intermediate value should exist!
// Do not use ?. if it might be that the highest level variable does not exist.