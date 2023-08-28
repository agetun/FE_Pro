import React from 'react'
import s from './index.module.css'
import LikeBtn from '../LikeBtn'
import CommentsContainer from '../CommentsContainer'
import { deletePostAction } from '../../store/reducer/postReducer'
 
export default function PostItem({ id, title, description, like, comments }) {

  

   
  return (
    <div className={s.post_item}>
        <p onClick={() => dispatch(deletePostAction(id)) (id)}>X</p>
        <LikeBtn like={like} post_id={id} />
        <h3>{ title }</h3>
        <p>{ description }</p>         
        <CommentsContainer comments={comments} post_id={id} />
                
        
    </div>
  )
}
