// #XjJuucOMR0

// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone

// створити пустий масив, наповнити його 10 об’єктами new User(….)




function User(id, name, surname, email, phone) {
	this.id = id;
		this.name = name;
		this.surname = surname;
		this.email = email;
		this.phone = phone;
	console.log(this);
}

let users = [
	new User(1, 'anatoliy', 'besarab', 'anatoliy@gmail.com', '+380(50) 076 43 29'),
	new User(2, 'sergiy', 'sereda', 'sereda@gmail.com', '+380(50) 476 43 39'),
	new User(3, 'anna', 'glos', 'glos@gmail.com', '+380(50) 336 43 34'),
	new User(10, 'stas', 'surko', 'surko@gmail.com', '+380(50) 476 43 31'),
	new User(4, 'evgen', 'cherno', 'cherno@gmail.com', '+380(50) 456 43 39'),
	new User(5, 'andriy', 'kuleshov', 'andriy@gmail.com', '+380(50) 776 73 39'),
	new User(6, 'galina', 'titomir', 'tocti@gmail.com', '+380(50) 476 33 39'),
	new User(7, 'olexandr', 'stork', 'stork@gmail.com', '+380(50) 676 43 39'),
	new User(9, 'marta', 'stala', 'stala@gmail.com', '+380(50) 576 43 89'),
	new User(8, 'glib', 'boyko', 'boyko@gmail.com', '+380(50) 476 43 36'),
]
console.log(users);



