// #ClDsAm7xba7

// – Перевести до нижнього регістру наступні стрінгові значення

//       ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’



let str1 = 'HELLO WORLD';
console.log(str1.toLowerCase());

let str2 = 'LOREM IPSUM';
console.log(str2.toLowerCase());

let str3 = 'JAVASCRIPT IS COOL';
console.log(str3.toLowerCase());


const strings = [str1, str2, str3];
for (const element of strings) {
	console.log(element.toLowerCase());
}