// Работа с && (и) и || (или)
//  Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно',
// иначе выведите 'Неверно'.Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// let number = prompt("введите число");
// if (number > 0 && number < 5) {
//     alert('Верно');
// } else {
//     alert('Неверно')
// }

//  Если переменная a равна нулю или равна двум, то прибавьте к ней 7,
//     иначе поделите ее на 10. Выведите новое значение переменной на экран.Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// let number = +prompt("введите число");
// if (number === 0 || number === 2) {
//   alert(number + 7);
// } else {
//   alert(number / 10);
// }

// Если переменная a равна или меньше 1, а переменная b больше или равна 3, то
// выведите сумму этих переменных, иначе выведите их разность(результат вычитания).
// Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

// let first = +prompt("введите число");
// let second = +prompt("введите число");
// if (first <= 1 && second >= 3) {
//   alert(first + second);
// } else {
//   alert(first - second);
// }

//  Если переменная a больше 2 - х и меньше 11 - ти, или
//  переменная b больше или равна 6 - ти и
//  меньше 14 - ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

// let first = +prompt("введите число");
// let second = +prompt("введите число");
// if (first > 2 && )

// Задание 4

// Спросите у пользователя положительное число: и посчитайте сумму всех чисел от 1 до этого числа.
// Если число не положительное  — выводить ошибку.

// let number = +prompt("Ввеедите положительное число: ");

// while (isNaN(number)) {
//   alert("Введите корректное значение");
//   number = +prompt("Ввеедите положительное число: ");
// }

// let sum = 0;

// for (i = 0; i <= number; i++) {
//   sum = sum + i;
// }

// Задание 5

// Спросите у пользователя 3 числа: с какого числа выводить,
// по какое число выводить и на сколько увеличить число каждый раз и выведите подряд все числа.
// Если первый параметр больше второго — выводить ошибку.

//  Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

// let a = +prompt("vvedi chislo A: ");
// let b = +prompt("vvedi chislo B: ");

// let result = (a > 2 && a < 11) || (b >= 6 && b < 14) ? "Верно" : "Неверно";
// console.log(result);

// В переменной day лежит какое - то число из интервала от 1 до 31.
// Определите в какую декаду месяца попадает это число(в первую, вторую или третью).

// let day = prompt('Введите число месяца!');
// if( day > 31) {
//  alert('В месяце не может быть больше 31 дня!')
// } else {
//  if( day >= 1 && day <=10) {
//   alert('первая декада!');
//  } else if (day >= 11 && day <= 20){
//   alert('вторая декада');
//  } else {
//   alert('третья декада');
//  }
// }

//  В переменной month лежит какое - то число из интервала от 1 до 12.
//  Определите в какую пору года попадает этот месяц(зима, лето, весна, осень).

// let month = +prompt("введите дату месяца");
// if (month > 12) {
//   alert("месяцев не может быть больше 12");
// } else if (month >= 3 && month <= 5) {
//   alert("весна");
// } else if (month >= 6 && month <= 9) {
//   alert("лето");
// } else if (month >= 9 && month <= 11) {
//   alert("осень");
// } else {
//   alert("зима");
// }

// Задание 5

// Спросите у пользователя 3 числа: с какого числа выводить,
// по какое число выводить и на сколько увеличить число каждый раз и выведите подряд все числа.
// Если первый параметр больше второго — выводить ошибку.

// let from = +prompt("c какого числа выводим");
// let to = +prompt("по какое число выводим");
// if (from > to) {
//   console.log("some error");
// } else {
//   let step = +prompt("шаг");
//     for (let i = from; i < to; i = i + step)
//         console.log(i);
// }

// Задание 7

// Спросите у пользователя положительное число: и выведите все числа в обратном порядке до 0.
// Если число не положительное — выводить ошибку.

// let number = +prompt("введите положительное число");
// if (number <= 0) {
//   alert("число не может быть отрицательным");
// } else {
//   for (let i = number; i >= 0; i--) {
//     console.log(i);
//   }
// }

// Задание 8

// Спросите у пользователя 2 числа, и выведите подряд все числа
// начиная с первого по второе. Если первое число больше
// второго — выводить ошибку.

// let numberOne = +prompt('введите первое число');
// let numberTwo = +prompt('введите второе число');
// if (numberOne > numberTwo) {
//     alert('error')
// } else {
//     console.log(numberOne,numberTwo);
// }

// Задание 11

// Спросите у пользователя положительное число: и посчитайте сумму всех
// чисел от 1 до этого числа. Если число не положительное  — выводить ошибку.

let evenNum = +prompt(" введите положительное число");
let sum = 1;
if (evenNum < 0) {
  alert("error");
} else {
  for (let i = 0; i <= evenNum; i++) {
    sum = evenNum + i;
    console.log(sum);
  }
}

// let num = +prompt("Положительное число!");
// let start = 1;
// if (num < 0) {
//   alert("Нитуда!");
// } else {
//   let summ = 0;
//   for (summ; start <= num; start++) {
//     summ = summ + start;
//   }
//   alert(summ);
// }