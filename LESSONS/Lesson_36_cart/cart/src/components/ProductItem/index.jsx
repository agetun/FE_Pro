import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../../store/reducers/cartReducer'

export default function ProductItem({ id, title, price }) {

    const dispatch = useDispatch()

  return (
    <div className={s.product}>
        <p>Title: {}title</p>
        <p>Price: {price}$</p>
        <div 
        onClick={() => dispatch(addToCartAction({ id, title, price }))}
        >
            Add to cart
        </div>
    </div>
  )
}
