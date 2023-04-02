const button = document.querySelector('button');
const body = document.querySelector('body');


// button.addEventListener("click", () => {
  // ==============================
  // console.log(document.body); //Второй способ вывести body
  // console.log(body);
  // console.log(1);
  // console.log(body.classList.contains("red")); 
  //=============================================
//   const isRed = body.classList.contains("red")
//   if (isRed) {
//     body.classList.remove("red");
//     body.classList.add("blue");
//   } else {
//     body.classList.remove("blue");
//     body.classList.add("red");
//   }
// });
// ================================================
// console.log(button);


button.addEventListener("click", function () {
if (body.style.background === "red") {
  body.setAttribute("style", "background-color: blue;");
} else {
  body.setAttribute("style", "background-color: red;");
}
});
 
// Для смены цвета
// 1. Смена класса
// 2. Смена стиля

