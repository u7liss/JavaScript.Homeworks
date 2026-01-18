// #pOeHKct

// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)


function User(id, name, surname, email, phone) {
this.id = id;
		this.name = name;
		this.surname = surname;
		this.email = email;
		this.phone = phone;
	// console.log(this);

}

let users = [
	new User(3, 'anna', 'glos', 'glos@gmail.com', '+380(50) 336 43 34'),
	new User(10, 'stas', 'surko', 'surko@gmail.com', '+380(50) 476 43 31'),
	new User(4, 'evgen', 'cherno', 'cherno@gmail.com', '+380(50) 456 43 39'),
	new User(1, 'anatoliy', 'besarab', 'anatoliy@gmail.com', '+380(50) 076 43 29'),
	new User(9, 'marta', 'stala', 'stala@gmail.com', '+380(50) 576 43 89'),
	new User(5, 'andriy', 'kuleshov', 'andriy@gmail.com', '+380(50) 776 73 39'),
	new User(6, 'galina', 'titomir', 'tocti@gmail.com', '+380(50) 476 33 39'),
	new User(2, 'sergiy', 'sereda', 'sereda@gmail.com', '+380(50) 476 43 39'),
	new User(7, 'olexandr', 'stork', 'stork@gmail.com', '+380(50) 676 43 39'),
	new User(8, 'glib', 'boyko', 'boyko@gmail.com', '+380(50) 476 43 36')
]



function sorterFunction(user1, user2){
	return user1.id - user2.id;
}
console.log(users.sort(sorterFunction));



//1-й варіант  скорочення анонімна функція

// console.log(users.sort(function sorterFunction(user1, user2){
// 	return user1.id - user2.id;
// }));




//2-й варіант  скорочення стрілочна ф-я  ретерн не потрібно прописувати, дужки не потрібні і все в одну строку

// console.log(users.sort((user1, user2)=>  user1.id - user2.id));


