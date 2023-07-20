// Задание 1:

// Сделать инпут и сделать кнопкочку через html и css - ом можно украсить по своему усмотрению

// Задание 2:

// Поймать клик по кнопке

const buttonToAddNote = document.querySelector('.btn');
const input = document.querySelector('.inp');

buttonToAddNote.addEventListener('click', () => {
    // let inputText = input.value
    const item = document.createElement('p');
    item.innerText = input.value;
    const addText = document.querySelector('.container');
    input.value = '';
    addText.append(item);
});

// Задание 3:

// По клику на кнопку очистить инпут от текста


// Задача 4:

// Добавить div для будущих задач с помощью html и стилизовать как нравится с помощью css

// Задача 5:

// По клику взять то что в инпуте (текст) и добавить его в область для задач. Каждый клик доблавяет новую задачу в столбик


