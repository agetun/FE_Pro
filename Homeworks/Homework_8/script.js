  

//ДЗ
//1. Написать функцию, принимающую в качестве аргумента id (число), отправляющую fetch-запрос по ссылке https://dummyjson.com/users/{id} и выводящую полученные данные в консоль
//2. Написать функцию, принимающую полученный объект и отрисовывающую карточку пользователя (имя + фамилия, username,кликабельная почта и адрес)

const container = document.querySelector('.container');



const getUser = id => {
  fetch(`https://dummyjson.com/users/${id}`)
    .then(res => res.json())
    .then(json => render(json))
}

getUser(6);

const render = ({ lastName, firstName, username,address , email}) => {
  const cardElem = document.createElement('div');
  const nameElem = document.createElement('p');
  const usernameElem = document.createElement('p');
  const addressElem = document.createElement('P');
  const emailElem = document.createElement('a');
  nameElem.innerText = Name: ${firstName} ${lastName};
  usernameElem.innerText = Username: ${username};
  addressElem.innerText = Address: ${address};
emailElem.innerText = Email: ${email};
emailElem.setAttribute ('href',mailto:${email})
  cardElem.append(nameElem, usernameElem,addressElem,emailElem);
  container.append(cardElem);
}
