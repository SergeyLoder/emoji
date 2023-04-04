// Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение.
// Элементы массива будут разделены запятой.Получите результат двумя разными методами.

// var vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];

// let str1 = vegetables.toString()
// let str2 = vegetables.join(" ")

// console.log(str1);
// console.log(str2);

// Пользователь вводит многозначное число через promt.Напишите функцию colonOdd(num),
//     которая принимает число num в качестве аргумента и вставляет двоеточие(: ) между двумя нечетными числами.
//     Например, если вводится число 55639217, то на выход должно быть 5: 563: 921: 7.

// const num = prompt("Введите число", 55);
// let str = num.toString();

// function colonOdd(num) {

// }

// console.log(colonOdd(num)); // 5:5

// Напишите функцию removeDuplicates(arr), которая возвращает массив,
//     в котором удалены повторяющиеся элементы из массива arr(игнорируйте чувствительность к регистру).

// var arr = ["php", "php", "css", "css",
//   "script", "script", "html", "html", "java"
// ];
// function removeDuplicates(arr) {

// }

// document.writeln(result);  // [php,css,script,html,java]

// const date = new Date("2023-03-30")
// const date = new Date(2023, 0, 22, 22, 30, 30, 300)
// const date = new Date(24 * 60 * 60 * 1000)
// const date = new Date().getTime() // get timestamp
// const date = Date.now() // get timestamp

// const start = Date.now()
// for (let i = 0; i < 100000000; i++) {

// }
// const end = Date.now()
// console.log((end - start + 'ms'));

// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const dayOfWeek = date.getDate();
// const day = date.getDay();
// const hours = date.hours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// const ms = date.getMilliseconds();
// console.log(year, month, day, dayOfWeek, hours, minutes, seconds, ms);
// console.log(date.setFullYear(2023, 0, 1));

// Задание 1:
// Узнать количество дней в месяце

// Напишите функцию getDaysInMonth, которая в качестве параметров принимает
// месяц и год, и возвращает количество дней в месяце.

// function getDaysInMonth(month, year) {
//   return new Date(year, month, 0).getDate();
// }

// console.log(getDaysInMonth(9, 2021));
// console.log(getDaysInMonth(1, 2021));

// Задание 2:

// Получите текущую дату

// Напишите функцию getCurrentDay, чтобы получить текущую дату. Передайте разделитель в качестве аргумента.
// Формат даты dd/mm/yyyy, dd-mm-yyyy
// Пример:
// getCurrentDay('-'));

// function getCurrentDay() {
//     return new Date(year, month, day).getDate();
// }

