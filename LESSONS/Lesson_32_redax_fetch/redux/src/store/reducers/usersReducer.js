const LOAD_ALL_USERS = 'LOAD_ALL_USERS';
const DELETE_USERS = 'DELETE_USERS';

export const loadAllUsersAction = payload => ({ type: LOAD_ALL_USERS, payload });
export const deleteUsersAction = payload => ({ type: DELETE_USERS, payload });

export const usersReducer = (state = [], action) => {
    if(action.type === LOAD_ALL_USERS){
        return action.payload
    } else if(action.type === DELETE_USERS) {
        return state.filter(el => el.id !== action.payload)
    } else {
        return state
    }
}