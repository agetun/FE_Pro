import React from 'react'
import { products } from './products'

export default function Test() {

    // console.log(products);

    // Повоторение методов массива

    // сформировать массив из названий товаров и вывести его в консоль
    // const result = products.map(item => item.title);
    // const result = products.map(({title}) => title);

    // сформировать массив из цен товаров
    // const result = products.map(({price}) => price);

    // сформировать массив из объектов, которые содержат свойства title и price
    // const result = products.map(({price, title}) => {
    //     return {
    //         title: title,
    //         price: price
    //     }
    // });
    // или
    // const result = products.map(({price, title}) => {
        // return {title, price}
    // });
    // или
    // const result = products.map(({price, title}) => ({title, price}));

    // сформировать массив из объектов в которых есть все свойства, кроме marks
    // const result = products.map(({id, title, price, discount}) => ({id, title, price, discount}));

    // const result = products.map(({id, title, price, discount}) => ({id, title, price, discount}));

    // const result = products.map(({marks, ...product}) => product);

    // создать массив, который состоит только их тех товаров, у которых цена больше 100
    // const result = products.filter(({price}) => price > 100);

     // массив должен содержать название товаров
     const result = products
        .filter(({price}) => price > 100)
        .map(({title, price}) => ({title, price}));


    console.log(result);



  return (
    <div>
       Test
    </div>
  )
}





