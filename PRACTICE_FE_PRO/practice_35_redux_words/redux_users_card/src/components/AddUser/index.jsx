import React from 'react'
import s from './style.module.css'
import { addAction } from '../../store/reducer/userReducer';
import { useDispatch } from 'react-redux'
import { clearAction } from '../../store/reducer/tasksReducar';

export default function AddUser() {

    const dispatch = useDispatch();

    const onSubmit = event => {
        event.preventDefault();
        const {name, lastname, age, gender} = event.target;
        const user = {
            name: name.value,
            lastname: lastname.value,
            age: +age.value,
            gender: gender.value
        };
       dispatch(addAction(user));
        event.target.reset()
    }

  return (
    <form onSubmit={onSubmit} className={s.form}>
<input type="text" name='name' placeholder='name'/>
<input type="text" name='lastname' placeholder='lastname'/>
<input type="number" min={0} max={140} name='age' placeholder='age'/>
<select defaultValue={undefined} name="gender">
    <option disabled value={undefined}>Select gender</option>
    <option value="m">Male</option>
    <option value="f">Female</option>
</select>
<button>Add</button>
<button type='button' onClick={() => dispatch(clearAction())}>CLEAR</button>
    </form>
  )
}