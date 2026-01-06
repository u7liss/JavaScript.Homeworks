// #bolvdlhP

//  описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу

// Після опису, використовуючи функції масивів:

//  – знайти піковий туз

//  – всі шістки

//  – всі червоні карти

//  – всі буби

//  – всі трефи від 9 та більше



// Приклад моделі об’єкту карти:

// {

//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’

//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’

//     color:”, // ‘red’,’black’

// }

// -------------------------------------


const cardSuit = ['heart', 'diamond', 'club', 'spade'];


const values = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

// Функція для визначення кольору карти за мастю
function getColor(suit) {
	if (suit === 'diamond' || suit === 'heart') {
		return 'red';
	} else {
		return 'black';
	}
}

const deck = [];


for (let suit of cardSuit) {
	for (let value of values) {
		deck.push({
			cardSuit: suit,
			value: value,
			color: getColor(suit)
		});
	}
}

console.log(deck);



//  – знайти піковий туз
console.log(deck.find(card => card.value === 'A' && card.cardSuit === 'spade'));



// – всі шістки
console.log(deck.filter(card => card.value === '6'));

//  – всі червоні карти
console.log(deck.filter(card => card.color === 'red'));

//  – всі бубни
console.log(deck.filter(card => card.cardSuit === 'diamond'));



//  – всі трефи від 9 та більше
console.log(deck.filter(card => card.cardSuit === 'club' && card.value !== '6' && card.value !== '7' && card.value !== '8'));







