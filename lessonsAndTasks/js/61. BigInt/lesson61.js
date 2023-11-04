'use strict';

// console.log(Number.MAX_SAFE_INTEGER);

// const bigint = 1231243514534652654776573672352368769879879689n;

// console.log(bigint);

// const sameBigint = BigInt(1231243514534652654776573672352368769879879689);

// console.log(sameBigint);

// console.log(typeof bigint);
// console.log(typeof sameBigint);

// console.log(5n + 1); // error
// console.log(Math.round(5n)); //error

// console.log(1n + 2n);

// +, -, *, **, % can use

// division a little harder

// console.log(5n / 2n);

// console.log(2n > 1); // true
// console.log(2n > 5); // false
// console.log(2n == 2); // true
// console.log(2n === 2); // false

let bigint = 1n;
let number = 2;

console.log(bigint + BigInt(number)); // 3n
console.log(Number(bigint) + number); // 3
console.log(+bigint + number); // error