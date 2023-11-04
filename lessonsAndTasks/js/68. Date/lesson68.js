'use strict';

const now = new Date('2023-10-23');
// new Date.parse('2023-10-23');

// получение компонентов даты

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getUTCHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());
// console.log(now.getDay());

// console.log(now.getTimezoneOffset()); // разница часовых поясов 
// console.log(now.getTime()); // количество миллисекунд с 01.01.1970

// установка компонетов даты

// console.log(now.setHours(18, 40));
// console.log(now);

let start = new Date();

for (let i = 0; i < 999999; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд.`);