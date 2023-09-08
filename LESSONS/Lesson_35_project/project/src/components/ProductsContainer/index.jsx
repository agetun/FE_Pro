import React from 'react'
import ProductCard from '../ProductCard'
import s from './index.module.css'


export default function ProductsContainer({ products }) {

  

  return (
    <div className={s.container}>
        {
            products.map(el => <ProductCard key={el.id} {...el} />)
        }
        
    </div>
  )
}
