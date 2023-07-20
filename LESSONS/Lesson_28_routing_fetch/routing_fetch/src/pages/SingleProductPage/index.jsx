import React from 'react'
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../../components/requests/products_req';

export default function SingleProductPage() {

    const { id } = useParams();

    console.log(id);

    getSingleProduct(id)

  return (
    <div>SingleProductPage</div>
  )
}
