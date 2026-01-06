// #bfoJuse4ZzP

// – Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.

//     let str = ‘Ревуть воли як ясла повні’;

// let arr = stringToArray(str); ['Хіба', 'ревуть', 'воли', 'як', 'ясла', 'повні'



let str = 'Хіба ревуть воли як ясла повні';

function stringToArray(str) {
		if (str){ 
			const split = str.split(' ');
			return split;
		}
		return ['']; 
	}
	console.log(stringToArray(str));

