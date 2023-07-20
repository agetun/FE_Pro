// Задача 3 возможно))

// На каждый ввод буквы делать запрос на этот адрес и в консоль вывести всех пользователей
// Задача 4:

// Отфильтровать всех пользователей по имени на предмет наличия слова которое в инпуте в их имени

// И вывести в консоль отфильтрованный массив


const input = document.querySelector(".search");

input.addEventListener("input", (event) => {
  fetch(`https://dummyjson.com/users/`)
    .then((res) => res.json())
    .then((data) => {
      const filteredUsers = data.users.filter((user) => {
        return user.firstName.includes(input.value);
      });

      console.log(filteredUsers);
    });
});

const array = ["Sergey","Arre","Sasha"];

// array.filter(callback);

function myFilter(array, callback) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
     const element = array[i];

     const result = callback(element);
     if (result === true) {
        newArray.push(element);
     }
    
  }
  return newArray;
}
myFilter(array, () => {});
