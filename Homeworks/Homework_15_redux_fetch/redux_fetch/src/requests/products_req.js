// import { loadAllUsersAction } from "../store/reducers/usersReducer"

export const getAllProducts = (callback) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => console.log(json))    
}

