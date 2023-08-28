import { createStore, combineReducers } from 'redux';
import { wordsReducer } from './reducers/wordsReducer';
import { productsReducer } from './reducers/productReducer';


const rootReducer = combineReducers({
  words: wordsReducer,
  products: productsReducer
});

export const store = createStore(rootReducer);