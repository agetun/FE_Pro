// 1. Написать функцию, которая принимает массив и возвращает новый массив только со строками длиннее 6 символов и начинающихся на букву 'h'/'H'

const greetings = ['hello', 'hello, my friend', 'good morning', 'How are you doing?', 'good afternoon'];
// => ['hello, my friend', 'how are you doing?']

const getLongStrings = arr => arr.filter(el => el.length > 6 && el[0].toLowerCase() === 'h');

// console.log(getLongStrings(greetings));


// 2. Написать функцию, которая принимает массив с числами и возвращает новый массив с положительными числами, умноженными на 2

const numbers = [3, -8, 9, -1, 80, -33]; // [6, 18, 160]

const doublePositiveNums = arr => arr.filter(el => el > 0).map(el => el * 2);

const doublePositiveNums1 = arr => {
  const pos_nums = arr.filter(el => el > 0)
  return pos_nums.map(el => el * 2)
}

// console.log(doublePositiveNums(numbers));

// ОБЪЕКТЫ

const user = {
  firstname: 'Nelli',
  lastname: 'Efremyan',
  age: 28,
  active: true,
  address: {
    country: 'Armenia',
    city: 'Yerevan'
  },
  skills: ['JS', 'SQL']
}

const { firstname, age } = user;

console.log(firstname); // 'Nelli'
console.log(age); // 28
// console.log(address); // address is not defined

// 1. Вывести в консоль имя пользователя

// console.log(user.firstname); // 'Nelli'
// console.log(user['firstname']);

// console.log(user.age); // 28/
// console.log(user.address); // { country: 'Armenia', city: 'Yerevan' }
// console.log(user.skills); // ['JS', 'SQL']
// console.log(user.firstname, user.age, user.address, user.skills);

const key = 'firstname';

// console.log(user.firstname); // 'Nelli'
// console.log(user[key]); // 'Nelli'
// console.log(user.key); // undefined

// 2. Написать функцию, которая принимает два аргумента - объект и название ключа. Функция возращает значение по переданному ключу

// const getValue = (obj, key) => {
//   return obj[key]
// }
// ИЛИ СОКРАЩЁННО
// const getValue = (obj, key) => obj[key]

// console.log(getValue(user, 'firstname')); // 'Nelli'
// console.log(getValue(user, 'age')); // 28 
// console.log(user, 'address'); 


const users = [
  {
    id: 1,
    firstname: 'Anton',
    age: 28,
    active: true
  },
  {
    id: 2,
    firstname: 'Irina',
    age: 18,
    active: true
  },
  {
    id: 3,
    firstname: 'Olga',
    age: 32,
    active: false
  },
  {
    id: 4,
    firstname: 'Danila',
    age: 14,
    active: true
  },
  {
    id: 5,
    firstname: 'Ivan',
    age: 54,
    active: false
  }
]

// 1. Вывести в консоль все имена пользователей

// users.forEach(el => console.log(el));
console.log("=================")
users.forEach(el => console.log(el.firstname));

// 2. Вывести в консоль информацию о каждом пользователе в формате 'Name: <name>, Age: <age>'
console.log("=================")
users.forEach(el => console.log('Name: ' + el.firstname, 'Age: ' + el.age));

console.log("=================")
users.forEach(el => console.log(`Name: ${el.firstname}, Age: ${el.age}`));

console.log("=================")
users.forEach(el => {
  const { firstname, age } = el;
  console.log(`Name: ${firstname}, Age: ${age}`);
});
console.log("=================")
users.forEach(({ firstname, age})  => console.log(`Name: ${firstname}, Age: ${age}`));


// 3. Сформировать новый массив, в который попадут только совершеннолетние пользователи => [{}, {}, {}, {}]
console.log("=================")
// const adult_users = users.filter(el => el.age >= 18);

const adult_users = users.filter(({ age }) => age >= 18);

console.log(adult_users);


// 4. Сформировать новый массив, в который попадут только имена пользователей => ['Anton', 'Irina', 'Olga', 'Danila', 'Ivan']

const firstNames = users.map(el => el.firstname);


// ДЗ (массив users)
// 1. Сформировать новый массив, в который попадут только возраст пользователей => [28, 18, 32, 14, 54]
// 2. Сформировать новый массив, в который попадет информация о каждом пользователе в формате 'Name: <firstname>, Age: <age>'
// 3. Сформировать новый массив, в который попадут только те пользователи, чье имя начинается на I


// ***
// 1. Сформировать новый массив, в который попадет информация о каждом совершеннолетнем пользователе в формате 'Name: <firstname>, Age: <age>'
// 2. Сформировать новый массив, в который попадут только активные и совершеннолетние пользователи
// 3. Сформировать новый массив без пользователей, чье имя начинается на букву O
// 4. Сформировать новый массив, в который попадут только имена активных и совершеннолетних пользователей в нижнем регистре
// ****
// 1. Сформировать новый массив, где пользователи будут отсортированы по возрасту (.sort())
// 2. Найти сумму возрастов всех пользователей (.reduce())