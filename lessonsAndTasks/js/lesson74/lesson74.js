'use strict';

const box = document.querySelector('.box');

let observer = new MutationObserver(mutatuinRecords => {
	console.log(mutatuinRecords);
});

observer.observe(box, {
	childList: true
});

observer.disconnect();

// const observr = new ResizeObserver((entries) => {
//     const boxElement = entries[0];
//     const isSmall = boxElement.contentRect.width < 150;
//     boxElement.target.style.backgroundColor = isSmall ? 'blue' : 'red';
// });

// observer.observe(box);