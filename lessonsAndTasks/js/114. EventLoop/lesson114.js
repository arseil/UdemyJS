'use strict';

setTimeout(() => {
	console.log(1);
}, 0); // по умолчанию JS ставит задержку 4мс

console.log(2);

// console.log(1);

// setTimeout(() => {
// 	console.log('timeout_2000');
// }, 4000);

// setTimeout(() => {
// 	console.log('timeout_4000');
// }, 4000);

// console.log(2);

// let k = 0;

// function count() {
// 	for (let i = 0; i < 1e9; i++) {
// 		k++;
// 	}
// 	alert('done');
// }
// count();