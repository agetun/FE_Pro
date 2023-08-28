import React from 'react';
import { useSelector } from 'react-redux';
import User from '../User';
import s from './style.module.css'

export default function UserList() {
    const users = useSelector(({users}) => users);

    return (
        <div className={s.users}>
            {
                users.map(user => <User key={user.id} {...user} />)
            }
            </div>
    )
}