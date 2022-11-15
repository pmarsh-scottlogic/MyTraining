const performance = require('perf_hooks').performance;

function fib(n) {
    if (n < 2) return 1;
    else return fib(n - 1) + fib(n - 2);
}

let n = 40;

// perform factorial and time it;
console.log("No cache:");

let startTime = performance.now();
let answer = fib(n);
let endTime = performance.now();

console.log(n.toString() + "nth fib = " + answer.toString() + " | time: " + (endTime - startTime).toString());

// =========================================================================================================================================================

let cache = [1, 1]
function fibCache(n) {
    if (cache[n]) return cache[n];
    else {
        let val = fibCache(n - 1) + fibCache(n - 2);
        cache[n] = val;
        return val;
    }
}

// perform factorial and time it;
console.log("Cache:");

startTime = performance.now();
answer = fibCache(n);
endTime = performance.now();

console.log(n.toString() + "nth fib = " + answer.toString() + " | time: " + (endTime - startTime).toString());