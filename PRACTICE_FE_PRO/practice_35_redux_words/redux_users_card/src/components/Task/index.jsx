import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAction } from '../../store/reducer/tasksReducar'

export default function Task({id, title, userId }) {
  // Получение списка пользователей из состояния Redux
const dispatch = useDispatch();
  const user = useSelector(({users}) => users.find(elem => elem.id === +userId));

const userRow = user === undefined ? "User deleted" : `${user.name} ${user.lastname} `
  
  return (
    <div>
      <p>{`${title} (${userRow})`}</p>
      <button onClick={() => dispatch(removeAction(id))}>Delete</button>
          </div>
  );
}