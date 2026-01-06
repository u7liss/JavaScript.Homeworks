// #EP5I1UUzAX

// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт

// Приклад моделі кінцевого об’єкту

// {

//     spades:[],

//     diamonds:[],

//     hearts:[],

//     clubs:[]

// }

// ---------------------------------------

const cardSuit = ['heart', 'diamond', 'club', 'spade'];

const values = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

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



const reduce = deck.reduce((accumulator, card) => {
	if (card.cardSuit === 'spade') {
		accumulator.spades.push(card);
	} else if (card.cardSuit === 'club') {
		accumulator.clubs.push(card);
	} else if (card.cardSuit === 'diamond') {
		accumulator.diamonds.push(card);
	} else if(card.cardSuit === 'heart') 
		accumulator.hearts.push(card);
		return accumulator;
	}, { spades: [], diamonds: [], hearts: [], clubs: [] });

console.log(reduce);


// ---варіант------------------------------
// const suits = ['spade', 'diamond', 'heart', 'club'];
// const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

// const cards = [];
// for (const suit of suits) {
// 	for (const value of values) {
// 		const card = { cardSuit: suit, value: value };
// 		if (suit === 'heart' || suit === 'diamond') {
// 			card.color = 'red';
// 		} else {
// 			card.color = 'black';
// 		}
// 		cards.push(card);
// 	}
// }
// console.log(cards);


// const reduce = cards.reduce((accum, card) => {
// 	switch (card.cardSuit) {
// 		case 'spade':
// 			accum.spades.push(card);
// 			break;
// 		case 'diamond':
// 			accum.diamonds.push(card);
// 			break;
// 		case 'club':
// 			accum.clubs.push(card);
// 			break;
// 		case 'heart':
// 			accum.hearts.push(card);
// 			break;

// 	}


// 	return accum;
// }, {
// 	spades: [],
// 	diamonds: [],
// 	hearts: [],
// 	clubs: []
// });


// console.log(reduce);