import React from 'react'
import { getAllProducts } from '../../requests/products_req'
import { useDispatch, useSelector } from 'react-redux';

export default function ProductsContainer() {

  const dispatch = useDispatch();
  
  getAllProducts()

  return (
    <div>ProductsContainer</div>
  )
}
