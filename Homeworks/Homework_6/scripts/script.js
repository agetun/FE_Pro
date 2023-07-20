
// 2. Дан массив с товарами. Для каждого товара создать карточку. Стилизовать карточку (title, price). Если товар есть на складе, то цвет заднего фона сделать зеленым. А если нет - то серым

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
    photo: 'https://images.heb.com/is/image/HEBGrocery/000377497'
  },
  {
    id: 5,
    title: 'Pineapple',
    price: 400,
    in_stock: false,
    photo: 'https://img.freepik.com/free-photo/pineapple_144627-22187.jpg?w=2000'
  }
]
// ======создавал одну карточку====================
// const cards_container = document.querySelector('.container');

// const cardProduct = document.createElement('div');
// const titleProduct = document.createElement('p');
// const priceProduct = document.createElement('p');

// cardProduct.append(titleProduct, priceProduct);
// container.append(cardProduct);

// titleProduct.innerText = 'Apple';
// priceProduct.innerText = '100';

// cardProduct.style.backgroundColor = 'green';
// titleProduct.style.color = 'red';
// priceProduct.style.color = 'red'
// ========вот решение ============================
// =====добавляем картинки вверху карточки=========
const cards_container = document.querySelector('.cards_container');

products.forEach(({ title, price, in_stock, photo }) => {
  // const { title, price } = el;

  const cardProduct = document.createElement('div');
  
  const photoElem = document.createElement('img');

  titleProduct.innerText = `Title: ${title}`;
  priceProduct.innerText = `Price: ${price}`;  

  // cardProduct.style.border = '1px solid black'
  // cardProduct.style.padding = '10px';
  // cardProduct.style.borderRadius = '10px';
  // cardProduct.style.textAlign = 'center';

  cardProduct.classList.add('cardElem');
  cardProduct.style.backgroundColor = in_stock ? 'lightgreen' : 'lightgray';

  photoElem.setAttribute('src', photo);
  photoElem.setAttribute('alt', title);
  
  cardProduct.append(photoElem, titleProduct, priceProduct);
  cards_container.append(cardProduct);
})

