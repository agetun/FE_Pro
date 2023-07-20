// Задание 1:
// - Подготовить проект (создать html css js файлы)
// - Отправить запрос по адресу https://dummyjson.com/posts с помощью метода fetch и вывести в консоль результат
// Задача 2
// Из полученных данных отрисовать ленту постов как в социальной.сети (дизайн придумать самому)


const url = 'https://dummyjson.com/posts';

const a = fetch(url);
console.log(a);

/*
fetch(url)
.then(res => res.json())
.then((data) => console.log(data));
*/

