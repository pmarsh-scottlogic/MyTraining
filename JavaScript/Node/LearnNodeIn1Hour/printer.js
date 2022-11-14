const EventEmitter = require('events');

// instead of making emitters every time, we usually extend EventsEmitter to build upon its functionality.
class Printer extends EventEmitter {
    print(text) {
        console.log("printer prints: " + text);
        this.emit('printEvent');
    }
}

module.exports = Printer;
// must be written like this, so that the exports object becomes a class constructor