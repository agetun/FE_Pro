// let cars = ["BMW", "Mercedes", "Volvo", "Audi"];
// console.log(cars);
// console.log(cars[1]);

// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);
// console.log(cars[3]);



// for (let i = 0; i < cars.length; i++) {
//     const element = cars[i]; // 0, 1, 2, 3

//     console.log(element);
// }

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(i, j);
//     }  
// }

// 0 0
// 0 1
// 0 2
// 1 0

// let cars = ["BMW", "Mercedes", "Volvo", "Audi"];

function strToUpperCase(car) { // "Mercedes"
    return car.toUpperCase(); // "Mercedes".toUpperCase()
};

// let strToUpperCaseV2 = (item) => item.toUpperCase();

// console.log(strToUpperCase("Mercedes"));

function mapV2(cars, fnc) { //["BMW", "Mercedes", "Volvo", "Audi"], strToUpperCase
    let modifiedCars = [];

    for (let i = 0; i < cars.length; i++) {
        modifiedCars.push(fnc(cars[i])); //cars[1] === "Mercedes"
    }

    return modifiedCars;
}

// let modifiedCarsV2 = mapV2(cars, strToUpperCase);
// console.log("modifiedCarsV2", modifiedCarsV2);

// let modifiedCars = cars.map(strToUpperCase);
// console.log(modifiedCars);

// let modifiedCars = cars.map((item) => item.toUpperCase());

// const numbers = [2, 3, 6, 9, 8, 6, 34];
// let modifiedNumbers = numbers.map(item => item ** 2);
// console.log(modifiedNumbers);

// let modifiedNumbersV2 = mapV2(numbers, item => item ** 4);
// console.log(modifiedNumbersV2);

let cars = ["BMW", "Mercedes", "Volvo", "Audi", "Lamborgini"];

let carFiltered = cars.filter(item => item[0] === "A");

console.log(carFiltered);

function filterV2(cars, fnc) {
    let filteredElement = [];

    for (let i = 0; i < cars.length; i++) {
        if (fnc(cars[i])) {
            filteredElement.push(cars[i]);
        }
    }

    return filteredElement;
}

// let carFilteredV2 = filterV2(cars, (item) => item[0] === "A");
// console.log(carFilteredV2);

// let carFilteredV3 = filterV2(cars, (item) => item[0].toUpperCase() === "A");
// console.log(carFilteredV3);

// let carFilteredV4 = filterV2(cars, (item) => item.toLowerCase().indexOf("a") !== -1);
// console.log(carFilteredV3); //Lamborgini

// let carFilteredV5 = cars.filter(item => item.toLowerCase().indexOf("a") !== -1);

// console.log("Lamborgini".toLowerCase().indexOf("a"));



const numbers = [2, 3, 6, 9, 8, 6, 34];

let result = (arr) => {
    let sum = 0; // +2

    arr.forEach(val => {
        // console.log(val); 2, 3, 6
        sum = sum + val; // sum = 0 + 2 = 2, sum = 2 + 3 = 5, sum = 5 + 6 = 11, sum = 11 + 9
    });

    return sum;
}

console.log(result(numbers));

let resultReduce = numbers.reduce(function (sum, val) {
    console.log(sum, val);
    return sum + val;
}, 0)

let evenReduce = numbers.reduce(function (arr, current) {
    // 2 / 2 = 1.0
    // 4 / 2 = 2.0
    // 3 / 2 = 1.5
    if (current % 2 === 0) {
        arr.push(current);
    }

    return arr;
}, [])

console.log(evenReduce);


const car = {
    name: "BMW",
    model: "X6",
    year: 2023,
    "speed car": 360
};

// console.log(car.name);
// console.log(car["model"]);
// console.log(car["speed car"]);

// car.name = "Mercedes";
// car["model"] = "GLS";

let data = {};

let inputs = document.querySelectorAll(".form__input");

inputs.forEach(input => {
    input.onkeyup = handlerChange;
});

function handlerChange(event){
    // console.log(event.target.name, event.target.value);
    // data.event.target.name

    data[event.target.name] = event.target.value;
}

document.querySelector(".btn").onclick = function(){
    console.log(data);
}