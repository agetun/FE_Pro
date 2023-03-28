// ДЗ (for и forEach)

// 1. Дан массив с числами. Вычислить сумму элементов массива
const nums = [4, 1, 15, 77, 33, 10, 55, 2];
let sumNums = 0;

for (let i = 0; i < nums.length; i++) {
  sumNums += nums[i]; 
}
console.log(sumNums);

let sumNumsEach = 0;
nums.forEach(el => sumNumsEach += el)
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

const strings = ['hello', 'apple', 'orange', 'good morning', 'danke', 'duck', 'dinosaure'];

const long_strings = [];
strings.forEach(el => el.length > 7 ? long_strings.push(el) : '');

console.log(long_strings);

// 3. Дан массив со строками. Сформировать новый массив, в который попадут все строки из исходного массива, которые начинаются на букву D или d
const d_strings = [];
strings.forEach(el => el[0].toLowerCase() === 'd' ? d_strings.push(el) : '');
console.log(d_strings);

// 4. Дан массив с числами. Сформировать новый массив, в который попадут все числа из исходного массива, возведенные в 3 степень
// const numbers_pow = [];
// numbers.forEach(el => numbers_pow.push(el ** 3));

// 5. Дан массив с числами. Сформировать новый массив, в который попадут все числа из исходного массива, заканчивающиеся на 7
// const numbers_7 = [];
// numbers.forEach(el => el % 10 === 7 ? numbers_7.push(el) : '');