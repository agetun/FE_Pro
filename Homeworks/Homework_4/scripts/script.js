// ДЗ
// 1. Напишите функцию, которая принимает массив строк и возвращает новый массив строк, в котором все первые буквы каждого слова написаны заглавными буквами.

const strings1 = ['hello', 'apple', 'orange', 'good morning', 'danke', 'duck', 'dinosaure'];

function uppFirstLetter(arrStr) {
  return arrStr.map(str => str.replace(/^\w/, c => c.toUpperCase()));
}
const uppLetter = uppFirstLetter(strings1)

console.log(uppLetter)
//===========================================================================
const firstLetterUp = arr => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
const firstLetterUp1 = arr => arr.map(str => str[0].toUpperCase() + str.slice(1));

console.log(firstLetterUp1(['hello', 'hey', 'apple', 'orange']));

// 2. Напишите функцию, которая принимает массив чисел и возвращает новый массив чисел, содержащий только положительные числа.

const arr = [7, 9, -14, 3, -8, -3, 77, 9, 12, 17]
let positiveNumbers = [];
function getPositiveNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveNumbers.push(arr[i]);
    }    
  }
  return positiveNumbers;
}
console.log(getPositiveNumbers(arr));

//===========================================
const getPositiveNumbers2 = getArr => getArr.filter(el => el > 0);

console.log(getPositiveNumbers2(arr));

// 3. Напишите функцию, которая принимает массив чисел и возвращает новый массив чисел, содержащий только нечетные числа.

let oddNumbers = [];
function getOddNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddNumbers.push(arr[i]);
    }    
  }
  return oddNumbers;
}
console.log(getOddNumbers(arr));

//=======================================
const getOddNumbers_filter = num => num.filter(el => el % 2 !== 0);

console.log(getOddNumbers_filter(arr));

// 4. Создайте новый массив, содержащий только элементы исходного массива, которые делятся на три без остатка.

let threeNumbers = [];
function getThreeNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      threeNumbers.push(arr[i]);
    }    
  }
  return threeNumbers;
}
console.log(getThreeNumbers(arr));

//=======================================
const getThreeNumbers_filter = getNum => getNum.filter(el => el % 3 === 0);

console.log(getThreeNumbers_filter(arr));

// 5. Создайте новый массив, содержащий только те элементы исходного массива, которые больше чем 10 и меньше чем 20.

let tenTwentyNumbers = [];
function getTenTwentyNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10 && arr[i] < 20) {
      tenTwentyNumbers.push(arr[i]);
    }    
  }
  return tenTwentyNumbers;
}
console.log(getTenTwentyNumbers(arr));

//==========================================
const tenTwentyNumbers_filter = arr.filter(el => el > 10 && el < 20);

console.log(tenTwentyNumbers_filter);

// 6. Создайте новый массив, содержащий только те элементы исходного массива, которые не являются строками.
const numbersString = [7, 78, 'first', 37, -77, -88, 99,'seven', 12, 18];

const newNotString = numbersString.filter(el => typeof el !== 'string');
console.log(newNotString)

// *7. Макет: https://www.figma.com/file/RbKedig5BcfNRyZ64Tdfow/Lamp?t=WJWTgZs8pWAWRVRE-0

