const add_user_form = document.querySelector('.add_user_form');
const container = document.querySelector('.container');
const delete_all_btn = document.querySelector('.delete_all_btn');

let users = [];

add_user_form.addEventListener('submit', (event) => {
    event.preventDefault();

    //реструктуризируем, чтобы сократить код
    const { firstname, age } = event.target;

    const user = {
        id: Date.now(),
        firstname: firstname.value,
        age: +age.value
    }
    
    users.push(user);
    render_cards(users);

    // console.log(users);

    // console.log(firstname.value, event.target.age.value);
    // console.log(age.value);

    // без реструктуризации
    // console.log(event.target.firstname.value, event.target.age.value);
    // console.log(event.target.age.value);

    event.target.reset();
})

// event.target - ссылка на элемент, с которым происходит событие

const render_cards = users => {
    container.innerText = '';
    users.forEach(({ firstname, age, id }) => {
        const cardElem = document.createElement('div');
        const firstnameElem = document.createElement('p');
        const ageElem = document.createElement('p');
        const cross_icon = document.createElement('span');
    
        firstnameElem.innerText = `Name: ${firstname}`;
        ageElem.innerText = `Age: ${age}`;
        cross_icon.innerText = 'X';

        cross_icon.classList.add('cross_icon');

        cross_icon.addEventListener('click', () => {
            users = users.filter(el => el.id !== id);
            render_cards(users);
        })
    
        cardElem.append(firstnameElem, ageElem, cross_icon);
        container.append(cardElem);
        })

}

delete_all_btn.addEventListener('click', () => {
    users = [];
    render_cards(users);
})