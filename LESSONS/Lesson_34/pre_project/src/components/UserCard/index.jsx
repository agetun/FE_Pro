import React from 'react'

export default function UserCard({ name, role }) {
  return (
    <div>
        <p>name: {name}</p>
        <p>role:{role}</p>        
    </div>
  )
}
