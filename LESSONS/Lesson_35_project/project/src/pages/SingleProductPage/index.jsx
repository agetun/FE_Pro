import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../../request/products_req' 
import { useParams } from 'react-router-dom'
import s from './index.module.css'
// import { Link } from 'react-router-dom'

export default function SingleProductPage() {
  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => dispatch(getSingleProduct(id)), [])

  const single_product_state = useSelector(state => state.singleProduct)

  
  const { title, price, discont_price, description,  image } = single_product_state

  // console.log(single_product_state);

  return (
    <div className={s.product_item}>
       <img src={`http://localhost:3333${image}`} alt={title} />
      <div>
        <p>{title}</p>
        <p>Description: {description}</p>
        <p>Price: {price}$</p>  
        <p>Discount: {discont_price}</p> 

         {/* <Link to={`/categories/${id}`}> */}
          {/* <p>{id}</p> */}
        {/* </Link> */}
        {/* <div className={s.add_btn}>Add to card</div>     */}
       
      </div>
    </div>
  )
}