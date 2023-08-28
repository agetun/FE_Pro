import React from 'react'
import s from './index.module.css'




export default function CommentItem({ id, comment, post_id }) {

  

  return (
    <div 
    className={s.item}
    onClick={() => delete_comment(id, post_id)}
    >
      {comment}</div>
  )
}
