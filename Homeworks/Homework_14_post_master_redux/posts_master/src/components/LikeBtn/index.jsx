import React from 'react'
import s from './index.module.css'


export default function LikeBtn({ like, post_id }) {

    

    const like_text = like ? 'Liked' : 'Like?';

    const btn_styles = {
      backgroundColor: like ? 'blue' : 'black'
    }

  return (
    <div 
    className={s.like_btn} 
    style={btn_styles}
    onClick={() => change_like(post_id)}
    >
    
    { like_text }
    
    </div>
  )
}
