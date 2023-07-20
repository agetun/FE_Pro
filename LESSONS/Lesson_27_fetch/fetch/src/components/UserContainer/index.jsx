import React, { useState, useEffect } from 'react'
import { getUsers } from '../../requests/users'

export default function UserContainer() {

    const [ users, setUsers ] = useState([]);

    useEffect(() => getUsers(setUsers), []);

    console.log(users);

  return (
    <div>UserContainer</div>
  )
}
