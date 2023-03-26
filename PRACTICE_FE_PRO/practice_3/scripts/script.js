// Задание 1: 

// Написать функцию стрелочную - которая ничего не далает и назвать ее
// const fun = num => num

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// const min = (a, b) => {
//     if (a < b) {
//         return a;
//     } else if (a > b) {
//         return b;
//     } else {
//         return "a=b";
//     }
// } 
// console.log(min(7, 7));


// Задание номер 3:

// Написать функцию - которая вернет слово большее по количеству букв. Стрелочная. Принимать в качестве аргументов она должна 2 слова
const maxWord = (word1, word2) => {
    let w1 = word1.length;
    let w2 = word2.length;
    
    if (w1 < w2) {
        return word1;
    } else if (w1 > w2) {
        return word2;
    } else {
        return "w1 = w2"
    }
} 
console.log(maxWord("slova", "af"))

// Задание 4:

// Написать функцию. Стрелочную. Принимает аргементом строку - пароль. Возвращает true если пароль длинее или равен 7 символам. Иначе возвращает false

const password = (pass) => {
    if (pass.length >= 7) {
        return true;
    } else {
        return false;
    }
}
console.log(password(3345645643));

const checkPass = (pass) => pass.length >= 7;

console.log(checkPass("777777777777777777777"))

// Задача 5:

// Написать стрелочную функцию, которая перебирает массив слов. Массив слов передается через аргумент. И возвращает нам самое длинное слово

// function giveMeTheLongestWord(words) {
    // code
    // }
    
    // const arr = ['Oli', 'Done', 'Apple'];
    
    // console.log(giveMeTheLongestWord(arr)); // 'Apple' - потому что оно самое длинное

