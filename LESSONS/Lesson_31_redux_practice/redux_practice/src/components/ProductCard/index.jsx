import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { changeColordAction, deleteCardAction } from '../../store/reducers/productReducer';

export default function ProductCard({ id, title, price, color, clicked }) {

  const dispatch = useDispatch();

  const styles = {
    backgroundColor: clicked ? 'lightpink' : 'lightgray'
  }

  return (
    <div 
      className={s.product}
      style={styles}
      onClick={() => dispatch(changeColordAction(id))}
    >
      <span 
        className={s.close}
        onClick={() => dispatch(deleteCardAction(id))}
      >
        X
      </span>
      <p>Title: {title}</p>
      <p>Price: {price}$</p>
      <p>Color: {color}</p>
    </div>
  )
}