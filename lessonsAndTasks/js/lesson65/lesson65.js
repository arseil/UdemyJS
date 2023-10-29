const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
};

btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 1000);
// })

// // setTimeout(logger, 2000);

// clearInterval(timerId);

// function logger() {
//     if (i === 3) {
//         clearInterval(timerId);
//     }

//     console.log('hellllo');

//     i++;
// };

// const timer = setTimeout(function(text) {
//     console.log(text)
// }, 2000, 'Hello');

// let id = setTimeout(function log() {  
//     console.log('Hello');
//     id = setTimeout(log, 1000);
// }, 1000); // рекурсивный вызов setTimeout, лучше чем setInterval (т.к. setInterval не ждет пока внутренняя функция выполнится)