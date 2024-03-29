// МЕТОДЫ МАССИВА

const numbers = [1, 2, 3, 4, 5];

numbers.push(6); // добавляет элемент в конец массива
numbers.unshift(0); // добавляет элемент в начало массива
numbers.pop(); // удаляет элемент из конца массива
numbers.shift(); // удаляет элемент из начала массива

console.log(numbers);


// Методы массивов, принимающие в качестве аргумента другую функцию (callback-функцию)

// .forEach() - ничего не возращает (undefined), выполняет указанную функцию один раз для каждого элемента массива

// 1. Дан массив с числами. Создать новый массив, в который войдут все числа из исходного массива, умноженные на 10

const nums = [4, 1, 15, -77, 33, -10, 55, 2];

const multNums = [];
for (let i = 0; i < nums.length; i++) {
    multNums.push(nums[i] * 10);    
}

const multNums_forEach = [];
nums.forEach(el => multNums_forEach.push(el * 10))

console.log(multNums);
console.log(multNums_forEach);


// Сформировать массив, в который войдут все положительные числа из исходного массива

const allPositiveNums = [];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
        allPositiveNums.push(nums[i]);
    }    
}

const allPositiveNums_forEach = [];
nums.forEach(el => el > 0 ? allPositiveNums.push(el) : '');

nums.forEach(el => {
    if (el > 0) {
        allPositiveNums_forEach.push(el)

}
})  
   

console.log(allPositiveNums);
console.log(allPositiveNums_forEach);

// ДЗ (for и forEach)
// 1. Дан массив с числами. Вычислить сумму элементов массива
// 2. Дан массив со строками. Сформировать новый массив, в который попадут все строки из исходного массива, длина которых больше 7 символов
// 3. Дан массив со строками. Сформировать новый массив, в который попадут все строки из исходного массива, которые начинаются на букву D или d
// 4. Дан массив с числами. Сформировать новый массив, в который попадут все числа из исходного массива, возведенные в 3 степень
// 5. Дан массив с числами. Сформировать новый массив, в который попадут все числа из исходного массива, заканчивающиеся на 7
