import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function ProductCard({ id, image, title, price, category, category_show }) {
  return (
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
  )
}
