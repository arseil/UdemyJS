'use strict';

const persone = {
	name: 'Alex',
	tel: '+74444444',
	parents: {
		mom: 'Olga',
		dad: 'Mike'
	}
};

// console.log(JSON.parse(JSON.stringify(persone)));

const clone = JSON.parse(JSON.stringify(persone));

console.log(clone);

clone.parents.mom = 'Ann';

console.log(clone);