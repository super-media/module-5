
//Задание 6.

//Дан массив.Проверить, одинаковые ли 
//элементы в массиве и вывести результат
// true или false в консоль.Речь идёт не
// о двух рядом стоящих одинаковых элементах,
// а обо всех.Проверить, все ли элементы 
//в массиве одинаковые.

// Не совсем понятно условие задания , поэтому 2 варианта:


const arr = ["Вася", "Петя", 1, 2, "Маша", null, "Вася", 0, "Коля", "Ира"];
let standard = arr[0];
arr.some(arr => {
   if (arr !== standard) {
      console.log("false");
      return false;
   } else {
      console.log("true");
   }
})



//Если по условию, надо было вывести 
// единое значение true/folse - то так.
const arr = ["Вася", "Петя", 1, 2, "Маша", null, "Вася", 0, "Коля", "Ира"];
let isEqual = true;
const standard = arr[0];
for (let item of arr) {
   if (item !== standard) {
      isEqual = false;
   }
}
console.log(isEqual)