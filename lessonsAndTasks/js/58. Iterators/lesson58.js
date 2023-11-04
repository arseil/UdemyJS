'use strict';

const user = {
	name: 'Alex',
	surname: 'Smith',
	birthday: '20/04/2021',
	showMyPablicData: function () {
		console.log(`${this.name} ${this.surname}`);
	}
};

// for (let key in user) {
//     console.log(user[key]);
// }

const arr = ['b', 'a', 'c'];

Array.prototype.someMethod = function () { };

console.dir(arr);

for (let key of arr) {
	console.log(key);
}

// const str = 'string';

// for (let key in str) {
//     console.log(str[key]);
// }

const salaries = {
	john: 500,
	ivan: 1000,
	ann: 5000,
	seyHello: function () {
		console.log('Hello');
	}
};

salaries[Symbol.iterator] = function () {
	return {
		current: this.john,
		last: this.ann,

		next() {
			if (this.current < this.last) {
				this.current = this.current + 500;
				return { done: false, value: this.current };
			} else {
				return { done: true };
			}
		}
	};
};

const iterator = salaries[Symbol.iterator]();

console.log(iterator.next());

// for (let key of salaries) {
//     console.log(key);
// }

