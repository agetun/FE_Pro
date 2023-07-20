import React from 'react'
import Circle from '../Circle'
import Number1 from '../Number1'
import Number2 from '../Number2'
import Number3 from '../Number3'

export default function Square() {
  return (
    <div>
      
        <Circle>
            <Number1 />
        </Circle>
        <Circle>
            <Number2 />
        </Circle>
        <Circle>
            <Number3 />
        </Circle>
    </div>
  )
}
