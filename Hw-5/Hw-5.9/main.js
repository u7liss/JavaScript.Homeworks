// #bovDJDTIjt

// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.

let users = [
	{
		id: 1,
		name: 'Leanne Graham',
		age: 33
	},
	{
		id: 2,
		name: 'Ervin Howell',
		age: 30
	},
	{
		id: 3,
		name: 'Clementine Bauch',
		age: 28
	},
	{
		id: 4,
		name: 'Patricia Lebsack',
		age: 27
	},
	{
		id: 5,
		name: 'Chelsey Dietrich',
		age: 29
	}
];



const func = () => {
	for (const user of users)
		document.write(`<div class="user-box">
	${user.id} - ${user.name} ${user.age}
	<hr>
	</div>`);
}
func(users);