import React, { useState } from 'react'
import { users } from './users'
import UserItem from '../UserItem';
import s from './style.module.css'

export default function UsersContainer() {

    const [ usersList, setUsersList ] = useState(users)

    const remove = (delId) => {
        const newArr = usersList.filter(({id}) => id !== delId);
        setUsersList(newArr);
    } 

    const incrAge = (incrId) => {
        const target = usersList.find(({id}) => id === incrId);
        target.age++;
        setUsersList([...usersList])
    }

    // const remove_1 = (delId) => setUsersList(usersList.filter(({id}) => id !== delId));

    console.log(users);
  return (
    <div className={s.container}>
        {
            usersList.map(item => <UserItem key={item.id} {...item} remove={remove} incrAge={incrAge}  />)
        }
    </div>
  )
}

// создать state usersList и пройтись по нему map-ом 
// для каждого пользователя создать параграф с его именем
