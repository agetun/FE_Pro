// ДЗ (for и forEach)

// 1. Дан массив с числами. Вычислить сумму элементов массива
const nums = [4, 1, 15, 77, 33, 10, 55, 2];
let sumNums = 0;

for (let i = 0; i < nums.length; i++) {
  sumNums += nums[i]; 
}
console.log(sumNums);

let sumNumsEach = [];
nums.forEach(el => sumNumsEach.push(el += el))
console.log(sumNumsEach);


// 2. Дан массив со строками. Сформировать новый массив, в который попадут все строки из исходного массива, длина которых больше 7 символов
const strArr = ['City', 'Town', 'Descriptions', 'Underfined']
let newStrArr = [];

for (let i = 0; i < strArr.length; i++) {
  if (strArr[i].length > 7) {
    newStrArr.push(strArr[i]);
  }
}
console.log(newStrArr)

// 3. Дан массив со строками. Сформировать новый массив, в который попадут все строки из исходного массива, которые начинаются на букву D или d
// 4. Дан массив с числами. Сформировать новый массив, в который попадут все числа из исходного массива, возведенные в 3 степень
// 5. Дан массив с числами. Сформировать новый массив, в который попадут все числа из исходного массива, заканчивающиеся на 7

