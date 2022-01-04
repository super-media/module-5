
//Задание 8.
//Создайте произвольный массив Map.
//Получите его ключи и выведите в консоль все значения
// в виде «Ключ — Х, значение — Y».
//Используйте шаблонные строки.

let cars = new Map();
cars.set("LADA", "Ваз-2105");
cars.set("BMW", "Х4");
cars.set("VW", "Passat");
cars.set("KIA", "Sorento");

function newCars() {
   cars.forEach((value, key) => {
      console.log(`Марка(${key}) - Модель(${value})`);
   })
}
newCars();


//Сначала сделал так ...
const car = [
   { "brand": "Ваз-2105", "type": "Седан", "year": 1991, "mileage": 150000 },
   { "brand": "BMW", "type": "Купе", "year": 2021, "mileage": 12000 },
   { "brand": "VW", "type": "Пикап", "year": 2015, "mileage": 55000 },
   { "brand": "Jeep", "type": "Внедорожник", "year": 2018, "mileage": 31000 },
];
const newCar = car.map(cars => {
   return `(Бренд:${cars.brand},Тип кузова:${cars.type},Год выпуска:${cars.year},пробег:${cars.mileage})`
});
console.log(newCar);



