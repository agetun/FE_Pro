import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../../store/reducer/cartReducer'


export default function ProductCard({ id, title, image, price, discont_price, description, createdAt, updatedAt, categoryId }) {

  const dispatch = useDispatch();

  return (
    <div className={s.card_item}>
        <Link to={`/products/${id}`}>
          <div className={s.product_card}>
            <img src={`http://localhost:3333${image}`} alt={title} />
              <p>{ title }</p>
              <p>{ price }$</p>
              {/* <p>{ discont_price }</p> */}
              {/* <p>{ description }</p> */}
              {/* <p>{ createdAt }</p> */}
              {/* <p>{ updatedAt }</p> */}
              {/* <p>{ categoryId }</p> */}
              
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


// discont_price, description, createdAt, updatedAt, categoryId 