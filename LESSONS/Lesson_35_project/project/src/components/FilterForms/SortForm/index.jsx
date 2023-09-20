import React from 'react'
import { useDispatch } from 'react-redux'
import { sortProductsAction } from '../../../store/reducer/allProductsReducer'

export default function SortForm() {

  const dispatch = useDispatch();

  const order = e => dispatch(sortProductsAction(e.target.value));

  return (
    <div>
      <label>
      <p>Sorted:</p>
        <select onInput={order}>
          <option value='default'>By default</option>
          <option value='title'>By alphabet A-Z</option>
          <option value='price_asc'>By price ASC</option>
          <option value='price_desc'>By price DESC</option>
        </select>
      </label>
    </div>
  )
}
