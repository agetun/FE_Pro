import React from 'react'
import s from './index.module.css'
import { forwardRef } from 'react';

const FormInput = forwardRef((props, ref) => {
  return (
    <input {...props} className={s.input} ref={ref} />
  )
})

export default FormInput;


// способ 1

// export default function FormInput({ type, placeholder, name }) {
//     return (
//       <input type={type} placeholder={placeholder} name={name} />
//     )
//   }