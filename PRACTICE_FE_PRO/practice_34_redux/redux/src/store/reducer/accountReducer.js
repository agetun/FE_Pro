const DEPOSIT = 'DEPOSIT'
const WITHDRAW = 'WITHDRAW'
const RESET = 'RESET'
 
export const depositAction = (payload) => ({type: DEPOSIT, payload});
export const withdrawAction = (payload) => ({type: WITHDRAW, payload});
export const resetAction = (payload) => ({type: RESET, payload});

export const accountReducer = (state = 0, action) => {
    if (action.type === DEPOSIT){
        return state + action.payload;
    } else if (action.type === WITHDRAW){
        return state - action.payload;
    } else if (action.type === RESET){
        return 0;
    }
    return state;
}