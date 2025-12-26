// #kpsbSQCt2Lf

// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах

// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


let array = [11,22,33,44];

function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
	
	console.log(arr);
	return arr;
}
console.log(swap(array, 0, 1)); 




// ----------варіант(з перевіркою)-----------

// function swap(arr, a1, a2) {
// 	if(a1 < arr.length && a2 < arr.length){
// 		[arr[0], arr[1]] = [arr[1], arr[0]];
		
// 		console.log(arr);
// 		return arr;
// 	}
// 	return 'Array length exceeded';
// }
// console.log(swap([11,22,33,44],0,1)); 