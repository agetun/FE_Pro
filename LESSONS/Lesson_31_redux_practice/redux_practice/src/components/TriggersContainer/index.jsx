import React from 'react'
import { useDispatch } from 'react-redux'
import { changToEngAction, changToRusAction } from '../../store/reducers/wordsReducer';
import s from './index.module.css'

export default function TriggersContainer() {

    const dispatch = useDispatch();

  return (
    <div className={s.triggers}>
        <div onClick={() => dispatch(changToRusAction())}>RUS</div>
        <div onClick={() => dispatch(changToEngAction())}>ENG</div>
    </div>
  )
}
