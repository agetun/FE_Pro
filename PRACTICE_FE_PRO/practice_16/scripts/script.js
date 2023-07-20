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

