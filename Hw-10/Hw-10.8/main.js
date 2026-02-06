// #kUSgFqWY

//  Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.

// При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.

const table = document.getElementById('table');

const tableCreatorForm = document.forms['tableCreatorForm'];


tableCreatorForm.onsubmit = function (e) {

	table.innerText = '';
	e.preventDefault();

	const rowsValue = +tableCreatorForm.rows.value;
	const cellsValue = +tableCreatorForm.cells.value;
	const contentValue = tableCreatorForm.content.value;
	console.log(rowsValue, cellsValue, contentValue);

	for (let i = 0; i < rowsValue; i++) {
		const tr = document.createElement('tr');
		for (let j = 0; j < cellsValue; j++) {
			const td = document.createElement('td');
			td.innerText = contentValue;
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
}





