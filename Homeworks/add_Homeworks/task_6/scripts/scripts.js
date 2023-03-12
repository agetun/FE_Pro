// Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части.

const arr = [];

for (let index = 0; index < 10; index++) {
    arr.push(Math.random(index).toFixed(2));    
}
console.log(arr);