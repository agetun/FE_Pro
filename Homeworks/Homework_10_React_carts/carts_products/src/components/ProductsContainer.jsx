import React from 'react'
import ProductItem from './ProductItem'
import { products } from '../data/products_data'


export default function ProductsContainer({prod, delete_product}) {
  return (
    <div>
        {
            products.map(elem => <ProductItem key={elem.id} {...elem} delete_product={delete_product}></ProductItem>)            
        }
    </div>
  )
}
