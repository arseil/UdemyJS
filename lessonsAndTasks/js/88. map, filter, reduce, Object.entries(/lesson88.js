/* eslint-disable indent */
'use strict';

// filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(item => {
// 	return item.length < 5;
// });

// console.log(shortNames);


// map

// let answers = ['ivAn', 'AnnA', 'Hello'];

// const result = answers.map(item => item.toLowerCase());
// // answers = answers.map(item => item.toLowerCase());

// // console.log(answers);
// console.log(result);


// every/some

// // const some = [4, 'qwe', 'dfsfsdf'];
// const some = [4, 3, 2];

// // console.log(some.some(item => typeof (item) === 'number'));
// console.log(some.every(item => typeof (item) === 'number'));


// reduce

// const arr = [4, 5, 1, 3, 2, 6];
// // 0		4
// // 4		5
// // 9		1
// // 10		3
// // 13		2
// // 15		6
// // 21
// const result = arr.reduce((sum, current) => sum + current, 0);
// console.log(result);
// // console.log(arr.reduce((sum, current) => sum + current, 0));

// const arr = ['apple', 'pear', 'plum'];

// const result = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(result);


const obj = {
	ivan: 'persone',
	ann: 'persone',
	dog: 'animal',
	cat: 'animal'
};

const newArr = Object.entries(obj)
	.filter(item => item[1] === 'persone')
	.map(item => item[0]);

console.log(newArr);