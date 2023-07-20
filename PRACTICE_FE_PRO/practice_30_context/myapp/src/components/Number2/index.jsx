import React, { useContext } from 'react'
import { Context } from '../../context'


export default function Number2() {

  const {number2} = useContext(Context)
  return (
    <div>{number2}</div>
  )
}
