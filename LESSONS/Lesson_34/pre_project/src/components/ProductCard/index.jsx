import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../../store/reducer/cartReducer';

export default function ProductCard({ id, image, title, price, category, category_show }) {

  const dispatch = useDispatch();

  return (
    <div className={s.card_item}>
      <Link to={`/products/${id}`}>
        <div className={s.card}>
            <img src={image} alt={title} />
            <p>{ title }</p>
            <p>{ price }$</p>
            
            {
              category_show ? <p>Category: { category }</p> : ''
            }
            
        </div>
    </Link>
    <div 
    className={s.add_btn}
    onClick={() => dispatch(addToCartAction({ id, image, title, price }))}
    >
      Add to cart</div>
    </div>
    
  )
}
