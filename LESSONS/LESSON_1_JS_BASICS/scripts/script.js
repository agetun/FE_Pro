// console.log('hello');

// let a =10;
// a = 100;
// console.log(a);

// const b = 12;
// b = 120; // так делать нельзя
// console.log(b);

// const numbers = [1, 2, 3, 4, 5];

// numbers.push(6)

// console.log(numbers);

//Задана переменная number. Если знач больше 

// let number = 15;

// в уроке

// ТЕРНАРНЫЙ ОПЕРАТОР
// Условие ? true : false

// number >= 10 ? console.log('hello') : console.log('hi');

//ЦИКЛЫ

// Вывести в консоль от 0 до 10

// for (let i = 0; i <= 20; i+=10) {
//     console.log(i);
// }

// i = i + 1;
// i += 1
// i++
// i = i - 1;
// i -= 1
// i--

//Вывести каждое третье число от 15 до 96

// for (let i = 15; i <= 96; i+=3) {
//     console.log(i);
// }

// Вывести каждое третье число от 96 до 15
// for (let i = 96; i >= 15; i-=3) {
//     console.log(i);
// }

// 100 to 57
// for (let i = 100; i >= 57; i--) {
//     console.log(i);
// }

//МАССИВЫ

const numbers = [6, 7, 1, -10, 78, 18, -5, -38, 9];

// const positive_numbers = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 0) {
//         positive_numbers.push(numbers[i])
//     }
// }

// console.log(positive_numbers);

//
// const mult_numbers = [];
// for (let i = 0; i < numbers.length; i++) {
//     mult_numbers.push(numbers[i] * 2);

// }

// console.log(mult_numbers);

//новый массив с положительными делёнными на два
const div_pos_numbers = [];
for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            div_pos_numbers.push(numbers[i] / 2);
        }
    }

console.log(div_pos_numbers);


const num_forEach = [];

numbers.forEach(el => el > 0 ? num_forEach.push(el) : '');
console.log(num_forEach)