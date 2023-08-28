const defaultState = [
    {
      id: 1,    name: 'Alice',
      lastname: 'Johnson',
      age: 28,
      gender: 'f'
    },
    {
      id: 2,
      name: 'Bob',
      lastname: 'Smith',
      age: 35,
      gender: 'm'
    },
    {
      id: 3,
      name: 'Eva',
      lastname: 'Williams',
      age: 22,
      gender: 'f'
    },
    {
      id: 4,
      name: 'Michael',
      lastname: 'Brown',
      age: 42,
      gender: 'm'
    }
  ];
  
  const REMOVE = '[USERS] REMOVE';
  const ADD ='[USERS] ADD';
  const CLEAR ='[USERS] CLEAR';
  
  export const removeAction = (payload) => ({type: REMOVE, payload});
  export const addAction = (payload) => ({type: ADD, payload});
  export const clearAction = () => ({type: CLEAR});
  
  export const userReducer = (state=defaultState, action) => {
    if (action.type === REMOVE){
      return state.filter(({id}) => id !== action.payload)
    }else if (action.type === ADD){
      return [...state, {id: Date.now(), ...action.payload}]
    }else if (action.type === CLEAR){
      return []
    }
    return state
  }