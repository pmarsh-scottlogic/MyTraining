// Events are the heart of node! They are what drive the asynchronous functionality

// EventEmitter the the object returned by require(events)
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener. It listens for the event of a certain name (first argument) and calls a function when it does (second argument)
emitter.on('simpleEventSignal', function(){
    console.log("Listener called");
});

// raise an event i.e. a signal that an event has occurred.
emitter.emit('simpleEventSignal');

// =============================================================================================================================================================================

// Now we return information as part of the event
emitter.on('fancyEventSignal', (arg) => { // e or eveentArg are also common names for recieving the event argument
    console.log("Listener called! id: " + arg.id + " url: " + arg.url);
});

// the event argument object is contained within the curly braces
emitter.emit('fancyEventSignal', {id: 1, url: 'http://scottlogic.com'});

// =============================================================================================================================================================================

// Extending EventsEmitter
const Printer = require('./printer');

const printer = new Printer();

printer.on('printEvent', () => {
    console.log("I have now printed!");
});

printer.print("beep beep boop");