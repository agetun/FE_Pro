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
];

// ДЗ (массив users)
console.log("1. Сформировать новый массив, в который попадут только возраст пользователей => [28, 18, 32, 14, 54]");
const agesUsers = users.map(el => el.age).filter(el => Number.isInteger(el));  

console.log(agesUsers); 

// console.log(users.map(({ age }) => age));

console.log("2. Сформировать новый массив, в который попадет информация о каждом пользователе в формате 'Name: <firstname>, Age: <age>'");
users.forEach(el => {
  const { firstname, age } = el;
  console.log(`Name: ${firstname}, Age: ${age}`)
});


console.log("3. Сформировать новый массив, в который попадут только те пользователи, чье имя начинается на I");
const usersI = users.filter(el => el.firstname.startsWith('I'));

console.log(usersI);


// ***
console.log("1. Сформировать новый массив, в который попадет информация о каждом совершеннолетнем пользователе в формате 'Name: <firstname>, Age: <age>'");
users.forEach(el => {
  const { firstname, age } = el;
  if (age > 18) {
  console.log(`Name: ${firstname}, Age: ${age}`)
  }
});

console.log("2. Сформировать новый массив, в который попадут только активные и совершеннолетние пользователи");
const activeUsers = users.filter(el => users.age > 18 && users.active === true);

console.log(activeUsers);


// 3. Сформировать новый массив без пользователей, чье имя начинается на букву O
// 4. Сформировать новый массив, в который попадут только имена активных и совершеннолетних пользователей в нижнем регистре
// ****
// 1. Сформировать новый массив, где пользователи будут отсортированы по возрасту (.sort())
// 2. Найти сумму возрастов всех пользователей (.reduce())