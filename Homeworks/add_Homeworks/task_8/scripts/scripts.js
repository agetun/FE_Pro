// Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
const arr = [0, -1, -2, 3, 4, 5, -6, 7, 8, -9, 10];

for (let index = 0; index < arr.length; index++) {
    if (arr[index] > 0 && arr[index] < 10) {
        console.log(arr[index]);
    }
    
}
console.log(arr);