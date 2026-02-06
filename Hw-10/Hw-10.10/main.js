// #NKB0tgWIK1G 

// ***PAGINATION

// зробити масив на 100 об’єктів та дві кнопки prev next

// при завантаженні сторінки з’являються перші 10 об’єктів.

// При натисканні next виводяться наступні 10 об’єктів

// При натисканні prev виводяться попередні 10 об’єктів


let data = [];
for (let i = 0; i < 100; i++) {
	data.push({
		id: i + 1,
		name: "Об'єкт " + (i + 1)
	});
}

let list = document.getElementById('list');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');

let pageSize = 10;
let currentPage = 0;

function render() {
	list.innerHTML = '';

	let start = currentPage * pageSize;
	let end = start + pageSize;

	for (let j = start; j < end && j < data.length; j++) {
		let div = document.createElement('div');
		div.innerText = data[j].id + ': ' + data[j].name;
		list.appendChild(div);
	}
}

nextBtn.onclick = function () {
	if ((currentPage + 1) * pageSize < data.length) {
		currentPage++;
		render();
	}
};

prevBtn.onclick = function () {
	if (currentPage > 0) {
		currentPage--;
		render();
	}
};
render();