// const user = {
//   userName: "Ivan",
//   adress: {
//     city: "Moscow",
//     street: "Lenina",
//   },
//   "user-skills": ["html", "css", "js"],
// };
// user.adress.street = 'Pobedy'
// user.password = 'supersecret'
// console.log(user);
// console.log(user.userName);
// console.log(user.userName.city);
// console.log(user["user-skills"]);
// user["user-skills"] = { html: 110, css: 150 };

// let str = "some string"
// let copyOfStr = 'another string'
// copyOfStr = "another string";
// console.log(str);
// console.log(copyOfStr);

// const copyOfUser = user;
// copyOfUser = 'Danil'
// console.log(user);
// console.log(copyOfUser);
// console.log(user === copyOfUser);

// Задачи

// 1. Напишите код, выполнив задание из каждого пункта отдельной строкой:
// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// const user = {}
// user.name = 'John'
// user.surname = 'Smith'
// user.name = 'Pete'

// 2. Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// Должно работать так:
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

//  function isEmpty(obj) {
//    for(let key in obj) {
//      return false;
//    }
//    return true;
//  }

// 3. У нас есть объект, в котором хранятся зарплаты:
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }

// console.log(sum);

// 4. Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// Например:

// до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

//  после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
// P.S. Используйте typeof для проверки, что значение свойства числовое.

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//       if (typeof obj[key] == "number")
//           obj[key] *= 2;
//   }
// }
// multiplyNumeric(menu);
// console.log(menu);

// 5. Создайте объект city, укажите у него свойства name (название города, строка) со значением «ГородN» и population (населенность города, число)
// со значением началения.
// Создайте фукнцию getName(object), которая возвращает название города
// Создайте фукнцию exportStr(object). Она должна возвращать информацию о городе в формате «name=ГородN\npopulation=10000000\n».

// let city = {
//     name: "ГородN",
//     population: "300 000"
// }

// function getName(object) {

//     return name;
// }

// function exportStr(object) {
//     return
// }

// 6. Создайте объект salaries, в котором хранятся зарплаты в виде строк
// let salaries = {
//   John: "100",
//   Ann: "160",
//   Pete: "130",
// };
// Создайте правильный клон salaries и назовите premium, где каждую зп нужно увеличить вдвое (квартальная премия)

// let premium = {};
//     Object.assign( premium, salaries);
// for (key in premium) {
//     premium[key] *= 2
// }
// console.log(premium);
