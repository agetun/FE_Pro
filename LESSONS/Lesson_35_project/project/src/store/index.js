import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { categoriesReducer } from "./reducer/categoriesReducer";
import { productsByCategoryReducer } from "./reducer/productsByCategoryReducer";

const rootReducer = combineReducers({
    categories: categoriesReducer,
    productsByCategory: productsByCategoryReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));