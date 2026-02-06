// #sH8c4er

// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.


const textElement = document.createElement('p');
textElement.id = 'text';
textElement.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, aliquam! Itaque sequi quo voluptatum, cumque modi magnam harum temporibus, numquam obcaecati ipsa minima? Odit quod sit temporibus, a expedita quas!';

const buttonElement = document.createElement('button');
buttonElement.id = 'btn';
buttonElement.textContent = 'hide element';

document.body.appendChild(textElement);
document.body.appendChild(buttonElement);

const button = document.getElementById('btn');
button.addEventListener('click', () => {
	document.getElementById('text').remove();
});


