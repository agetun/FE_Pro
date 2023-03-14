console.log("Напишите цикл, который выводит в консоль числа от 1 до 10.");
for (let i = 1; i <= 10; i++) {
    console.log(i);    
}

console.log("Напишите цикл, который находит наименьшее число в массиве.");
let arr1 = [15, 29, 88, 7, 99, 37];
let minElement = arr1[0];

for (let i = 1; i < arr1.length; i++) {
  if (arr1[i] < minElement) {
    minElement = arr1[i];
  }
}

console.log(minElement);


console.log("Напишите цикл, который считает сумму всех чисел от 1 до 100.");
let sum = 0;

for (let index = 1; index <= 100; index++) {
    sum = sum + index;
        
}

console.log(sum);

console.log("Напишите цикл, который выводит в консоль каждый второй элемент массива.");
const arr2 = [12, 14, 77, 88, 99, 7, 8, 4, 19];

for (let index = 1; index < arr2.length; index += 2) {
    console.log(arr2[index]);
    
}

console.log("Напишите цикл, который находит наибольшее число в массиве.");

let arr3 = [7, 99, 3, 55, 10, 8];
let maxElement = arr3[0];

for (let i = 1; i < arr3.length; i++) {
  if (arr3[i] > maxElement) {
    maxElement = arr3[i];
  }
}

console.log(maxElement);


console.log("1. Средний уровень сложности:");
console.log("Напишите цикл, который выводит в консоль все простые числа от 2 до 100.");

for (let index = 2; index < 100; index++) {
  if (index % 2 === 0) {
    console.log(index);
  }
  
}

console.log("2. Напишите цикл, который находит среднее арифметическое всех чисел в массиве.");

const arr4 = [3, 7, 88, 99, 14, 5, 9];
let sumArr4 = 0;

for (let index = 0; index < arr4.length; index++) {
  sumArr4 += arr4[index];  
}
let average = sumArr4 / arr1.length;

console.log("Среднее арифметическое массива: " + average);

console.log("3. Напишите цикл, который выводит в консоль таблицу умножения на 5.");
for (let index = 1; index <= 10; index++) {
  let result = 5 * index;
  console.log("5 * " + index + " = " + result);
}

console.log("4. Напишите цикл, который переворачивает порядок элементов в массиве.");

const arr5 = [1, 2, 3, 4, 5];
let reversedArr = [];

for (let i = arr5.length - 1; i >= 0; i--) {
  reversedArr.push(arr5[i]);
}

console.log("Исходный массив: " + arr5);
console.log("Перевернутый массив: " + reversedArr);

console.log("5. Напишите цикл, который находит сумму элементов массива, кратных 3 или 5.")
const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumArr6 = 0;

for (let i = 0; i < arr6.length; i++) {
  if (arr6[i] % 3 === 0 || arr6[i] % 5 === 0) {
    sum += arr6[i];
  }
}

console.log("Сумма элементов массива, кратных 3 или 5: " + sum);