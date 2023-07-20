import React from 'react'
import CardItem from '../CardItem/index'
import s from './index.module.css'
import { useContext } from 'react'
import { Context } from '../../context'

export default function CardsContainer() {

  const { cards } = useContext(Context)

  return (
    <div className={s.cards_container}>
      {
        cards.map(el => <CardItem key={el.id} {...el}  />)
      }
    </div>
  )
}
