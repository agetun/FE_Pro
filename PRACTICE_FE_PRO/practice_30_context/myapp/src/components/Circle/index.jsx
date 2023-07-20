import React, { children } from 'react'



export default function Circle({children}) {
    console.log(children);
    
    
  return (
    <div>        
       {children} 
    </div>
  )
}
