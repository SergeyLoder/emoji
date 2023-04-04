// let user = {
//     name: "Vasya",
//     age: 21
//     obj: {
//         x: 1,
//         y: 2,
//     }
// }
// let objStr = JSON.stringify(user)

// console.log(objStr);
// console.log(JSON.parse(objStr));

// let teat = `{"name: \"Vasya"}`
// let oldObj = JSON.parse(test)
// console.log(oldObj);

// try {
//   lalala;
// } catch (e) {
//     console.log('error');
// }

// let user = '{"name": "Vasya", "age": 21, "isAdmin": true}';
// try {
//   let obj = JSON.parse(user);
//   console.log(obj);
//     if ("isAdmin" in obj == false)
//         throw new Error ("поля isAdmin нет");
// } catch (e) {
//   console.log(e);
// }

// let str = "wow win a v wow win"
// let arr2 = str.split(" ")
// [...new Set(arr2)].join(" ")

// const data = [
//   { username: "Ivan", age: 48, gender: "male" },
//   { username: "Danil", age: 29, gender: "male" },
//   { username: "Oleg", age: 58, gender: "male" },
//   { username: "Yuri", age: 32, gender: "male" },
//   { username: "Alex", age: 38, gender: "male" },
//   { username: "Isabella", age: 35, gender: "female" },
//   { username: "Oksana", age: 26, gender: "female" },
//   { username: "Igor", age: 24, gender: "male" },
//   { username: "Vladislav", age: 22, gender: "male" },
//   { username: "Valentina", age: 48, gender: "female" },
//   { username: "Sofia", age: 13, gender: "female" },
//   { username: "Danil", age: 80, gender: "male" },
//   { username: "Vitaliy", age: 17, gender: "male" },
// ];

//Написать функцию getStr, которая принимает параметром объект!!!,
// и возвращает строку ввида - "Уважаемая(ый) username, тебе - age лет."

// getStr({ username: "Vitaliy", age: 17, gender: "male" }) // "Уважаемый Vitaliy, тебе - 17 лет."
// getStr({ username: "Sofia", age: 13, gender: "female" }) // "Уважаемая Sofia, тебе - 13 лет."

//С помощью метода forEach, пройтись по массиву data, и запустить для каждого элемента массива эту функцию,
// чтобы получить на выходе столько строк, сколько элементов в массиве.

//"Уважаемая(ый) username, тебе - age лет."
// function getStr(obj) {
//   return ;
// }

// / 12. Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.


// let calculator = {
//   read() {
//     this.a = +prompt("a?", 0);
//     this.b = +prompt("b?", 0);
//   },
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },
// };

// console.log(calculator.read()); 
// console.log(calculator.mul()); 



// 13. Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться: 
 
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     alert(this.step);
//     return this;
//   },
// };

// ladder.up().up().down().up().down().showStep();
 
// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так: 
 
// ladder.up(); 
// ladder.up(); 
// ladder.down(); 
// ladder.showStep(); 
 
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так: 
 
// ladder.up().up().down().showStep();
