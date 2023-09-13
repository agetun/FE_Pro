import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import logoImg from '../../images/logo.png'
import cart from '../../images/cart.png'


export default function NavMenu() {
  return (
    <div className={s.nav_menu}>
      <img src={logoImg} alt="logo" />
      <Link to='/categories'>Catalog</Link>
      <Link to='/'>Main Page</Link>
      
      <Link to='/products'>All Products</Link>
      <Link to='/cart'><img src={cart} alt='cart' /></Link>      
    </div>
  )
}
