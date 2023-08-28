import { loadAllUsersAction } from "../store/reducers/usersReducer"

export const getAllUsers = (callback) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => callback(loadAllUsersAction(json)))    
}
