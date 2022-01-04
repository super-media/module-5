
//МАССИВЫ
//Дан произвольный массив.Необходимо вывести к
//оличество элементов массива, затем перебрать 
//его и вывести в консоль каждый элемент массива.

let arr = ["Вася", "Петя", "Маша", "Коля", "Ира"];
console.log(arr)
console.log(arr.length);

//просто вывод в консоль
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

//перебор и вывод с помощью цикла for
for(let i=0; i<arr.length; i++){
console.log(arr[i]);
}
//перебор и вывод с помощью функции forEach
arr.forEach(show);
function show(item) {
   console.log(item);
}


