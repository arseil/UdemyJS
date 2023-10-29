'use strict';



// 1) Обычная функция: this = window, но если use strict - undefined

// function showThis() {
// 	console.log(this);
// }

// showThis();

// function showThis(a, b) {
// 	console.log(this);
// 	function sum() {
// 		console.log(this);
// 		return this.a + this.b;
// 	}

// 	console.log(sum());
// }

// showThis(4, 5);




// 2) Контекст у методов обьекта - сам обьект

// const obj = {
// 	a: 20,
// 	b: 15,
// 	sum: function() {
// 		// return this.a + this.b;
// 		function shout() {
// 			console.log(this);
// 		}
// 		shout();
// 	}
// };

// console.log(obj.sum());




// 3) this в конструкторах и классах - это новый экземпляр обьекта

// function User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// 	this.hello = function() {
// 		console.log(`Hello, ${this.name}`);
// 	};
// }

// const ivan = new User('Ivan', 28);






// 4) Ручная привязка this: call, apply, bind

// function sayName(surname) {
// 	console.log(this);
// 	console.log(this.name + surname);
// }

// const user = {
// 	name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);


// function count(num) {
// 	return this * num;
// }

// const double = count.bind(2);

// console.log(double(3));
// console.log(double(13));


const btn = document.querySelector('button');

btn.addEventListener('click', function() {
	// console.log(this);
	this.style.backgroundColor = 'red';
});

// btn.addEventListener('click', (event) => {
// 	// console.log(this);
// 	event.target.style.backgroundColor = 'red';
// });

const obj = {
	num: 5,
	sayNumber: function() {
		const say = () => {
			console.log(this.num);
		};

		say();
	}
};

obj.sayNumber();

const double = a => a * 2;

console.log(double(4));