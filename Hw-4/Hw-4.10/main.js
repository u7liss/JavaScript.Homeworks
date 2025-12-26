// #pghbnSB

// – створити функцію яка повертає найменьше число з масиву


let array = [44, -3, 4, 27, 0, -331];

function func(array){
	let min =  array[0];
	for(const item of array){
		if (item < min) {
			min = item
		}
	}
	console.log(min);
	return min;
}
func(array);




// ----------another option-----------

// let numbers =  [33, 4, -25, 0, 111];

// function arrayMinValue(numbers){
// 	let min =  numbers[0];
// 	for(let i = 1; i < numbers.length; i++){
// 		let number = numbers[i];
// 		if (number < min) {
// 			min = number
// 		}
// 	}
// 	return min;
// }
// console.log(arrayMinValue(numbers));