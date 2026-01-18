// #5kla3yMpgp

// – (Те саме, тільки через клас)

// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:

// — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`

//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed

//     — changeYear (newValue) – змінює рік випуску на значення newValue

//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car



class Car {

	constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
		this.model = model;
		this.manufacturer = manufacturer;
		this.year = year;
		this.maxSpeed = maxSpeed;
		this.engineCapacity = engineCapacity;
	}

	drive() {
		console.log(`we are driving at ${this.maxSpeed} per hour`)
	};

	info() {
		for (const key in this) {
			console.log(key, this[key]);
		}
	};

	increaseMaxSpeed(speedToAdd) {
		if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
		// if (speedToAdd > 0) {
		// 	this.maxSpeed = this.maxSpeed + speedToAdd;
		// } 
	};

	changeYear(year) {
		if (year > 1815) this.year = year;
	};

	addDriver(driver) {
		if (driver) this.driver = driver;
	};

}

const car = [
	new Car('Toyota Camry', 'Toyota Motor Corporation', 2025, 230, '2.5-liter'),
	new Car('Ford F-150', 'Ford Motor Company', 1975, 190, '3.5L EcoBoost V6')

]

car[0].drive();
car[0].info();
car[0].increaseMaxSpeed(100);
car[0].changeYear(2000);
car[0].addDriver({});
console.log(car[0]);