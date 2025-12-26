// #mkGDenYnNjn.html

//  Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400



function exchange(sumUAH, currencyValues, exchangeCurrency) {
	let exchangeResult;
	for (let item of currencyValues) {
		if (item.currency === exchangeCurrency) {
		 exchangeResult = sumUAH / item.value;
			console.log(exchangeResult);
		}
	}
	return exchangeResult;
}
console.log(exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'USD'));


// function exchange(sumUAH, currencyValues, exchangeCurrency) {
//   const currencyObj = currencyValues.find(
//     item => item.currency === exchangeCurrency
//   );

//   if (!currencyObj) {
//     return null; // або можна кинути помилку
//   }

//   return sumUAH / currencyObj.value;
// }

// // Приклад використання
// const result = exchange(
//   10000,
//   [
//     { currency: 'USD', value: 25 },
//     { currency: 'EUR', value: 42 }
//   ],
//   'USD'
// );

// console.log(result); // 400
