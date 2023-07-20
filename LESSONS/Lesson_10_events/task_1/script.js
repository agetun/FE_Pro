// 1. При клике на кнопку меняется цвет текста на зелёный

const clickBtn = document.querySelector('.click_btn');
const text = document.querySelector('.text');

clickBtn.addEventListener('click', () => text.style.color = 'green');

// 2. При клике на кнопку div.container добавляется параграф

const addParBtn = document.querySelector('.add_par_btn');
const parContainer = document.querySelector('.container');

addParBtn.addEventListener('click', () => {
    const new_par = document.createElement('p');
    new_par.innerText = "hello, world";
    parContainer.append(new_par);
});

// 3. Создать два параграфа. При клике на первый параграф, у второго меняется цвет текста на красный и увеличивается шрифт до 20px. При клике на второй параграф, у первого меняется цвет заднего фона на зеленый и цвет текста на белый

const par_1 = document.querySelector('.par_1');
const par_2 = document.querySelector('.par_2');

par_1.addEventListener('click', () => {
    par_2.style.color = 'red';
    par_2.style.fontSize = '20px';
});

par_2.addEventListener('click', () => {
    par_1.style.backgroundColor = 'green';
    par_2.style.color = 'white';
});

// 4. При клике на кнопку цвет текста меняется на красный. При повторном клике обратно на черный

const change_color_btn = document.querySelector('.change_color_btn');
const change_color_text = document.querySelector('.change_color_text');

// .toggle()

change_color_btn.addEventListener('click', () => {
    change_color_text.classList.toggle('color')
  });

  // 5. При клике на кнопку цвет текста меняется на синий и размер шрифта увеличиваться до 30px. При повторном клике возращать всё, как было

  const change_color_btn_2 = document.querySelector('.change_color_btn_2');
const change_color_text_2 = document.querySelector('.change_color_text_2');

change_color_btn_2.addEventListener('click', () => {
    change_color_text_2.classList.toggle('color_2')
  });

// 6. При клике на кнопку содержимое инпута выводится в консоль

const show_btn = document.querySelector('.show_btn');
const show_input = document.querySelector('.show_input');

show_btn.addEventListener('click', () => {
  console.log(show_input.value);
  show_input.value = '';
});

// 7. При клике на кнопку содержимое инпута меняется на !!!

const change_value_btn = document.querySelector('.change_value_btn');
const change_value_input = document.querySelector('.change_value_input');

change_value_btn.addEventListener('click', () => change_value_input.value = '!!!');

// 8. При клике на кнопку менять содержимое инпута на значения из массива

const symbols = ['...', '!!!', '+++', '&&&'];
let index = 0;

const change_symbol_btn = document.querySelector('.change_symbol_btn');
const change_symbol_input = document.querySelector('.change_symbol_input');

change_symbol_btn.addEventListener('click', () => { change_symbol_input.value = symbols[index++ % symbols.length]});


// 9. При клике на кнопку изменять цвет фона на черный. При повторном клике вернуть белый фон

const change_back_btn = document.querySelector('.change_back_btn');

change_back_btn.addEventListener('click', () => document.body.classList.toggle('back_color'));

// ДЗ
// 1. При клике на кнопку менять цвет заднего фона на цвет из массива ['pink', 'green', 'blue']
// 2. *При клике на кнопку менять цвет заднего фона на случайный