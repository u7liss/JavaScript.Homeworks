// #8abtVjRv

// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)

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
	new Client(9, 'marta', 'stala', 'stala@gmail.com', '+380(50) 576 43 89', [{ title: 'TV', price: 20000 }]),
	new Client(10, 'stas', 'surko', 'surko@gmail.com', '+380(50) 476 43 31', [{ title: 'TV', price: 20000 }, { title: 'phone', price: 13000 }])
]
console.log(clients);


function sorterFunction(client1, client2){
	return client1.order.length - client2.order.length;
}
console.log(clients.sort(sorterFunction));
