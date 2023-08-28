import React from 'react'
import { Link } from 'react-router-dom'


export default function NavMenu() {
  return (
    <div>
      <Link to='/'>Main</Link>
      <Link to='/categories'>All categories</Link>
      <Link to='/products'>All Products</Link>
      <Link to='/cart'>Cart</Link>
    </div>
  )
}
