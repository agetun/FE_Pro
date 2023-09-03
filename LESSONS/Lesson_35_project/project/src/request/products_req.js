import { loadProductsByCategoryAction } from "../store/reducer/productsByCategoryReducer"

export const getProductsByCategory = (id) => {
  return dispatch => {
  fetch(`http://localhost:3333/categories/${id}`)
    .then(res => res.json())
    .then(json => dispatch(loadProductsByCategoryAction(json.data)))
}
}

// export const getAllProducts = () => {};





// export const getProductsByCategory = (id) => {
//     return (dispatch) => {
//       fetch(`http://localhost:3333/products/${id}`)
//         .then((res) => res.json())
//         .then((json) => dispatch(loadProductsByCategoryAction(json)));
//     };
//   };