// Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.
const arr = [];

for (let index = 0; index < 10; index++) {
    arr.push(Math.round(Math.random() * 10) + 1);    
}
console.log(arr);