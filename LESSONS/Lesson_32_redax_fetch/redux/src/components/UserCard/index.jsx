import React from 'react'
import { deleteUsersAction } from '../../store/reducers/usersReducer'
import { useDispatch } from 'react-redux'

export default function UserCard({ id, name, username, email }) {

  const dispatch = useDispatch();

  return (
    <div>
      <span onClick={() => dispatch(deleteUsersAction(id))}>X</span>
      <p>Name: { name }</p>
      <p>Username: { username }</p>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  )
}
