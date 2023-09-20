import React from 'react'
import { useDispatch } from 'react-redux';
import { getDiscountProductsAction } from '../../../store/reducer/allProductsReducer'; 
import { useState } from 'react';

export default function DiscountProductForm() {

   const dispatch = useDispatch();

  const [ checkboxChecked, setCheckboxChecked ] = useState(false);

  const handleChange = () => setCheckboxChecked(!checkboxChecked);

  // console.log(checkboxChecked);

  const get_discount_products = e => dispatch(getDiscountProductsAction(e.target.checked));


  return (
    <div>
       <label>
        <p>Discounted items:</p>
        <input type='checkbox' checked={checkboxChecked} onChange={handleChange} onClick={get_discount_products} />
      </label>
    </div>
  )
}
