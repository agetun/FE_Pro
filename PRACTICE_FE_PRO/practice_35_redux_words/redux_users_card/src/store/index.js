import { combineReducers, createStore } from 'redux';
import { userReducer } from './reducer/userReducer';
import { tasksReducar } from './reducer/tasksReducar';



const rootReducer = combineReducers({
    users: userReducer, 
    tasks: tasksReducar
})

export const store = createStore(rootReducer);