import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { decrementCountAction, incrementCountAction } from '../../store/reducer/postsReducer';
import { Link } from 'react-router-dom';


export default function PostItem({ id, title, body, tags, reactions }) {

  const dispatch = useDispatch();

  const body_short = body.slice(0, 99) + '...'

  return (
    <div className={s.post_item}>
      <h3>{title}</h3>
      <p>
        {body_short}
        <Link to={`/post/${id}`}>
        Читать далее
        </Link>
        </p>
      
      <div className={s.post_tags}>
        <p>Tags:</p>
        {
          tags.map(el => <div className={s[el]} key={el}>{el}</div>)
        }
      </div>

      {/* s[el] === s['history']
      s[el] === s['american']
      s[el] === s['crime'] */}
      
      <div className={s.post_likes}>
        <p>Likes: {reactions}</p>
        <div>
          <button onClick={() => dispatch(decrementCountAction(id))}>-</button>
          <button onClick={() => dispatch(incrementCountAction(id))}>+</button>
        </div>

        <Link to={`/post/${id}`}>
          <div className={s.single_tags}>
            Open post
          </div>
        </Link>

      </div>
      <p
      className={s.delete_post}
      // onClick={() => dispatch(deletePostAction(id))}
      >
        X
        </p>

    </div>
  )
}