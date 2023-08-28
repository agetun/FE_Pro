const ADD_WORD = 'ADD_WORD';
const DELETE_WORD = 'DELETE_WORD';
const CHANG_LANG = 'CHANG_LANG';
const CHANG_TO_RUS = 'CHANG_TO_RUS';
const CHANG_TO_ENG = 'CHANG_TO_ENG';

export const addWordAction = payload => ({type: ADD_WORD, payload});

export const deleteWordAction = payload => ({type: DELETE_WORD, payload});

export const changLangAction = payload => ({type: CHANG_LANG, payload});

export const changToRusAction = payload => ({type: CHANG_TO_RUS});

export const changToEngAction = payload => ({type: CHANG_TO_ENG});

export const wordsReducer = (state =[], action) => {
    if(action.type === ADD_WORD) {
        return [...state, action.payload]
    } else if (action.type === DELETE_WORD) {
        return state.filter(el => el.id !== action.payload)    
    } else if (action.type === CHANG_LANG) {
        const target_card = state.find(el => el.id === action.payload);
        target_card.lang = target_card.lang === 'rus' ? 'eng' : 'rus'
        return [...state]        
    } else if (action.type === CHANG_TO_RUS) {
        return state.map(el => {
            el.lang = 'rus'
            return el
        })
    } else if (action.type === CHANG_TO_ENG) {
        return state.map(el => {
            el.lang = 'eng'
            return el
        })
    } else {
        return state
    }
}