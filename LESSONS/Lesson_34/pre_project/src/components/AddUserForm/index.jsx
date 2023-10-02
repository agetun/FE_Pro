import React from 'react'
import { addNewUser } from '../../request/users_req'
import { useDispatch } from 'react-redux';


export default function AddUserForm() {

    const dispatch = useDispatch();

  const submit = e => {
    e.preventDefault()
    const { name, role, email } = e.target;
    const new_user = {
      email: email.value,
      name: name.value,
      password: 'Qwerty1234',
      role: role.value,
      avatar: 'https://i.imgur.com/zQwsC2m.jpeg'
    }
    dispatch(addNewUser(new_user))
    e.target.reset()
  }

  return (
    <div>
        <form onSubmit={submit}>
            <input type='text' placeholder='Email' name='email' />
            <input type='text' placeholder='Name' name='name' />
            <input type='text' placeholder='Role' name='role' />
            <button>Add new user</button>
    </form>
    </div>
  )
}
