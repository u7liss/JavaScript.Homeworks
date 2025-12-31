// #gEFoxMMO

// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write



let array = [10, 333, true, 5120, 'hello'];

const func = () => {

	document.write(`<ul>`);
	for (const item of array) {
		document.write(`<li>${item}</li>`);
	}
	document.write(`</ul>`);
}


func(array);