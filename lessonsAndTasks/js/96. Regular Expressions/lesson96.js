'use strict';

// new RegExp('pattern', 'flags');

// /pattern/flags


// const ans = prompt('Введите ваше число');

// const reg = /\d/g;
// console.log(ans.match(reg));

const str = 'My name is R2D2';

console.log(str.match(/\D/ig));

//обратные классы
// \D - не числа
// \W - не буквы

// классы
// \d - ищет все цифры
// \w - ищет все слова
// \s - ищет все пробелы

// флаги
// i - регистрозависимый поиск
// g - глобальный поиск
// m - многострочный поиск

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/\./g, '*'));

// console.log('12-34-56'.replace(/-/g, ':'));
