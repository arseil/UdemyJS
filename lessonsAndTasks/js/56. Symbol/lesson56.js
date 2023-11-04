'use strict';


// const obj = {
//     name: 'Test',
//     [Symbol('id')]: 1,
//     getId: function() {
//         return this[id];
//     }
// }

// // let id = Symbol('id');

// // obj[id] = 1;

// // console.log(obj);
// // console.log(obj.getId());
// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

// // for (let value in obj) console.log(value);

const myAwesomeDB = {
    movies: [],
    actors: [],
    [Symbol.for('id')]: 123
}

// Сторонний код библиотеки

myAwesomeDB.id = '1213213';

console.log(myAwesomeDB[Symbol.for('id')]);
console.log(myAwesomeDB);