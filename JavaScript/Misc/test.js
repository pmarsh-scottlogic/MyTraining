testFunc = (x) => {x--; return 2 * x;}

console.log(testFunc(12));

let rev = () => testFunc(12);

console.log(rev());

new Promise(
    function(resolve, reject) {
        setTimeout(
            function greg() {
                resolve("value");
            },
            2000);
    }
  )
    .finally(() => console.log("Promise ready")) // triggers first
    .then(result => console.log(result)); // <-- .then shows "value"