import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { decr_age, delete_user, incr_age } from '../../store/slice/usersSlice';

export default function UsersCard({ id, firstName, lastName, age, gender }) {

    const dispatch = useDispatch();

  return (
    <div className={s.card}>

        {/* // Добавить к карточке крестик, при клике на который карточка пользователя удаляется */}

        <span
            onClick={() => dispatch(delete_user(id))}
        >
            X
        </span>
        <p>Name: {firstName} {lastName}</p>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
        <div>
            <button onClick={() => dispatch(decr_age(id))}>-</button>
            <button onClick={() => dispatch(incr_age(id))}>+</button>
        </div>

               
    </div>
  )
}
