let sum = 0;

for (let index = 20; index <= 35; index++) {
    sum += index;
    
}
console.log(sum);

let mult = 1;

for (let index = 10; index <= 15; index++) {
    mult = mult * index;
    
}
console.log(mult);

const numbers = [1, 5, -7, -88, 9, 44, 15, 35, -5, 10];

const positive_numbers = [];

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > 0) {
        positive_numbers.push(numbers[index]);
    }        
}
console.log(numbers);
console.log(positive_numbers);

// numbers - массив с числами
// i - индекс элемента массива (0-8)
// numbers[i] - элемент массива по индексу

const even_numbers = [];

for(let i = 0; i < numbers.length; i++){
  if(numbers[i] % 2 === 0){
    even_numbers.push(numbers[i])
  }
}
console.log(even_numbers);

const even_numbers1 = [];

for(let i = 0; i < numbers.length; i++) {
    numbers[i] % 2 === 0 ? even_numbers1.push(numbers[i]) : ''
}
console.log(even_numbers1);
// Условие ? true : false

// if(условие){
//   true
// } else {
//   false
// }

// 5. Сформировать новый массив из четных отрицательных чисел => [-88]
const even_negativ_numbers = [];

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 === 0 && numbers[index] < 0) {
        even_negativ_numbers.push(numbers[index])
    }
    
}
console.log(even_negativ_numbers);

// && И true и false = false
// || ИЛИ true или false = true

// 6. Сформировать новый массив из чисел, заканчивющихся на 5 => [5, 15, 35, -5]
const five_numbers = [];

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 10 === 5 || numbers[index] % 10 === -5) {
        five_numbers.push(numbers[index])
    }  
    
}
console.log(five_numbers);

// 7. Сформировать новый массив, состоящий их последних цифр чисел => [1, 5, -7, -8, 9, 4, 5, 5, -5, 0]
// const numbers = [1, 5, -7, -88, 9, 44, 15, 35, -5, 10];

const end_numbers = [];

for (let index = 0; index < numbers.length; index++) {
        end_numbers.push(numbers[index] % 10);
    
    
}
console.log(end_numbers)

const end_numbers2 = [];

for (let index = 0; index < numbers.length; index++) {
        end_numbers2.push(numbers[index] < 0 ? numbers[index] * -1 % 10 : numbers[index] % 10);
        
}
console.log(end_numbers2)