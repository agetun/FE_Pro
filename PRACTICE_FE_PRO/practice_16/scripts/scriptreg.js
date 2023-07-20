const email = document.querySelector('.emailInput');
const password = document.querySelector('.passwordInput');

const verifyEmail = 'test@gmail.com';
const verifyPassword = '123'
 

document.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        const enteredEmail = email.value;
        const enteredPass = password.value;
      console.log(enteredEmail, enteredPass);
      if (enteredEmail === verifyEmail && enteredPass === verifyPassword) {
        console.log('Ok');
        window.location.href = 'file:///C:/Users/Aleksandr/Desktop/FE_Pro/Practice_FE_Pro/practice_16/indexImg.html'
      } else {
        console.log('Error');
      }
    }
  });

//   0. Новый js файл для signup страницы подключить где будет логика js для регистрации
// 1. Найти все инпуты
// 2. Как проверить email ли введен? - проверить строку на наличие собачки
// 3. Проверить совпадает ли пароль и проверка пароля - сравнить значения пароля и проверки пароля
// 4. Проверка длины пароля - не меньше 6
// 5. Проверка наличия знаков ! или _
// 6. По результату - если все окей -> прыгаем на гифку, если не окей -> alert(сообщение ошибки)

