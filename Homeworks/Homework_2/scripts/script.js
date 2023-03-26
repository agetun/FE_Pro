//  Легкий уровень:
console.log("Напишите функцию, которая принимает два числа +и возвращает большее из них.");
function getMax1(a1, b1) {
    console.log(Math.max(a1, b1));
}
getMax1(777, 888);

const getMax2 = (a, b) => Math.max(a, b);
console.log(getMax2(777, 999));

console.log("Напишите функцию, которая принимает число и возвращает его квадрат.");
const powNum1 = c => c ** 2;
console.log(powNum1(5));
const powNum2 = d => Math.pow(d, 2);
console.log(powNum2(7));

console.log("Напишите функцию, которая принимает строку и возвращает ее длину.");
let str1 = 0;
function getStrLength1(str1) {
    str1 = str1.length;
    return str1;
} 
console.log(getStrLength1("abc"));

const getStrLength2 = str2 => str2.length;
console.log(getStrLength2("abc"));

console.log("Напишите функцию, которая принимает два числа и возвращает их сумму.");
let sum = 0;
function getSum1(e1, f1) {
    sum = e1 + f1;
    return sum;
}
console.log(getSum1(12, 77))

const getSum2 = (e2, f2) => e2 + f2;
console.log(getSum2(7, 8));


// Средний уровень:
console.log("Напишите функцию, которая принимает массив чисел и возвращает новый массив, в котором все числа умножены на 2.");
const createNewArray = arr => {
    const result = [];
    for(let i = 0; i < arr.length; i++){
      result.push(arr[i] * 2)
    }
    return result
  }  
  console.log(createNewArray([2, 3, 4, 5])); // => [4, 6, 8, 10]


  console.log("Напишите функцию, которая принимает строку и возвращает новую строку, в которой все гласные заменены на символ '*'.");
const changeLetters = str => {
    let new_str = '';
    for(let i = 0; i < str.length; i++){
      if(str[i].toLowerCase() === 'a' || str[i].toLowerCase() === 'e' || str[i].toLowerCase() === 'i' || str[i].toLowerCase() === 'o' || str[i].toLowerCase() === 'u' || str[i].toLowerCase() === 'y') {
        new_str += '*'
      } else {
        new_str += str[i]
      }
    }
    return new_str
  }
  
  console.log(changeLetters('hello')); // h*ll*
  console.log(changeLetters('GOOD morning')); // G**D m*rn*ng

//   Напишите функцию, которая принимает массив чисел и возвращает среднее значение
const getAvgNum = arr => {
    let sum = 0;
  
    for(let i = 0; i < arr.length; i++){
      sum += arr[i]
    }
  
    return sum / arr.length
  }
  
  // console.log(getAvgNum([3, 5])); // 4
  // console.log(getAvgNum([1, 2, 3])); // 2

  //  Функция, которая принимает массив чисел и возвращает новый массив, в котором все числа умножены на 2.



