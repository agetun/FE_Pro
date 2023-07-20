import React, { useContext } from 'react'
import { Context } from '../../context'


export default function Number3() {

  const {number3} = useContext(Context)
  return (
    <div>{number3}</div>
  )
}
