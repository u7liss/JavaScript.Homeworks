// #Mbiz5K4yFe7

// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r


function totalCylinderArea(radius, height) {
	const result = 2 * Math.PI * radius * radius + 2 * Math.PI * radius * height;
	console.log(result);
	return result;
}
totalCylinderArea(2, 2);



// -----------варіант----------

// function totalCylinderArea(radius, height) {
// 	return 2 * Math.PI * radius * (radius + height);
// }
// console.log(totalCylinderArea(2, 2));