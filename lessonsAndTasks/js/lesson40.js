'use strict';

/* function createCounter() {
    let counter = 0 // 1, 2, 3
    const myFunction = function() {
        counter = counter + 1
        return counter
    }
    return myFunction
}
const increment = createCounter() 
const c1 = increment()
const c2 = increment()
const c3 = increment()
console.log('example increment', c1, c2, c3) */


/* let number = 5; debugger

function logNumber() {
    console.log(number); debugger
}

number = 6;

logNumber(); debugger

number = 8;

logNumber(); debugger */

function createCounter() {
    let counter = 0;

    const myFunction = function() { debugger
        counter = counter + 1; debugger
        return counter; debugger
    }

    return myFunction;
}
debugger
const increment = createCounter(); debugger
const c1 = increment(); debugger
const c2 = increment(); debugger
const c3 = increment(); debugger

console.log(c1, c2, c3);

{
    let msg = 'hello';
}

console.log(msg)

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        let num = 3;
    }

    console.log(num)
}