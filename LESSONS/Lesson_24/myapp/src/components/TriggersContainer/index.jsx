import React from 'react'
import s from './index.module.css'
import TriggersBtn from '../TriggerBtn'
import { useContext } from 'react'
import { Context } from '../../context'

export default function TriggersContainer() {

  const { change_to_rus, change_to_eng } = useContext(Context)

  return (
    <div className={s.container}>
      <TriggersBtn text='RUS' click={change_to_rus} />
      <TriggersBtn text='ENG' click={change_to_eng} />
    </div>
  )
}
