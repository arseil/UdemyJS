'use strict';

/* const arr = [1, 1, 2, 2, 4, 5, 6, 5];

const set = new Set(arr);

console.log(set); */

const arr = ['Alex', 'Anna', 'Oleg', 'Alex'];

function unique(arr) {
    return Array.from(new Set(arr));
};

console.log(unique(arr));


// const set = new Set(arr);

// set.add('Ivan');
// set.add('Oleg');

// console.log(set);

// set.delete(value);
// set.has(value);
// set.clear();
// set.size;

// for (let value of set) console.log(value);

// set.forEach((value, valueAgain, set) => {
//     console.log(value, valueAgain);
// });
// set.forEach(value => {
//     console.log(value);
// });

// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries());
