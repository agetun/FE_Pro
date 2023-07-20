// 1. Создать форму. При сабмите данные из инпута собираются и выводятся в консоль
// 2. Написать функцию, которая принимает числовой аргумент (id) b отправляет fetch-запрос по ссылке https://jsonplaceholder.typicode.com/users/{id}
// 3. По полученным данным отрисовать карточку пользователя
// 4. При клике на карточку менять цвет ее заднего фона на светло-зеленый
// 5. Повесить на кажду карточку крестик и реализовать удаление карточки по клику

// ДЗ
// 1. Разобраться в коде
// 2. Понять почему не работает удаление карточки по клику на крестик
// 3. Придумать как починить функцию удаления карточки



const get_user_form = document.querySelector('.get_user_form');
const container = document.querySelector('.container');
let all_users = [];

get_user_form.addEventListener('submit', e => {
  e.preventDefault();
  const { id } = e.target;
  getUser(id.value);
  e.target.reset()
});

const getUser = id => {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then(res => res.json())
  .then(json => add_users(json))
}

const add_users = json => {
  all_users.push(json);
  render_users(all_users);
}

const render_users = users => {
  container.innerText = '';
  users.forEach(({ name, email, address }) => {
      const cardElem = document.createElement('div');
      const nameElem = document.createElement('p');       
      const emailElem = document.createElement('a');
      const addressElem = document.createElement('p');
      const deleteElem = document.createElement('span');

      const { street, suite, zipcode, city } = address;

      nameElem.innerText = `Name: ${name}`;      
      emailElem.innerText = email;
      addressElem.innerText = `Address: ${suite}, ${street}, ${city}, ${zipcode}`;
      deleteElem.innerText = 'X';

      emailElem.href = `meilto:${email}`;

      cardElem.addEventListener('click', () => cardElem.style.backgroundColor = 'lightgreen');

      deleteElem.addEventListener('click', () => {
        all_users = all_users.filter(el => el.id !== id);
        render_users(all_users);
      });
      
      cardElem.append(deleteElem, nameElem, emailElem, addressElem);
      container.append(cardElem);  
    })    
}

// getUser(7)

/*
const render = ({ name, email, address }) => {
  const cardElem = document.createElement('div');
  const nameElem = document.createElement('p');       
  const emailElem = document.createElement('a');
  const addressElem = document.createElement('p');
  const deleteElem = document.createElement('span');

  const { street, suite, zipcode, city } = address;

  nameElem.innerText = `Name: ${name}`;      
  emailElem.innerText = email;
  addressElem.innerText = `Address: ${suite}, ${street}, ${city}, ${zipcode}`;
  deleteElem.innerText = 'X';

  emailElem.href = `meilto:${email}`;

  cardElem.addEventListener('click', () => cardElem.style.backgroundColor = 'lightgreen');

  
  cardElem.append(deleteElem, nameElem, emailElem, addressElem);
  container.append(cardElem);      
}
*/
  