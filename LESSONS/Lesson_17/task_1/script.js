// 1.  Создать форму с тремя инпутами (title, price, discount 0-1) и кнопкой
// 2. При сабмите форма собирает данные из инпутов, формирует из них объект (id, title, price, discount) и выводит его в консоль
// 3. Создать массив all_products и при сабмите формы добавлять в этот массив сформированный объект
// 4. Из массива all_products отрисовать карточки товаров 
// 5. Стилизовать карточки товаров

// ДЗ
// 6. Для каждой карточки создать элемент newPriceElem, куда записать значение цены с применением указанной скидки
// 7. Создать кнопку удаления всех товаров
// 8. На каждую карточку повесить кнопку удаления и реализовать удаление карточки по клику на кнопку




const add_product_form = document.querySelector('.add_product_form');
const product_container = document.querySelector('.product_container');

let all_products = [];

add_product_form.addEventListener('submit', event => {
    event.preventDefault();
    const { title, price, discount } = event.target;
    const product = {
        id: Date.now(),
        title: title.value,
        price: +price.value,
        discount: +discount.value
    }
    
    console.log(product);

    event.target.reset();
})

// event.target - ссылка на элемент, с которым происходит событие

const render = products => {
    products.forEach(({ id, title, price, discount }) => {
        const cardElem = document.createElement('div');
        const titleElem = document.createElement('p');
        const priceElem = document.createElement('p');
        const discountElem = document.createElement('p');
        const newDiscountElem = document.createElement('p');
        const deleteElem = document.createElement('span');

        titleElem.innerText = `Title: ${title}`;
        priceElem.innerText = `Price: ${price}`;
        discountElem.innerText = `Discount: ${discount}`;
  
        cardElem.append(titleElem, priceElem, discountElem);
        products_container.append(cardElem);

    });
}

// const render_cards = users => {
//     container.innerText = '';
//     users.forEach(({ firstname, age, id }) => {
//         const cardElem = document.createElement('div');
//         const firstnameElem = document.createElement('p');
//         const ageElem = document.createElement('p');
//         const cross_icon = document.createElement('span');
    
//         firstnameElem.innerText = `Name: ${firstname}`;
//         ageElem.innerText = `Age: ${age}`;
//         cross_icon.innerText = 'X';

//         cross_icon.classList.add('cross_icon');

//         cross_icon.addEventListener('click', () => {
//             users = users.filter(el => el.id !== id);
//             render_cards(users);
//         })
    
//         cardElem.append(firstnameElem, ageElem, cross_icon);
//         container.append(cardElem);
//         })

// }

// delete_all_btn.addEventListener('click', () => {
//     users = [];
//     render_cards(users);
// })


