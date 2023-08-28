import React from 'react'
import { useSelector } from 'react-redux'
// import { store } from '../../store'
import UserCard from '../UserCard';


export default function UsersContainer() {

  const users_state = useSelector(store => store.users);

  return (
    <div>
      {
        users_state.map(el => <UserCard key={el.id} {...el} />)
      }
    </div>
  )
}
