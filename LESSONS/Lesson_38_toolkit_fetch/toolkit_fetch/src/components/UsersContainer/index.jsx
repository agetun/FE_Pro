import React from 'react'
import { useSelector } from 'react-redux'
import UsersCard from '../UsersCard';

export default function UsersContainer() {

    const users_state = useSelector(state => state.users);

    console.log(users_state);

  return (
    <div>
        {
            users_state.status === 'error'
            ? <p>Sorry, there is an error</p>
            : users_state.list.map(el => <UsersCard key={el.id} {...el} />)
        }
    </div>
  )
}
