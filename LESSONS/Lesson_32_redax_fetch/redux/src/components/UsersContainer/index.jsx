import React, { useEffect } from 'react'
import { getAllUsers } from '../../requests/users_req'
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../UserCard';

export default function UsersContainer() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllUsers)
  }, []);

  const users_state = useSelector(store => store.users);
  

  return (
    <div>
      {
        users_state.map(el => <UserCard key={el.id} {...el} />)
      }
    </div>
  )
}
