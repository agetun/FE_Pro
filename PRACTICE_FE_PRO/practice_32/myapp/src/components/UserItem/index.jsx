import React from 'react'
import s from './style.module.css'

export default function UserItem({ id, first_name, last_name, remove, avatar, age, incrAge }) {
  return (
    <div className={s.item}>
        <img src={avatar} alt={`${first_name} ${last_name}`} />
        <p>{first_name}</p>
        <p>{last_name}</p>
        <p>{age}</p>
        <button onClick={() => incrAge(id)}>+</button>
        <button onClick={() => remove(id)}>Удалить</button>
    </div>
  )
}
