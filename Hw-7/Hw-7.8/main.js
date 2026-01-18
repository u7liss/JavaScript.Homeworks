// #zg6Fifnqig

// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.

// Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.

// За допомоги циклу знайти, яка попелюшка повинна бути з принцом.

// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку



class Cinderella {

	constructor(name, age, footSize) {
		this.name = name;
		this.age = age;
		this.footSize = footSize;
	}
}


class Prince {

	constructor(name, age, shoe) {
		this.name = name;
		this.age = age;
		this.shoe = shoe;
	}
}

const cinderellas = [
	new Cinderella('aaa', 18, 35),
	new Cinderella('bbb', 28, 36),
	new Cinderella('ccc', 38, 37),
	new Cinderella('ddd', 19, 38),
	new Cinderella('eee', 20, 39),
	new Cinderella('rrr', 19, 34),
	new Cinderella('hhh', 27, 37),
	new Cinderella('lll', 31, 36),
	new Cinderella('mmm', 25, 35),
	new Cinderella('www', 24, 39)
]

const prince = new Prince('John', 25, 34);

// for (const cinderella of cinderellas) {
// 	if (cinderella.footSize === prince.shoe){
// 		prince.wife = cinderella;
// 	}
// }

const cinderellaStar = cinderellas.find(cinderella => cinderella.footSize === prince.shoe);

prince.wife = cinderellaStar;