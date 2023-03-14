// ФУНКЦИИ

// function declaration - объявление функции через слово function

// Написать функцию, которая принимает в качестве аргумента число и возвращает это число, умноженное на 10

function multNum(num) {
    return num * 10;
}

console.log(multNum(5));
console.log(multNum(34));
console.log(multNum()); // NaN - not a number (не число)
// не число +-* число === NaN


// Arrow function (стрелочная функция)

// Написать функцию, которая принимает в качестве аргумента число и возвращает это число, умноженное на 10

const multNum_arrow = (num) => {
    return num * 10;
}
// если одна строка то можно сократить const multNum_arrow = (num) => num * 10; или если одна входная переменная, то const multNum_arrow = num => num * 10;

console.log(multNum_arrow(23)); // 230

function sumTwoNumber(num1, num2) {
    return num1 + num2;
    
}
console.log(sumTwoNumber(7, 9));

const sumTwoNumber1 = (num1, num2) => num1 + num2;
    
console.log(sumTwoNumber1(7, 9))