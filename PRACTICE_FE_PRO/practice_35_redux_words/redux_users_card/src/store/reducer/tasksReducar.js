const defaultState = [];

const ADD = '[TASKS] ADD';
const REMOVE = '[TASKS] REMOVE';
const CLEAR = '[TASKS] CLEAR'; // Добавьте определение CLEAR
const CHANGE_CHECKBOX = "[TASKS] CHANGE_CHECKBOX" 

export const addAction = (payload) => ({ type: ADD, payload });
export const removeAction = (payload) => ({ type: REMOVE, payload });
export const clearAction = () => ({ type: CLEAR }); // Добавьте определение clearAction
export const changeCheckboxAction = (id, def) => ({type: CHANGE_CHECKBOX, payload: {id, def}})

export const tasksReducar = (state = defaultState, action) => {
  if (action.type === ADD) {
    return [...state, { id: Date.now(), ...action.payload }];
  } else if (action.type === REMOVE) {
    return state.filter(({ id }) => id !== action.payload);
  } else if (action.type === CLEAR) {
    return []; // Очищаем список задач
  } else if (action.type === CHANGE_CHECKBOX) {
    const targetPost = state.find(elem => elem.id === action.payload.id);
    targetPost.done = action.payload.id;
    return [...state]; 
  }
  return state;
};



// const defaultState = [];

// const ADD = '[TASKS] ADD';
// const REMOVE ='[TASKS] REMOVE';
// const CLEAR ='[TASKS] CLEAR';


// export const addAction = (payload) => ({ type: ADD, payload });
// export const removeAction = (payload) => ({ type: REMOVE, payload });
// export const clearAction = () => ({ type: CLEAR });


// export const tasksReducar = (state=defaultState, action) => {
//     if (action.type === ADD) {
//         return [...state, {id: Date.now(), ...action.payload }]
//     }else if (action.type === REMOVE) {
//         return state.filter(({id}) => id !== action.payload)
//     }else if (action.type === CLEAR) {
//         return [];
//     }
//     return state
// }