'use strict';

// let user = {name: 'Ivan'};

// const arr = [user];
// user = null;
// console.log(user);
// console.log(arr[0]);

// let map = new Map();
// map.set(user, 'date');
// user = null;
// console.log(map.keys());

// let map = new WeakMap();
// map.set(user, 'date');
// user = null;
// console.log(map.has(user));

let cache = new WeakMap();

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now());
    }

    return cache.get(user);
}

let lena = {name: 'Elena'};
let alex = {name: 'Alex'};

cacheUser(lena);
cacheUser(alex);

lena = null;

console.log(cache.has(lena));
console.log(cache.has(alex));

// WeakSet
// add, has, delete

let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'World', from: 'Alex'},
    {text: '....', from: 'M'}
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
// readMessages.add(messages[1]);

readMessages.add(messages[0]); // не добавит т.к. set хранит уникальные значения
messages.shift();
console.log(readMessages.has(messages[0]));