// Generators are functions which can stop in the middle, yield a value, then continue from where it left off on its next calling.

function* greetingGenerator() {
    // this is the first value returned
    yield "hello";

    // this is the second value returned
    yield "there!";

    return; // return sets the 'done' property to true, and no values can be yielded after this
}

const greetingObject = greetingGenerator(); // a call to the generator dunction returns the object which iterates though the generator

// each call to greetingObject.next() progresses the function through to the next yield statement, and returns an object of shape {value: Any, done: true|false}
let state = greetingObject.next();
console.log(state.done + " | " + state.value);

state = greetingObject.next();
console.log(state.done + " | " + state.value);

state = greetingObject.next();
console.log(state.done + " | " + state.value);



function* secondGreetingGenerator() {
    yield "How's";
    yield "it";
    yield "going?";
    return;
}

for (const val of secondGreetingGenerator()) { // easier loop syntax
    console.log(val);
}