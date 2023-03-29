// МЕТОДЫ МАССИВА

// .forEach() - выполняет указанную функцию один раз для каждого элемента массива, ничего не возвращает

// .map() - выполняет указанную функцию один раз для каждого элемента массива, возвращает новый массив

// .filter() - возвращает новый массив, в который попадают те элементы, которые прошли указанную проверку


//=======================================================
// Методы массивов, принимающие в качестве аргумента другую функцию (callback-функцию)

// .forEach() - ничего не возращает (undefined), выполняет указанную функцию один раз для каждого элемента массива

// 1. Дан массив с числами. Создать новый массив, в который войдут все числа из исходного массива, умноженные на 10
//===================================================


// 1. Дан массив с числами. Сформировать новый массив, в который попадут все числа из исходного массива, возведенные в 3 степень
const numbers = [4, 6, 1, 17, 9, 15, 27, 43, 7];

// это императивный подход - КАК сделать, то есть пошагово (подробно) прописываем каждый шаг
const numbers_pow0 = [];
for (let i = 0; i < numbers.length; i++) {
    numbers_pow0.push(numbers[i] ** 3);
    
}

// почти декларативный подход - ЧТО сделать - скорее смешанный метод
const numbers_pow = [];
numbers.forEach(el => numbers_pow.push(el ** 3));
console.log(numbers_pow);

// декларативный подход - ЧТО сделать и программа знает как сделать через свой метод
const numbers_pow2 = numbers.map(el => el ** 3);

console.log(numbers_pow2);

// 2. Сформировать новый массив, в который попадут все последние цифры => [4, 6, 1, 7, 9, 5, 7, 3, 7]

// .forEach()
const numbers_end = [];
numbers.forEach(el => numbers_end.push(el % 10));
console.log(numbers_end);

// .map()
const numbers_end2 = numbers.map(el => el % 10);
console.log(numbers_end2);

// 3. Сформировать новый массив, в который попадут все элементы из исходного массива. Если длина элемента меньше 6 (<), то добавить к этой строке 1 => ['hello1', 'apple1', 'orange', 'good morning', 'danke1', 'duck1', 'dinosaure']

const strings = ['hello', 'apple', 'orange', 'good morning', 'danke', 'duck', 'dinosaure'];

// .forEach()
const six_strings = [];
strings.forEach(el => el.length < 6 ? six_strings.push(el + "1") : six_strings.push(el));
// strings.forEach(el => six_strings.push(el.length < 6 ? el + 1 : el));
console.log(six_strings);




// .map()
const strings_2 = strings.map(el => el.length < 6 ? el + 1 : el);
console.log(strings_2)

// const six_strings2 = strings.map(el => {
//     if (el.length < 6) {
//         return el + '1';
//     }
//     return el;
// } )
// console.log(six_strings2)

// 4. Дан массив с числами. Сформировать новый массив, в который попадут все числа из исходного массива. Если число четное, то поделить его на 2, а если нечетное - умножить на 2

const changed_nums = [];
numbers.forEach(el => changed_nums.push(el % 2 === 0 ? el / 2 : el * 2));
// // Условие ? true : false

numbers.forEach(el => {
  if(el % 2 === 0){
    changed_nums.push(el / 2)
  } else {
    changed_nums.push(el * 2)
  }
});

const changed_nums1 = numbers.map(el => el % 2 === 0 ? el / 2 : el * 2);


// 5. Дан массив с разными типами данных. Сформировать новый массив - если элемент является числом, то заменить его на строку 'number' => ['number', 'hello', true, 'hi', 'number', 'number', false]

const arr = [3, 'hello', true, 'hi', 7, 10, false];



// typeof
const changed_arr = arr.map(el => typeof el === 'number' ? 'number' : el);

const newArr = arr.map(el => {
  if (typeof el === 'number') {
    return 'number';
  }
  return el;
});

console.log(newArr); // ['number', 'hello', true, 'hi', 'number', 'number', false]


// 6. Дан массив с числами. Сформировать новый массив - если число меньше 0, то вернуть в массив 'negative'. А если больше 0 - 'positive' => ['positive', 'negative', 'positive', 'negative', 'negative', 'positive']

const nums = [3, -9, 100, -7, -4, 33];

const newNums = nums.map(el => el < 0 ? 'negative' : 'positive');

console.log(newNums)

//==============.filtr============

// 7. Дан массив со строками. Сформировать новый массив, в который попадут все строки из исходного массива, которые начинаются на букву D или d

const strings1 = ['hello', 'apple', 'orange', 'good morning', 'danke', 'duck', 'dinosaure'];

const d_strings = [];
strings1.forEach(el => el[0].toLowerCase() === 'd' ? d_strings.push(el) : '');

const filtered_strings = strings1.filter(el => el[0].toLowerCase() === 'd');

// ========не по этой теме, но можно обратиться к букве=======
const str = 'nelli'; 
console.log(str[0]);
console.log(str[2]);
//=======================================================

// 8. Дан массив со строками. Сформировать новый массив, в который попадут все строки из исходного массива, длина которых больше 7 символов

const filtered_strings_2 = strings1.filter(el => el.length > 7)
console.log(filtered_strings_2);


// 9. Дан массив строк. Используйте метод map для преобразования каждой строки в новую строку, которая будет содержать ту же строку в верхнем регистре

const upString = strings1.map(el => el.toUpperCase());

console.log(upString);

// 10. Напишите функцию, которая принимает массив чисел и возвращает новый массив чисел, в котором каждое число возведено в квадрат.
const powNums = arr => arr.map(el => el ** 2);
console.log(powNums([1,2,3,4]));



// ДЗ
// 1. Напишите функцию, которая принимает массив строк и возвращает новый массив строк, в котором все первые буквы каждого слова написаны заглавными буквами.
// 2. Напишите функцию, которая принимает массив чисел и возвращает новый массив чисел, содержащий только положительные числа.
// 3. Напишите функцию, которая принимает массив чисел и возвращает новый массив чисел, содержащий только нечетные числа.
// 4. Создайте новый массив, содержащий только элементы исходного массива, которые делятся на три без остатка.
// 5. Создайте новый массив, содержащий только те элементы исходного массива, которые больше чем 10 и меньше чем 20.
// 6. Создайте новый массив, содержащий только те элементы исходного массива, которые не являются строками.
// *7. Макет: https://www.figma.com/file/RbKedig5BcfNRyZ64Tdfow/Lamp?t=WJWTgZs8pWAWRVRE-0

