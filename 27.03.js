// splice

// let arr = [];
// for (let i = 0; i <= 10; i++) {
//     arr.push(i)
// }
// console.log(arr);
// arr.splice(5, 1)
// console.log(arr);
// arr.splice(5, 0, 55)
// console.log(arr);
// arr.splice(1, 1, 11)

// slice - создает новый массив. Вырезает часть.
// let sliceArr = arr.slice(5, 11)
// let arr = [];
// for (let i = 0; i <= 10; i++) {
//   arr.push(i);
// }
// console.log(arr);
// console.log(sliceArr);

// concat - создает новый массив и объединяет массивы.
// let concatArr = arr.concat('Apple')
// console.log(arr);
// console.log(concatArr);

// for each - перебор массива
// let arr = [];
// for (let i = 0; i <= 10; i++) {
//     arr.push(i)
// }
// arr.forEach((elem, id)) => {
//     console.log(`index = `);
// }

// indexOf - поиск индекса массива по элементу
// let fruits = ["Яблоко", "Апельсин", "Яблоко"];
// console.log(fruits);
// let indexFruit = fruits.indexOf("Яблоко");
// console.log(indexFruit);

// includs - проеряет есть ли элемент в массиве

// find - ищет элемент в массиве и возвращает его
// console.log(concatArr);
// let findArr = concatArr.find((elem) => == "apple")
// console.log(findArr);
// function cb(elem) {
//     if elem == "apple" {
//         return true
//     }
// }

// findIndex - возвращает индекс найденного элемента
// let findInd = concatArr.findIndex((elem) => elem == "apple")
// console.log(findInd);

// filter - возвращает массив из найденных элементов
// let.filterArr = concatArr.filter((el) => el == "apple")
// console.log(filterArr);
// console.log(concatArr.filter(elem, idx) => idx % 2 !== 0);

// map - заменяет все элементы в массиве

// console.log(concatArr);
// let mapArr = concatArr.map((elem) => {
//     if (elem % 2 == 0)
//         return 'нечетное'
// })

// sort - соритирует массив и меняет порядок его элементов
// let newArr = ['Apple', 'Orange', "Peach', 'Banana']

// split - преобразует строку в массив
// let srt = "1, 2, 3, 4, 5"
// console.log("");

// join - преобразует массив в строку

// reduce

// Задание 0:
// Написать функцию, которая находит все уникальные элементы в массиве

// let arr = [2, 3, 5, 7, 5, 9, 0, 8];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

// let arrUnique = arr.filter(function (elem) {
//   return arr.indexOf(elem) === arr.lastIndexOf(elem);
// });
// console.log(arrUnique);

// let arr = [2, 3, 5, 7, 5, 9, 0, 8, 2];
// console.log(arr.includes(2));

// Задание 1:
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

// let newArr = arr.map((elem) => (elem > 0 ? "положительное" : "отрицательное"));
// return newArr;
// console.log([1, -2, 3]);

// Задание 2:
//    Напишите функцию которая оставляет в переданном массиве только числа
// Примеры:
//    onlyNumbers([1,2,null,"3",NaN]) // [1,2]


// function onlyNumbers(arr) {
//   let numbers = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!isNaN(arr[i]) && typeof arr[i] == "number") {
//       numbers.push(arr[i]);
//     }
//   }
//   return numbers;
// }
// console.log(onlyNumbers([1, 2, null, "3", NaN]));



// Задание 3:
//    Напишите функцию которая проверяет есть ли
//    переданном массиве числа
// Примеры:
//    hasNumbers([1,2,null,"3",NaN]) // true
//    hasNumbers([null,"3",NaN]) // false



// Задание 7: 
//    Напишите функцию которая находит самый частый элемент в массиве 
//    и сколько раз этот элемент встречался в массиве 
// Примеры: 
//    const items = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; 
//    findMostUsedElement(items) // ['a', 5] 
 
// const items = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// function findMostUsedElement(items) {
//     let value
//     let countMax = 0
//     for (let i = 0; i < items.length; i++) {
//         // items[i]
//         let count = 0
//         for (let j = i; j < items.length; j++) {
//             if (items[i] === items[j]) {
//                 count++
//             }
//         }
//         if (count > countMax) {
//             value = items[i]
//             countMax = count
//         }
//         console.log(`Element: ${items[i]}, count: ${count}`);
//     }
//     return {value, countMax}
// }

// let res = findMostUsedElement(items)
// console.log(res);


//    Напишите функцию которая проверяет есть ли
//    переданном массиве числа
// Примеры:
//    hasNumbers([1,2,null,"3",NaN]) // true
//    hasNumbers([null,"3",NaN]) // false

// let arr = [1, 2, null,  NaN];
// let hasNumbers = arr.some(function (elem) {
//     return Number.isFinite(elem)
// });
// console.log(hasNumbers);