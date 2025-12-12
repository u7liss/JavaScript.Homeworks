// #awLXL6TBzg

// з файлу arrays.js ( лежить у вкладеннях)  взяти масив coursesAndDurationArray. За допомогою іф перевірити кожен його елемент на тривалість навчання. У випадку, якщо тривалість довша за 5 місяців, вивести в консоль “Супер”.

let coursesAndDurationArray = [
	{ title: 'JavaScript Complex', monthDuration: 5 },
	{ title: 'Java Complex', monthDuration: 6 },
	{ title: 'Python Complex', monthDuration: 6 },
	{ title: 'QA Complex', monthDuration: 4 },
	{ title: 'FullStack', monthDuration: 7 },
	{ title: 'Frontend', monthDuration: 4 }
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log("Супер");
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log("Супер");
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log("Супер");
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log("Супер");
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log("Супер");
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log("Супер");
}


// --------------варіант------------

// let a = coursesAndDurationArray;
//
// if (a[0].monthDuration > 5) {
// 	console.log(a[0].title + ' ' + 'Супер');
// } else {
// 	console.log(a[0].title + ' ' + 'Як на мене,то також супер');
// }
//
// if (a[1].monthDuration > 5) {
// 	console.log(a[1].title + ' ' + 'Супер');
// }
// if (a[2].monthDuration > 5) {
// 	console.log(a[2].title + ' ' + 'Супер');
// }
// if (a[3].monthDuration > 5) {
// 	console.log((a[3].title) + ' ' + 'Супер');
// }
// if (a[4].monthDuration > 5) {
// 	console.log(a[4].title + ' ' + 'Супер');
// }
// if (a[5].monthDuration > 5) {
// 	console.log(a[5].title + ' ' + 'Супер');
// }



