import { createStore, combineReducers } from "redux";
import { productsReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
});

export const store = createStore(rootReducer);