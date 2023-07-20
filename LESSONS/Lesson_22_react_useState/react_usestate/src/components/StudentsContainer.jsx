import React from 'react'
import Student from './Student'

export default function StudentsContainer({ students, delete_student }) {

   

  return (


    <div>
           
    <div>
        {
        students.map(el => <Student key={el.id} {...el} 
        delete_student={delete_student}/>)
        }
    </div>

    </div>


  )
}
