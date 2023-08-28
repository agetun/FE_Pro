import { createStore, combineReducers } from 'redux';
import { postsReducer } from './reducer/postReducer';

const rootReducer = combineReducers({
    sobaka: postsReducer    
  });

export const store = createStore(rootReducer); 