'use strict';

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//     console.log('red')
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle('red');
});

// console.log(btns[0].className); //old attribute

wrapper.addEventListener('click', (event) => {

    // if (event.target && event.target.tagName == 'BUTTON') {
    //     console.log('hello')
    // }
    
    if (event.target && event.target.matches('button.red')) {
        console.log('hello')
    }

    // if (event.target && event.target.classList.contains('blue')) {
    //     console.log('hello')
    // }
});

// btns.forEach(btn => {
//     btn.addEventListener('click', () => { // динамически добавленные кнопки не работают таким образом
//         console.log('hello');
//     });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);


// for (let i = 0; i <= 5; i++) {
//     const btn = document.createElement('button');
//     btn.classList.add('red');
//     wrapper.append(btn);
// }

// btns.forEach(item => {
//     item.classList.add('red');
// })

// btns[3].addEventListener('click', () => {
//     btns[3].classList.toggle('red');
// })

// btns.forEach(item => {

//     item.addEventListener('click', () => {
//         item.classList.toggle('red');
//     });
    
// });

// btns.forEach(item => {

//     item.addEventListener('mouseenter', () => {
//         item.classList.toggle('blue');
//     });

// });