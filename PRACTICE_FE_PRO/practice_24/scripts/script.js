// ЗАДАЧА В ЦЕЛОМ:

// 1. Создать кнопку
// 2. Отправить fetch запрос по адресу https://dummyjson.com/products
// 3. Отрисовать карточки где должна быть фото и цена

// ДОП ЗАДАНИЕ:

// 1. Два инпута - для фильтра по минимальной и максимальной цене и кнопка чтобы отфильтровать
// 2. По клику на кнопку - список карточек должен отфильтроваться

const getPoductsButton = document.querySelector('.getPoductsButton');

// console.log(getPoductsButton);

getPoductsButton.addEventListener('click', () => {
  fetch('https://dummyjson.com/products')
    .then((res) => {
            res.json()
      .then((json) => {
            console.log(json);
        })
    })
})

const render = array => array.forEach


