// #8lld9HMxXWB

// – Перевести до великого регістру наступні стрінгові значення

//       ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’


let str1 = 'hello world';
console.log(str1.toUpperCase());

let str2 = 'lorem ipsum';
console.log(str2.toUpperCase());

let str3 = 'javascript is cool';
console.log(str3.toUpperCase());


const strings = [str1, str2, str3];
for (const element of strings) {
	console.log(element.toUpperCase());
}