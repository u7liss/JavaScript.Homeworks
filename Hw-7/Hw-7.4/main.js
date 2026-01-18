// #nkMXISv

// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// створити пустий масив, наповнити його 10 об’єктами Client



function Client(id, name, surname, email, phone, order) {
	this.id = id;
	this.name = name;
	this.surname = surname;
	this.email = email;
	this.phone = phone;
	this.order = order;
}



let clients = [
	new Client(1, 'anatoliy', 'besarab', 'anatoliy@gmail.com', '+380(50) 076 43 29', [{ title: 'TV', price: 20000 }, { title: 'phone', price: 13000 }, { title: 'kavo-cooker', price: 20000 }]),
	new Client(2, 'sergiy', 'sereda', 'sereda@gmail.com', '+380(50) 476 43 39', [{ title: 'TV', price: 20000 }, { title: 'phone', price: 13000 }]),
	new Client(3, 'anna', 'glos', 'glos@gmail.com', '+380(50) 336 43 34', [{ title: 'TV', price: 20000 }, { title: 'phone', price: 13000 }]),
	new Client(4, 'evgen', 'cherno', 'cherno@gmail.com', '+380(50) 456 43 39', [{ title: 'TV', price: 20000 }, { title: 'phone', price: 13000 }, { title: 'kavo-cooker', price: 20000 }, { title: 'vacuum cleaner', price: 20000 }]),
	new Client(5, 'andriy', 'kuleshov', 'andriy@gmail.com', '+380(50) 776 73 39', [{ title: 'TV', price: 20000 }, { title: 'phone', price: 13000 }]),
	new Client(6, 'galina', 'titomir', 'tocti@gmail.com', '+380(50) 476 33 39', [{ title: 'TV', price: 20000 }, { title: 'phone', price: 13000 }]),
	new Client(7, 'olexandr', 'stork', 'stork@gmail.com', '+380(50) 676 43 39', [{ title: 'TV', price: 20000 }, { title: 'phone', price: 13000 }, { title: 'kavo-cooker', price: 20000 }, { title: 'vacuum cleaner', price: 20000 }]),
	new Client(8, 'glib', 'boyko', 'boyko@gmail.com', '+380(50) 476 43 36', [{ title: 'TV', price: 20000 }, { title: 'phone', price: 13000 }]),
	new Client(9, 'marta', 'stala', 'stala@gmail.com', '+380(50) 576 43 89', [{ title: 'TV', price: 20000 }, { title: 'phone', price: 13000 }]),
	new Client(10, 'stas', 'surko', 'surko@gmail.com', '+380(50) 476 43 31', [{ title: 'TV', price: 20000 }, { title: 'phone', price: 13000 }])
]
console.log(clients);


// варіант1-------------------------------------------

// для елемента конструктора order можна всі дані записати строкою (наприклад: ['tv','phone']), а можна побудувати окремий конструктор тому, що в "житті" в ньому можуть буть різні поля, які по логіці однакові, але для програми будуть абсолютно різні(наприклад не [{title: 'TV',price: 20000}, {title: 'phone', price: 13000}], а [{title: 'TV',price: 20000}, {nazva: 'phone', price: 13000}])

// function Product(title, price) {
// 	this.title = title;
// 	this.price = price;
// }

// тоді в let clients=[] в ячейку order впис-ся дані конструктора Product наприклад [new Product('TV', 20000), 'phone',12000]
// Це матиме наступний вигляд:

// let clients = [
// 	new Client(1, 'anatoliy', 'besarab', 'anatoliy@gmail.com', '+380(50) 076 43 29', [new Product('TV', 20000), new Product('phone',12000)]),
// 	new Client(2, 'sergiy', 'sereda', 'sereda@gmail.com', '+380(50) 476 43 39', [new Product('TV', 20000), new Product('phone',12000)])];
// console.log(clients);


// варіант2-------------------------------------------
//  якщо не хочу передавати дані в ордер не масивом, а хочу строкою, через кому:
//  можна сказати, що ордер - це (рест аргумент: (...order))  і краще назвати його не ордер, а продукти (...products)
// в результаті передавать в ордер(заказ)- продукти (products)

// function Client(id, name, surname, email, phone, ...products ) {
// 	this.id = id;
// 		this.name = name;
// 		this.surname = surname;
// 		this.email = email;
// 		this.phone = phone;
// 		this.order = products;//!!!!!!!!!!(order - це замовлення(в однині), а products(множина))можна вписати багато продуктів, про що свідчить рест аргумент
// }

// при виводі буде виводитися ордер в такому вигляді: console.log(clients.order);