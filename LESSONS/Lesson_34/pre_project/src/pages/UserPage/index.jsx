import React from 'react'
import UsersContainer from '../../components/UsersContainer'
import AddUserForm from '../../components/AddUserForm'

export default function UserPage() {
  return (
    <div>
        <AddUserForm />
        <UsersContainer />
    </div>
  )
}
