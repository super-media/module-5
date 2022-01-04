//Задание 3.
//Дана строка.Необходимо вывести в консоль
// перевёрнутый вариант.Например,
// "Hello" -> "olleH".

let str = "Hello!!!"
function reverseStr(str) {
   return str.split("").reverse().join("");
}
console.log(reverseStr(str));


/* 
let str = "Hello"
function reverseStr(str) {
return str.split("").reverse().join("");
}
//Тут разбито поэтапно
console.log(str.split(""));
console.log(str.split("").reverse());
console.log(str.split("").reverse().join(""));
// для вывода в консоь
console.log(reverseStr(str));
*/