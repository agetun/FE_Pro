import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'



export default function CategoryCard({ id, title, image }) {
    
  

  return (
    <Link to={`/categories/${id}`}>
        <div className={s.category_card}>

          {/* {title} */}
          
         {/* это для отрисовки картинок с названием категории, потом стили переделать */}
      <h3>{title}</h3>
		  <img src={`http://localhost:3333${image}`} alt={title} />
            
        </div>
    </Link>
  )
}


// export default function CategoryCard({ title, image }) {
    
  

//   return (
//     // <Link to={`/categories/${id}`}>
//         <div className={s.category_card}>

//           <img src={`http://localhost:3333${image}`} alt={title} />
//           <h3>{title}</h3>
            
//         </div>
//     // </Link>
//   )
// }