// Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5. Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите.
const arr = [7, 12, -2, 3, 4, 5, 16, 17, 5, 19, 10];

for (let index = 0; index < arr.length; index++) {
    if (arr[index] === 5) {
        console.log("Есть!");
        break;
    }
    
}
console.log(arr);