// #EKRNVPM

// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


let arr = [1, 2, 3, 4, 23, 9];



const sum = () => {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		let item = arr[i];
		sum = sum + item;
	}
	console.log(sum);
	return sum;
}
console.log(sum(arr));


