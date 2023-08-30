import { loadAllCategoriesAction } from "../store/reducer/categoriesReducer"


export const getAllCategories = (dispatch) => {
  fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(json => dispatch(loadAllCategoriesAction(json)))
}


