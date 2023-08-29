import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'


export default function NavMenu() {
  return (
    <div className={s.nav_menu}>
      <Link to='/'>Main</Link>
      <Link to='/categories'>All categories</Link>
      <Link to='/products'>All Products</Link>
      <Link to='/cart'>Cart</Link>
    </div>
  )
}
