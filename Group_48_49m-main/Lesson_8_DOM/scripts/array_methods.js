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

// ****
// 1. Сформировать новый массив, где пользователи будут отсортированы по возрасту (.sort())

const sorted_users = users.slice().sort((a, b) => a.age - b.age);
const sorted_users1 = users.map(el => el).sort((a, b) => a.age - b.age);
const sorted_users2 = [...users].sort((a, b) => a.age - b.age);

const users_copy = [...users];

// console.log(users);
// console.log(users_copy);

// 2. Найти сумму возрастов всех пользователей (.reduce())

const sum_age = users.reduce((acc, el) => acc + el.age, 0);
const sum_age1 = users.reduce((acc, { age }) => acc + age, 0);

// console.log(sum_age);


// 2. Дан массив с товарами. Для каждого товара создать карточку. Стилизовать карточку (title, price). Если товар есть на складе, то цвет заднего фона сделать зеленым. А если нет - то серым
// Добавить фото продукта в карточку

const products = [
  {
    id: 1,
    title: 'Apple',
    price: 100,
    in_stock: true,
    photo: 'https://calorizator.ru/sites/default/files/imagecache/product_512/product/apple-1.jpg'
  },
  {
    id: 2,
    title: 'Orange',
    price: 200,
    in_stock: false,
    photo: 'https://i5.walmartimages.ca/images/Enlarge/234/6_r/6000191272346_R.jpg'
  },
  {
    id: 3,
    title: 'Kiwi',
    price: 150,
    in_stock: true,
    photo: 'https://static.libertyprim.com/files/familles/kiwi-large.jpg?1569271790'
  },
  {
    id: 4,
    title: 'Banana',
    price: 300,
    in_stock: false,
    photo: 'https://png.pngtree.com/png-clipart/20220716/ourmid/pngtree-banana-yellow-banana-skewers-three-fruits-png-image_5944328.png'
  },
  {
    id: 5,
    title: 'Pineapple',
    price: 400,
    in_stock: false,
    photo: 'https://img.freepik.com/free-photo/pineapple_144627-22187.jpg?w=2000'
  }
]

const cards_container = document.querySelector('.cards_container');

products.forEach(({ title, price, in_stock, photo }) => {
  // const { title, price } = el;

  const cardElem = document.createElement('div');
  const titleElem = document.createElement('p');
  const priceElem = document.createElement('p');
  const photoElem = document.createElement('img');

  titleElem.innerText = `Title: ${title}`;
  priceElem.innerText = `Price: ${price}`;

  cardElem.classList.add('cardElem');
  cardElem.style.backgroundColor = in_stock ? 'lightgreen' : 'gray';

  photoElem.setAttribute('src', photo);
  photoElem.setAttribute('alt', title);

  cardElem.append(photoElem, titleElem, priceElem);
  cards_container.append(cardElem);
});
