// #pghbnSB

// – створити функцію яка повертає найменьше число з масиву


let array = [44, -3, 4, 27, 0, -331];



const func = () => {
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

