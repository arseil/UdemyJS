'use strict';

const arr = [10, 20, 13, 6, 8];

console.log(arr.sort(compareNum));
function compareNum(a, b) {
    return a - b;
}

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`)
});
// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value)
// }

// arr[99] = 0;

// console.log(arr.length);

const str = prompt('', '');
const products =  str.split(', ');
products.sort();
console.log(products.join('; '));