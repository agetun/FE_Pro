import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoItem from '../TodoItem';
import { delete_all_todos } from '../../store/slice/todoSlice';

export default function TodosContainer() {

  const todos_state = useSelector(state => state.todos.list)

  console.log(todos_state);

  const dispatch = useDispatch()

  return (
    <div>
      {
        todos_state.map(el => <TodoItem key={el.id} {...el} />)
      }
      <div>
        <button onClick={() => dispatch(delete_all_todos())}>
          Delete all tasks
        </button>
      </div>
    </div>
  )
}
