import React from 'react'
import { useDispatch } from 'react-redux';
import { getCheapProductsAction } from '../../../store/reducer/allProductsReducer';
import { useState } from 'react';

export default function CheapProductForm() {

   const dispatch = useDispatch();

  const [ checkboxChecked, setCheckboxChecked ] = useState(false);

  const handleChange = () => setCheckboxChecked(!checkboxChecked);

  console.log(checkboxChecked);

  const get_products = e => dispatch(getCheapProductsAction(e.target.checked));


  return (
    <div>
       <label>
        <p>Items cheaper than 100$:</p>
        <input type='checkbox' checked={checkboxChecked} onChange={handleChange} onClick={get_products} />
      </label>
    </div>
  )
}
