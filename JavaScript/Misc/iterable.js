// https://javascript.info/async-iterators-generators
// iterables are simply objects that implement a specific pattern so that it can be iterated within a  for (let... of...) context!

// So here we define an object called range.
let range = {
    from: 1,
    to: 5,
  
    [Symbol.iterator]() { // called once, in the beginning of for..of
      return {
        current: this.from,
        last: this.to,
  
        next() { // called every iteration, to get the next value
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
  for(let value of range) {
    console.log(value); // 1 then 2, then 3, then 4, then 5
  }

// ================================================================================================================================================

// here's my own attempt

let caterpillar = {
    maxLength: 10,
    [Symbol.iterator]() {
        return {
            current: "mP",
            maxLength: this.maxLength,
            next() {
                if (this.current.length < this.maxLength) {
                    this.current = 'm' + this.current
                    return { done: false, value: this.current};
                } else {
                    return { done: true };
                }
            }
        };
    }
};

for (let c of caterpillar) {
    console.log(c);

}