import React from 'react'
import Word from '../Word'
import { useSelector } from 'react-redux'


export default function WordsList() {

  const words = useSelector(state => state.words);

  return (
    <div>
      {
        words.map(item => <Word key={item.id} {...item} />)
      }
    </div>
  )
}
