'use strict';

const birthday = Symbol('birthday');

const user = {
	name: 'Alex',
	surname: 'Smith',
	[birthday]: '20/04/2021',
	showMyPablicData: function () {
		console.log(`${this.name} ${this.surname}`);
	}
};

// Object.defineProperty(user, 'birthday', {value: prompt('Date?'), enumerable: true, configurable: true});

// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));

console.log(Object.getOwnPropertyDescriptor(user, birthday));

Object.defineProperty(user, 'showMyPablicData', { enumerable: false });

for (let key in user) console.log(key);

Object.defineProperties(user, {
	name: { writable: false },
	surname: { writable: false }
});

// console.log(Object.getOwnPropertyDescriptor(user, 'name'));

// Object.defineProperty(user, 'name', {writable: false});

// Object.defineProperty(user, 'gender', {value: 'male'});

// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

// writable
// enumerable
// configurable