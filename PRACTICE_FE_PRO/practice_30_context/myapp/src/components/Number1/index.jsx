import React, { useContext } from 'react'
import { Context } from '../../context'


export default function Number1() {

  const {number1} = useContext(Context)
  return (
    <div>{number1}</div>
  )
}
