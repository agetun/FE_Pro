import React, { useEffect } from 'react'
import Test from '../../components/Test'

export default function Home() {


  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(resp => resp.json())
      .then(data => console.log(data.products))
  })

  return (
    <div>
      Home
      <Test />
    </div>
  )
}
