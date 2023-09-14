import React from 'react'
import { useSelector } from 'react-redux'
import ProductsContainer from '../../components/ProductsContainer'
import SortForm from '../../components/FilterForms/SortForm'
import FilterForm from '../../components/FilterForms/FilterForm'
import DiscountProductForm from '../../components/FilterForms/DiscountProductForm'

export default function AllProductsPage() {

  const all_products_state = useSelector(state => state.allProducts)

  console.log(all_products_state);

  return (
    <div>
      <FilterForm />  

      <SortForm />
      
      <DiscountProductForm />    
      <ProductsContainer products={all_products_state} />
    </div>
  )
}
