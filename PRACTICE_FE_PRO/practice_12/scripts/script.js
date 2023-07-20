// 1 задание - с помощью js вставить картинку на сайт как в гугл поисковике
// 2 задание - добавить инпут под картинкой гугла с помощью js
// 3 задание:
// Добавить стили в наш поиск
// Чтобы стояли по центру и друг под другом, а также добавить инпуту края и закруглить его углы также красиво как у гугла

// Задание 5:
// Среагировать на клик по инпуту
// Задание 6: по клику на инпут синзу нарисовать div в котором очень много p абзацев
// Задание 7: 
// Поймать событие change у инпута (это событие срабатывает когда в инпут вводится что-то)
// Задание 8: когда что-то вводится в инпут надо
// - очищать весь нижний блок от абзацев
// - все абзацы фильтровать на наличие поисковой фразы из инпута
// - рисовать абзацы с отфильтрованными фразами
const wrapper = document.createElement('div');
const logoImage = document.createElement('img');
const input = document.createElement('input');

logoImage.setAttribute('src', './media/googlelogo.png');
logoImage.setAttribute('alt', 'Logo of Google');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Поиск имени меня');
input.setAttribute('class', 'input-search');

input.addEventListener('click', () => {
  console.log(1)
})

wrapper.append(logoImage, input);
wrapper.append(input);

wrapper.classList.add('wrapper');


document.body.append(wrapper);




// const container = document.querySelector('.container');

// const googleLogo = document.createElement('img');

