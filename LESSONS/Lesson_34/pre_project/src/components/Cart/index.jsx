import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../CartItem'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { clearCartAction } from '../../store/reducer/cartReducer'

export default function Cart() {

    const cart_state = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const total = cart_state.reduce((acc, el) => acc + el.price * el.count, 0);

  return (
    <div>
        <p>Cart:</p>
        <div>
            {
                cart_state.map(el => <CartItem key={el.id} {...el} />)
            }
        </div>
        <div 
        className={s.clear_btn}
        onClick={() => dispatch(clearCartAction())}
        >
          Clear cart
          </div>
          <p>Total: {total}</p>
        
    </div>
  )
}
