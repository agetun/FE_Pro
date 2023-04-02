
// 2. Дан массив с товарами. Для каждого товара создать карточку. Стилизовать карточку (title, price). Если товар есть на складе, то цвет заднего фона сделать зеленым. А если нет - то серым

const products = [
  {
    id: 1,
    title: 'Apple',
    price: 100,
    in_stock: true
  },
  {
    id: 2,
    title: 'Orange',
    price: 200,
    in_stock: false
  },
  {
    id: 3,
    title: 'Kiwi',
    price: 150,
    in_stock: true
  },
  {
    id: 4,
    title: 'Banana',
    price: 300,
    in_stock: false
  }
]

const container = document.querySelector('.container');

const cardProduct = document.createElement('div');
const titleProduct = document.createElement('p');
const priceProduct = document.createElement('p');

cardProduct.append(titleProduct, priceProduct);
container.append(cardProduct);

titleProduct.innerText = 'Apple';
priceProduct.innerText = '100';

cardProduct.style.backgroundColor = 'green';
titleProduct.style.color = 'red';
priceProduct.style.color = 'red'

