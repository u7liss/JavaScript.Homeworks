// #bq1zkx7WP

// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”

// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.

//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається


// Доповнити код враховуючи наступні умови:
// при перезавантаженні сторінки до значення додається по 10, але зміна відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається.


let currentNumber = +localStorage.getItem('number');

if (currentNumber === null) {
	currentNumber = 100;
	localStorage.setItem('number', currentNumber);
} else {
	currentNumber = +currentNumber;
}
let lastUpdateTime = +localStorage.getItem('lastUpdateTime') || 0;
let now = Date.now();

if (now - lastUpdateTime > 10000) {
	currentNumber += 10;

    localStorage.setItem('number', String(currentNumber));
    localStorage.setItem('lastUpdateTime', String(now));
}
document.getElementById('block').innerText = currentNumber + ' ' + 'грн';








