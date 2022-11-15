// Infinite data streams
function * fibbonacci() {
    
    let prev = 0;
    let current = 1;

    while(true) {
        let temp = current;
        current += prev;
        prev = temp;
        yield current;
    }
}

const fibObject = fibbonacci();
for (let i = 0; i < 50; i++) {
    console.log(fibObject.next().value);
}

// This approach (lazy evaluation) is good because we can defer computation until we need it!