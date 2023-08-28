import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { postsReducer } from "./reducer/postsReducer";
import { singlePostReducer } from "./reducer/singlePostReducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    singlePost: singlePostReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));