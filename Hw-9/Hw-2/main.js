// #OPLI89c9G

// – Є масив:

// [‘Main’,’Products’,’About us’,’Contacts’]

// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let arr = ['Main', 'Products', 'About us', 'Contacts'];

const menu = document.createElement('ul');
menu.classList.add('menu');
// menu.className = 'menu';

for (const item of arr) {
	const li = document.createElement('li');
	// li.textContent = item;
	li.innerText = item;
	
	menu.append(li);
}
document.body.appendChild(menu);