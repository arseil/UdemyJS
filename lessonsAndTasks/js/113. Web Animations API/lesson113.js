'use strict';

const btnPhone = document.querySelector('#iphone'),
	btnMacbook = document.querySelector('#macbook'),
	images = document.querySelectorAll('img');

let phoneAnimation;

btnPhone.addEventListener('click', () => {
	if (!phoneAnimation) {
		phoneAnimation = images[0].animate([
			{
				transform: 'translate(0, 0) rotate(0deg)',
				filter: 'opacity(100%)'
			},
			{
				transform: 'translate(100px, 100px) rotate(180deg)',
				filter: 'opacity(50%)'
			},
			{
				transform: 'translate(-100px, -100px) rotate(270deg)',
				filter: 'opacity(75%)'
			},
			{
				transform: 'translate(0, 0) rotate(0deg)',
				filter: 'opacity(100%)'
			}
		], {
			duration: 3000,
			iterations: Infinity
		});
	} else if (phoneAnimation.playState === 'paused') {
		phoneAnimation.play();
	} else {
		phoneAnimation.pause();
	}
});