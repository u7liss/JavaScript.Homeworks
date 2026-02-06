// #ymAmN2xJ

// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом



const form = document.createElement('form');
form.id = 'userForm';

const nameInput = document.createElement('input');
nameInput.placeholder = 'Ім\'я';
const surnameInput = document.createElement('input');
surnameInput.placeholder = 'Прізвище';
const ageInput = document.createElement('input');
ageInput.placeholder = 'Вік';
ageInput.type = 'number';

const button = document.createElement('button');
button.type = 'submit';
button.textContent = 'Відправити';

const div = document.createElement('div');
div.id = 'result';

form.appendChild(nameInput);
form.appendChild(surnameInput);
form.appendChild(ageInput);
form.appendChild(button);

document.body.appendChild(form);
document.body.appendChild(div);

form.addEventListener('submit', function (e) {
	e.preventDefault();
	const resultElement = document.getElementById('result');
	resultElement.textContent = ` ${nameInput.value} ${surnameInput.value}, вік: ${ageInput.value}`;
});



