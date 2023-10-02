import { loadAllProductsAction } from "../store/reducer/allProductsReducer"
import { loadProductsByCategoryAction } from "../store/reducer/productsByCategoryReducer"
import { loadSingleProductAction } from "../store/reducer/singleProductReducer"

export const getProductsByCategory = category => {
    return dispatch => {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(json => dispatch(loadProductsByCategoryAction(json)))
    }
  }


  export const getAllProducts = dispatch => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => dispatch(loadAllProductsAction(json)))
  }


  export const getSingleProduct = id => {
    return dispatch => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(json => dispatch(loadSingleProductAction(json)))
    }
  }


  export const addNewProduct = new_product => {
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      body: JSON.stringify({new_product})
    })
      .then(res => res.json())
      .then(json => console.log(json, 'new product added'))
  }