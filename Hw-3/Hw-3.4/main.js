// #OeT7t3uUMFi

// – За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let i = 0;
while (i <20) {
	document.write(`<h1>${i+1} - Hello Kitty !</h1>`);
	// document.write('<h1>' + (i+1) + ' - Hello Kitty!</h1>');
	i++;
}