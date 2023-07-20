import React  from 'react'
import s from './index.module.css'
import { useContext } from 'react';
import { Context } from '../../context';

export default function AddCardForm() {

  const { add_card } = useContext(Context)

    const submit = e => {
        e.preventDefault();
        const { rus, eng, lang } = e.target;
        const new_card = {
          id: Date.now(),
          rus: rus.value,
          eng: eng.value,
          lang: lang.value
        }
        add_card(new_card);
        e.target.reset()
      }

  return (
    <form onSubmit={submit} className={s.add_form}>
        <input type="text" placeholder='RUS' name='rus' />
        <input type="text" placeholder='ENG' name='eng' />
        {/* <input type="text" placeholder='LANG' name='lang' /> */}
        <select name='lang'>
            <option value='rus'>RUS</option>
            <option value='eng'>ENG</option>
      </select>
        <button>Add card</button>
    </form>
  )
}
