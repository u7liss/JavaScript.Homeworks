// #vV9a6584I5

// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску//*(year )*//, максимальна швидкість, об’єм двигуна.додати в об’єкт функції:

// — drive() – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

// — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`

// — increaseMaxSpeed (newSpeed)//*(speedToAdd)*// – яка підвищує значення максимальної швидкості на значення newSpeed

// — changeYear (newValue)//*(year )*// – змінює рік випуску на значення newValue

// — addDriver (driver) – приймає об’єкт//*(driver)*// який “водій” з довільним набором полів, і додає його в поточний об’єкт car


function Car(model, manufacturer, year, maxSpeed, engineCapacity) {
		this.model = model
		this.manufacturer = manufacturer
		this.year = year
		this.maxSpeed = maxSpeed
		this.engineCapacity = engineCapacity

		this.drive = function () {
			console.log(`we are driving at ${this.maxSpeed} per hour`)
		};
		this.info = function () {
			for(const key in this){
				console.log(key, this[key]);
			}
		};
		this.increaseMaxSpeed = function (speedToAdd){
			if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd; 
			// if (speedToAdd > 0) {
			// 	this.maxSpeed = this.maxSpeed + speedToAdd;
			// } 
		};
		this.changeYear = function (year){
			if (year > 1815) this.year = year; 
		};

		this.addDriver = function (driver){
			if (driver) this.driver = driver; 
		};

}

const car = [
	new Car('Toyota Camry', 'Toyota Motor Corporation', 2025, 230, '2.5-liter'),
	new Car('Ford F-150', 'Ford Motor Company', 1975, 190, '3.5L EcoBoost V6')
	
]
console.log(car);

car[0].drive();
car[0].changeYear(2000);
car[0].increaseMaxSpeed(120);
car[0].addDriver({});
car[0].info();