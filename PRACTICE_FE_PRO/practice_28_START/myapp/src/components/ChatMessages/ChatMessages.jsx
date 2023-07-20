import React from 'react'
import styles from "./ChatMessages.module.css"

/*
1. Создать компонент (например ChatMessages)
2. Импортировать его и встроить в ChatWindow блок
3. Сверстать сам компонент так чтобы в нем было просто несколько блоков сообщений (дизайн или как в телеге или на свое усотрение) достаточно просто текста и белого фона с паддингом
*/

export default function ChatMessages({ messages }) {

  


  return (
    <div className={styles.root}>
      {messages.map(({id, text}) => {
      return (
      <div key={id} className={styles.message}>{text}
      </div>
      );
      })}        
    </div>
 
 //если не модульные стили
    // <div className='ChatMessages'>
    //     <div className='ChatMessages__message'>Text</div>
    //     <div className='ChatMessages__message'>Text</div>    
    //     <div className='ChatMessages__message'>Text</div>    
    //     <div className='ChatMessages__message'>Text</div>            
    // </div>
  )
}
