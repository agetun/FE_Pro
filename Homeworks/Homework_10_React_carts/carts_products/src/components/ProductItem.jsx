import React from 'react'

export default function ProductItem({id, title, price, country, address, delete_product}) {
  return (
    <div>        
        <p>Title: { title }</p>
        <p>Price: { price }</p>
        <p>Country: { country }</p>
        <p>Address: { address.city }, { address.street }</p>   
    </div>
  )
}
