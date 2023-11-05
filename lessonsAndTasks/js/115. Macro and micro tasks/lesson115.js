'use strict';

setTimeout(() => console.log('timeout')); // 6 // macro

Promise.resolve()
	.then(() => console.log('promise')); // 2 // micro
Promise.resolve()
	.then(() => console.log('promise_2')); // 3

queueMicrotask(() => console.log('wow'));

Promise.resolve()
	.then(() => console.log('promise_3')); // 4
Promise.resolve()
	.then(() => console.log('promise_4')); // 5

console.log('code'); // 1 // macro

// macro => micro => macro
// после макро задачи выполняются ВСЕ микро задачи скопившиеся в очереди
// micro: than(), catch(), finally(), await()

// () => {}
// microtasks
// render
// () => {}
// microtasks
// render
// () => {}

// queueMicrotask() - чтобы самому создать микрозадачу