// DOM - document object model

// const greeting = document.querySelector('.greeting');
// const container = document.querySelector('.container');

// greeting.style.color = 'red';
// greeting.style.fontSize = '30px';
// greeting.style.backgroundColor = 'green'

// console.log(greeting);

// const par = document.createElement('p');
// const par2 = document.createElement('p');

// par.innerText = '12345';
// par2.innerText = 'hello, hello';

// par.style.color = 'pink';
// par.style.fontSize = '80px';
// par2.style.backgroundColor = 'purple';

// container.append(par, par2);

// 1. Внутри container создать карточку товара (div). Внутри карточки товара есть два параграфа - Название и цена товара. Данные произвольные. Добавить карточке рамку, ширина карточки должна быть равна 200px, padding 10px

const container = document.querySelector('.container');

const cardElem = document.createElement('div');
const titleElem = document.createElement('p');
const priceElem = document.createElement('p');

titleElem.innerText = 'Title: iPhone 14 Pro';
priceElem.innerText = 'Price: 1200$';

cardElem.style.border = '1px solid black';
cardElem.style.padding = '10px';
cardElem.style.width = '200px';
cardElem.style.textAlign = 'center';
cardElem.style.borderRadius = '20px';

cardElem.append(titleElem, priceElem);
container.append(cardElem);


