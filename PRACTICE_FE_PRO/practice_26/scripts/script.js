// 1. Начинаем с нуля

// Сделать запрос по адресу - https://dummyjson.com/products
// И пока что вывести в консоль результат

// + 

// В html сделать 2 кнопки с текстом По цене, По рейтингу

// 2 задание:

// С помощью метода map массив продуктов преобразовывать в массив html элементов и сделать append всех этих элементов

// 3 задание: (не делаем, переходим на 4 задание)

// По клику на кнопку По цене - надо существующий массив продуктов (без запроса на сервер) - отсортировать по цене по возрастанию и на экране это должно отразится
// P.S. Дизайн на ваше усмотрение

// 4 задание:

// Меняем фильтрацию

// Будем фильтровать по цене от минимальной до макимальной цены, а по рейтингу будем сортировать по возрастанию  и по убыванию

// Надо добавить 2 инпута для мин и макс цены (желательно рядом с кнопкой цены)

// Вместе кнопки По рейтингу - сделать 2 кнопки По возрастанию рейтинги и По убыванию рейтинга

// Ну и написать JS логику которая эти фильтры и сортировки будет выполнять

const list = document.getElementById("list");

const get_products = () => {
  const promiseFromFetch = fetch("https://dummyjson.com/products");

  const promiseFromJson = promiseFromFetch.then((response) => {
    return response.json();
  });

  return promiseFromJson.then((data) => {
    return data.products;
  });
};

const productsPromise = get_products();

const render = (products) => {
  const htmlElements = products.map((product) => {
    const div = document.createElement("div");
    div.innerHTML = `${product.title} - ${product.price} - ${product.rating}`;
    div.style.padding = "5px";
    return div;
  });

  list.append(...htmlElements);
};

productsPromise.then(render);

const json = (res) => res.json();

const get_product = () => {
  fetch("https://dummyjson.com/products")
    .then(json)
    .then((json) => console.log(json.products));
};

get_product();

const form = document.querySelector(".SortPriceForm");
const { min, max, button } = form;

button.addEventListener("click", (event) => {
  event.preventDefault();

  const result = get_products();

  result.then((products) => {
    const filteredArray = products.filter(({ price }) => {
      if (min.value < price && max.value > price) {
        return true;
      } else {
        return false;
      }
    });

    list.innerHTML = "";
    render(filteredArray);
  });
});