// 1. Отправить запрос на https://sampleapis.com/api-list/wines и получить (вывести в консоль) массив с данными о белых винах
// 2. Отрисовать карточки вин с рейтингом 4.8 и более (image, wine, winery, rating)
// 3. Стилизовать карточки (border, padding, border-radius). Из контейнера сделать grid - 5 колонок + отступы


const container = document.querySelector('.container');

fetch('https://api.sampleapis.com/wines/whites')
  .then(res => res.json())
  .then(json => render(json))

  const render = array => {
    array
    .filter(el => el.rating.average >= 4.8)
    .forEach(({ image, wine, winery, rating }) => {
      
        const cardElem = document.createElement('div');
        const imgElem = document.createElement('img');
        const titleElem = document.createElement('p');
        const wineryElem = document.createElement('p');
        const ratingElem = document.createElement('p');  
          
        titleElem.innerText = `Title: ${wine}`;
        wineryElem.innerText = `Winery: ${winery}`;
        ratingElem.innerText = `Rating: ${rating.average}`;

        imgElem.src = image;
        imgElem.alt = wine;

        cardElem.style.backgroundColor = rating.average > 4.8 ? 'lightgreen' : 'lightblue';

  
        cardElem.append(imgElem, titleElem, wineryElem, ratingElem);
        container.append(cardElem);
      
    })
  }
