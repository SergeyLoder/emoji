// console.log(getSum(2, 5));
// function getSum(a, b) {
//   return a + b;
// }

// const myFunc = function (a, b) {
//   return a + b;
// };

// const someFunc = (a, b) => (a > b ? a : b);
// console.log(someFunc(10, 20));

//  Task 1
// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

// function myFunc(one) {
//   return one **2;
// }
// console.log(myFunc(5))

// const myFunc = (one) => one ** 2;
// console.log(myFunc(2));

// Task 2
// Сделайте функцию, которая возвращает сумму двух чисел.

// function myFunc(a, b) {
//   return (a + b);
// }
// console.log(myFunc(2,3));

// const myFunc = (a, b) => a + b
// console.log(myFunc(5, 6));

// Task 3
// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

// function myFunc(a, b, с) {
//   return (a - b) / с;
// }
// console.log(myFunc(6, 3, 2));
// const myFunc = (a, b, c) => a - b / c
// console.log(myFunc(10, 2, 4));

// Task 5
// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10.
// Если это так - пусть функция возвращает true, если не так - false.

// function isNumberInRange(number) {
//   if (number > 0 && number < 10) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isNumberInRange(11));

// const isNumberInRange (number) => {
//     if (number > 0 && number < 10)
//     return true;
//    } else {
//     return false;
//   }
// console.log(isNumberInRange(11));

// Задание 1:

// Написать функцию getFullNameFromArray, которая принимает массив пользователя и возвращает строку с полным именем
// Примеры:
// const user = ["Вася", "Пупкин"]
// getFullNameFromArray(user) // "Вася Пупкин"

// function getFullNameFromArray(a) {
//   return a.join(" ");
// }
// console.log(getFullNameFromArray(["Вася", "Пупкин"]));

// Задание 2:
// Написать функцию getLength, которая возвращает длину переданного массива
// Примеры:
// getLength([1,2,3]) // 3

// function getLength(a) {
//   return a.length;
// }
// console.log(getLength([1, 2, 3, 4, 5]));

// Задание 3:
// Написать функцию getLength, getFullLength, которая принимает два массива и возвращает их общую длину (сумму длин)
// используйте функцию из предыдущего задания в решении
// Примеры:
// getFullLength([1,2], [3,4]) // 4

// function getFullLength(a, b) {
//   return a.length + b.length;
// }
// console.log(getFullLength([1, 2], [3, 4, 7]));

// Задание 4:
// Написать функцию getLast, которая возвращает последний элемент переданного массива но не изменяет исходный массив
// Примеры:
// getLast([1,2,3]) // 3
// getLast([1,2,3,4,5]) // 5

// function getLast(a) {
//   return a.at(-1);
// }
// console.log(getLast([1, 2, 3]));

// Задание 5:
// Написать функцию sumLastNumbers, которая принимает два массива и
// возвращает сумму их последних элементов используйте функцию из предыдущего задания в решении
// Примеры:
// sumLastNumbers([1,2], [3,4]) // 6
// sumLastNumbers([1,2,3], [3,4,6]) // 9

// function sumLastNumbers(a, b) {
//     return a.at(-1) + b.at(-1)
// }
// console.log(sumLastNumbers([1, 2], [3, 4]));

// Задание:
//    Напишите функцию createArray, которая принимает два аргумента (from, to)
//    from и to положительные целые числа, to всегда больше чем from
//    ваша функция должна возвращать массив всех целых чисел между
//    from и to включительно
// Примеры:
//    createArray(0,5) // [0,1,2,3,4,5]

// function createArray(from, to) {
//   let array = [];
//   for (let i = from; i <= to; i++) {
//     array.push(i);
//   }
//   return array;
// }
// console.log(createArray(5, 14));

// Задание:
//    Напишите функцию которая принимает массив чисел и возвращает новый массив
//    в котором на месте каждого элемента выведено положительное это число или нет
// Примеры:
//    arrayToPositivity([1, -2, 3]) // положительное, отрицательное, положительное

// function arrayToPositivity(arr2) {
//   let arr = [];
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] < 0) {
//       arr2[i] = "Отрицательное";
//       arr.push(arr2[i]);
//     } else {
//       arr2[i] = "Положительное";
//       arr.push(arr2[i]);
//     }
//   }
//   return arr;
// }
// console.log(arrayToPositivity([1, -2, 3]));

// const getRandomArr = (minVal, maxVal, len) => {
//     const resultArr = []
//     for (let i = 0; i < len; i++) {
//         const value = (math.round(math.random)() * (maxVal - minVal) + minVal));
//     }
//    resultArr 
// }
// console.log(getRandomArr(0, 10, 10));