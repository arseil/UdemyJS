'use strict';

let str = 'some';
let strObj = new String(str);

console.log (typeof strObj)
console.log (typeof str)

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const john = Object.create(soldier);

// const john = {
//     health: 100
// };

// john.__proto__ = soldier; // уже не используется

// Object.setPrototypeOf(john, soldier);

console.log(john.armor);
john.sayHello();