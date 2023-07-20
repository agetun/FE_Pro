import React from 'react'

export default function AddUser() {

    const setRandomAge = (userID) => {
        const target = userList.find(({id}) => id === userID);
        target.age = Math.round(Math.random() * 38 + 2);
        setRandomAge([...userList]);
    }

  return (
    <div>AddUser</div>
  )
}
