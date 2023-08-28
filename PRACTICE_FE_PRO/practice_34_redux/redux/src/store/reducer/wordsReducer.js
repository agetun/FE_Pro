import WordsList from "../../components/WordsList"

const words = [
    {id: 1, value: 'велосипед'},
    {id: 2, value: 'ролики'},
    {id: 3, value: 'самокат'},
    {id: 4, value: 'лыжи'},
    {id: 5, value: 'скейт'},
]

const REMOVE = 'REMOVE'

export const removeAction = (payload) => ({type: REMOVE, payload}) 

export const wordsReducer = (state = words, action) => {
    if (action.type === REMOVE) {
        state.filter(({id}) => id !== action.payload)
    }
    return state
}