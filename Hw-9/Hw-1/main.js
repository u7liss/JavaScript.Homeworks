// #8Nmt60ZT

// – створити блок,

// – додати йому класи wrap, collapse, alpha, beta

// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту

// – додати цей блок в body.

// – клонувати його повністю, та додати клон в body.



const div = document.createElement('div');
div.className = 'wrap collapse alpha beta';

// div.classList.add('wrap');
// div.classList.add('collapse');
// div.classList.add('alpha');
// div.classList.add('beta');

const title = document.createElement('h1');
title.textContent = 'Заголовок';

const paragraph = document.createElement('p');
paragraph.textContent = 'текст текст текст текст текст текст текст';

div.append(title);
div.append(paragraph);

const cloneNode = div.cloneNode(true);
document.body.append(div, cloneNode);











// // 		// 1. Создаем новый div
// // const newDiv = document.createElement('div');

// // // 2. Добавляем ему текст
// // newDiv.textContent = 'Это новый div, добавленный через JavaScript!';

// // // 3. Добавляем класс для стилизации (в CSS: .my-div { color: green; })
// // newDiv.className = 'my-div';

// // // 4. Вставляем его в конец тега <body>
// // document.body.append(newDiv);

// // 1. Створюємо основний блок (div)
// const containerDiv = document.createElement('div');
// containerDiv.id = 'myContainer'; // Можна додати ID або класи

// // 2. Створюємо заголовок (h1)
// const heading = document.createElement('h1');
// heading.textContent = 'Це мій JavaScript Заголовок'; // Встановлюємо текст

// // 3. Створюємо абзац (p)
// const paragraph = document.createElement('p');
// paragraph.textContent = 'Це текст, доданий динамічно за допомогою JavaScript.'; // Встановлюємо текст

// // 4. Додаємо заголовок та абзац всередину блоку div
// containerDiv.append(heading);
// containerDiv.append(paragraph);
// // Або: containerDiv.appendChild(heading);
// // Або: containerDiv.appendChild(paragraph);

// // 5. Додаємо створений блок у body документа
// document.body.append(containerDiv);
// // Або: document.body.appendChild(containerDiv);

// // Можна додати стилі безпосередньо (або через CSS клас)
// containerDiv.style.border = '1px solid blue';
// containerDiv.style.padding = '20px';
// containerDiv.style.marginTop = '20px';
