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