import React from 'react'
import { students_data } from '../data/students_data'

export default function Student({id, firstname, lastname, age, major, avg_grade, delete_student}) {

    
  return (
    <div onClick={() => delete_student(id)}>
        <p>{firstname} {lastname}</p>
        <p>Age: {age}</p>
        <p>Major: {major}</p>
        <p>Grade: {avg_grade}</p>
    </div>
  )
}
