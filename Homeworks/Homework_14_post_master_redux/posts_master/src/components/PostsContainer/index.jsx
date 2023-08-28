import React from 'react'
import PostItem from '../PostItem'
import { useSelector } from 'react-redux'

export default function PostsContainer() {

  const vasya = useSelector(store => store.sobaka)
  
  return (
    <div>
      {
        vasya.map(el => <PostItem key={el.id} {...el} />)
      }
    </div>
  )
}
