// 1 задание:
// Сделать через html контенер и в нем сделать два блока
// левый блок для чатов - правый блок для контента. Как в телеграме например

// Левый блок по ширине 300px
// Правому блоку надо задать css свойство flex-grow: 1 чтобы он растянулся на все оставшееся пространство
// Не забудьте контейнеру задать 100vh чтобы он растянулся на всю высоту экрана

// Задание 2:
// Сделать фетч по адресу https://dummyjson.com/users и вывести юзеров в консоль

const leftBlock = document.querySelector(".LeftBlock");

fetch("https://dummyjson.com/users")
  .then((result) => result.json())
  .then(({ users }) => {
    render(users);
  });

function render(users) {
  users.forEach(({ firstName, lastName, image, phone }) => {
    const divWrapper = document.createElement("div");
    divWrapper.classList.add('UserBlock');

    const img = document.createElement("img");
    img.classList.add('UserBlock__avatar');
    img.src = image;

    const textDiv = document.createElement("div");
    const fullNameP = document.createElement("p");
    fullNameP.innerText = `${firstName} ${lastName}`;

    const phoneP = document.createElement("p");
    phoneP.innerText = phone;
    textDiv.append(fullNameP, phoneP);

    divWrapper.append(img, textDiv);
    leftBlock.append(divWrapper);
    // console.log(firstName, lastName, image, phone);
  });
}
