// #2ikXsE2WiKZ

// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)

function User(id, name, surname, email, phone) {
this.id = id;
		this.name = name;
		this.surname = surname;
		this.email = email;
		this.phone = phone;
	// console.log(this);
	
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



function filterFunction(user){
	return user.id % 2 === 0;
}
//1-й варіант  скорочення експрешен функція
// const filterFunction = function(user){
// 	return user.id % 2 === 0;
// }


//2-й варіант  скорочення стрілочна ф-я  ретерн не потрібно прописувати, дужки не потрібні і все в одну строку

// const filterFunction = (user) => user.id % 2 === 0;


// 3-й варіант безіменна функція
// (замінили filterFunction її значенням (user) => user.id % 2 === 0;)

// const filterUsers = users.filter((user) => user.id % 2 === 0);


const filterUsers = users.filter(filterFunction);
console.log(filterUsers);