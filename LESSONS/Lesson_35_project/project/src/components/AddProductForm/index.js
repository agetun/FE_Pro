import React from 'react'
import { useDispatch } from 'react-redux'
import { addProductAction } from '../../store/reducer/productsReducer';


export default function AddProductForm() {

    const dispatch = useDispatch();

    const submit = e => {
        e.preventDefault();
        const { title, price } = e.target;
        const new_product = {
          id: Date.now(),
          title: title.value,
          price: +price.value
        }
        console.log(new_product);
        dispatch(addProductAction(new_product));
        e.target.reset()
      }

  return (
    <div>
       <form onSubmit={submit}>
            <input type="text" placeholder='title' name='title' />
            <input type="text" placeholder='price' name='price' />
            <button>Add product</button>
        </form>         
    </div>
  )
}
