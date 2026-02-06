// #j693ca8

// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це 


const input = document.createElement('input');
input.id = 'ageInput';
input.type = 'number';
input.placeholder = 'Введіть ваш вік';

const btn = document.createElement('button');
btn.id = 'checkBtn';
btn.textContent = 'Підтвердити';

const p = document.createElement('p');
p.id = 'result';
p.textContent = '';

document.body.appendChild(input);
document.body.appendChild(btn);
document.body.appendChild(p);

document.getElementById('checkBtn').addEventListener('click', function () {
	const age = document.getElementById('ageInput').value;
	const resultElement = document.getElementById('result');
	if (age === "") {
		resultElement.textContent = "Введіть ваш вік.";
		return;
	}
	if (parseInt(age) < 18) {
		resultElement.textContent = "Вік менше 18 років.";
	} else {
		resultElement.textContent = "Вік 18 років або більше.";
	}
});


