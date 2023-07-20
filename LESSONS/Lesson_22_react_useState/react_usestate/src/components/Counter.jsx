import React, { useState } from 'react'


export default function Counter() {

    let [ likes, setLikes ] = useState(0)
    // состояние
    // функция, отслеживающая изменение состояния

    // let likes = 0;

    const increment = () => {
        setLikes(likes += 1)
        console.log(likes
            );
    }
    const decrement = () => {
        setLikes(likes -= 1)
        console.log(likes
            );
    }

  return (
    <div>
        <p>{ likes }</p>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
    </div>
  )
}
