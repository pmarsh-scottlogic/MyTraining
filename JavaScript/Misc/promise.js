// Promises link producing code to consuming code. The producing code executes (usually taking a while), and when the result is ready, the relevant functions that require the result are called.
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Promises have three stats: pending, fulfilled or rejected


// Promise is a standard JavaScript class which can be instantiated as usual:
// let promise = new Promise(...);

// The argument of the promise constructor is the executor function
let promise = new Promise(
    function(resolve, reject) {/* executor */}     // the executor function is the producing code that takes time. It runs automatically as part of the instantiation.
)
// resolve and reject are callback functions provided by JavaScript, so we do not change these. When the executor is finished, is must call one of resolve or reject.
// Calling resolve or reject is final and changes the state of the promise
// It passes in the important value that it has produced to resove(value), or an error object if it failed to reject(error).


// ==============================================================================================================================================


// Now we can define the consumer methods, which use the result of the promise!
// the syntax is:

promise.then(
    function(result) { /* handle a successful result */ },
    function(error) { /* handle an error */ }
  );


  // this method adds a consumer method to the promise. We can do this seperately as many times as we like to define multiple processes that use the raw outcome of the promise.


// ==============================================================================================================================================

// CLEANUP
// We can also use finally
promise.finally(function() { /* cleanup */})
// The function we pass into the finally method is called regardless of whether the promise was a success or failure.
// finally may be called more than once at various points in the chain, and it "passes through" the result or error to the next handler.
// a finally handler shouldn't return anything. If it does, it is silently ignored.


// ==============================================================================================================================================

// Altogether, it works intuatively:

new Promise(
    function (resolve, reject) {
        // query API
        let APISuccess = true;
        let APIResult = 100;

        if (APISuccess) {resolve(APIResult);}
        else reject(new Error("Api encountered an error!"));
    }
).then(
    function(result) {

    },
    function(error) {

    }
)