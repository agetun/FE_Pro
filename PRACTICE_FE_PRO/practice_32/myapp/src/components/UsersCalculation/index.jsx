import React from 'react'
import s from './style.module.css'

export default function UsersCalculation({usersList}) {
    const sum = usersList.reduce((acc, {age}) => acc + +age, 0);

  return (
    <div className={s.container}>
        <p>Всего пользователей: {usersList.lenght}</p>
        <p>Средний возраст: {Math.round(sum / usersList.lenght)}</p>
    </div>
  )
}
