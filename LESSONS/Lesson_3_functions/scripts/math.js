const a = Math.max(6, 3, -10, 73);
const b = Math.min(6, 3, -10, 73);

const c = Math.abs(4);
const d = Math.abs(-4);

const e = Math.ceil(4.0001); //  5 - всегда вверх округляет
const f = Math.floor(4.73);//  4 - всегда вниз округляет
const g = Math.round(4.73);// 5 - по правилам математики

const h = Math.pow(6, 2); // 6 ** 2 === 36
const h1 = Math.sqrt(36); // корень 6 

const j = Math.random(); //случайное дробно число от 0 до 1


console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log("===========");
console.log(e);
console.log(f);
console.log(g);
console.log("===========");
console.log(j);

const numbers = [1, 5, -7, -88, 9, 44, 15, 35, -5, 10];

// Сформировать новый массив из чисел, заканчивющихся на 5 => [5, 15, 35, -5]

const numbers_five = [];

for(let i = 0; i < numbers.length; i++) {
  if(Math.abs(numbers[i] % 10) === 5){
    numbers_five.push(numbers[i])
  }
}

console.log(numbers_five);

// 5 % 10 === 5
// 15 % 10 === 5
// 35 % 10 === 5
// -5 % 10 === -5

// 2. Сформировать новый массив, состоящий из последних цифр чисел (без -) => [1, 5, 7, 8, 9, 4, 5, 5, 5, 0]

const numbers1 = [1, 5, -7, -88, 9, 44, 15, 35, -5, 10];
let lastNum = [];

for (let index = 0; index < numbers1.length; index++) {
    // if (numbers1[index] % 10 === )
    lastNum.push(Math.abs(numbers1[index] % 10));    
}
console.log(lastNum)

const getMaxNum = (num1, num2, num3) => Math.max(num1, num2, num3);

const getMaxNum1 = (a, b, c) => {
   const max = Math.max(a, b, c);
   return max;
}
console.log(getMaxNum(3, 7, 99));
console.log(getMaxNum1(3, 7, 99));

// 4. Написать функцию, которая принимает два числа - основание степени и показатель степень и возвращает результат возведения числа в степень
let res = 0; // либо так что переменная была доступна
const twoNum = (num1, num2) => {
    res = Math.pow(num1, num2);
    return res;
}
// twoNum(7, 2)
console.log(twoNum(7, 2)); // либо так

// 5. Сгенерировать случайное целое число от 0 до 10

const tenNum = Math.round(Math.random() * 10); // 10 не будет
const tenNum2 = Math.floor(Math.random() * 11); // 10 будет
console.log(tenNum);

// 6. Сгененировать случайное целое число от 10 до 20
const wholeNum = Math.round(Math.random() * 10 + 10);
console.log(wholeNum);

// 8. Сгененировать случайное целое число от 15 до 30
const randNum = Math.round(Math.random() * 15 + 15);
console.log(randNum);

// 9. Написать функцию, которая принимает массив со строками. И формирует новый массив со строками, чья длина превышает 5 символов

// 9. Написать функцию, которая принимает массив со строками. И формирует новый массив со строками, чья длина превышает 5 символов

const greetings = ['hello', 'hi', 'good morning', 'good afternoon', 'hey']; // ['good morning', 'good afternoon']

const getLongWords = arr => {
  const result = [];
  for(let i = 0; i < arr.length; i ++){
    if(arr[i].length > 5){
      result.push(arr[i])
    }
  }
  return result
}

console.log(getLongWords(greetings));

// const greetings = ['hello', 'hi', 'good morning', 'good afternoon', 'hey']; // ['good morning', 'good afternoon']


// let greetingsNew = [];

// for (let index = 0; index < greetings.length; index++) {
//     if (greetings.length > 5) {
//         greetingsNew.push(greetings[index])
//     }
    
// }
// console.log(greetingsNew)