// Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
const arr = [7, 12, -2, 3, 4, 5, 16, 17, 5, 19, 10];
let sumArr = 0;

for (let index = 0; index < arr.length; index++) {  
    sumArr = sumArr + arr[index];    
    // sumArr += arr[index]; 
}
console.log(sumArr);

