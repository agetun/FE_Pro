//  Легкий уровень:
// Напишите функцию, которая принимает два числа и возвращает большее из них.
const getMax = (a, b) => Math.max(a, b); 

// Напишите функцию, которая принимает число и возвращает его квадрат.
const powNum = a => a ** 2;
const powNum1 = a => Math.pow(a, 2);

// Напишите функцию, которая принимает строку и возвращает ее длину.
const getStrLength = str => str.length;

// Напишите функцию, которая принимает два числа и возвращает их сумму.
const getSum = (a, b) => a + b;

// Средний уровень:
//   Напишите функцию, которая принимает массив чисел и возвращает новый массив, в котором все числа умножены на 2.
const createNewArray = arr => {
    const result = [];
    for(let i = 0; i < arr.length; i++){
      result.push(arr[i] * 2)
    }
    return result
  }
  
  console.log(createNewArray([2, 3, 4, 5])); // => [4, 6, 8, 10]
//   Напишите функцию, которая принимает строку и возвращает новую строку, в которой все гласные заменены на символ '*'.
const changeLetters = str => {
    let new_str = '';
    for(let i = 0; i < str.length; i++){
      if(str[i].toLowerCase() === 'a' || str[i].toLowerCase() === 'e' || str[i].toLowerCase() === 'i' || str[i].toLowerCase() === 'o' || str[i].toLowerCase() === 'u' || str[i].toLowerCase() === 'y') {
        new_str += '*'
      } else {
        new_str += str[i]
      }
    }
    return new_str
  }
  
  // console.log(changeLetters('hello')); // h*ll*
  // console.log(changeLetters('GOOD morning')); // G**D m*rn*ng

//   Напишите функцию, которая принимает массив чисел и возвращает среднее значение
const getAvgNum = arr => {
    let sum = 0;
  
    for(let i = 0; i < arr.length; i++){
      sum += arr[i]
    }
  
    return sum / arr.length
  }
  
  // console.log(getAvgNum([3, 5])); // 4
  // console.log(getAvgNum([1, 2, 3])); // 2

  //  Функция, которая принимает массив чисел и возвращает новый массив, в котором все числа умножены на 2.






