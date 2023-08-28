import React from 'react'

import s from './index.module.css'

export default function AddCommentForm({post_id}) {

    

    const submit = e => {
        e.preventDefault();
        const new_comment = {
            id: Date.now(),
            comment: e.target.comment.value
        }
        add_comment(new_comment, post_id);
        e.target.reset()
    }

  return (
    <form onSubmit={submit} className={s.add_form}>
        <input type="text" placeholder='Your comment' name='comment' />
        <button>Add comment</button>
    </form>
  )
}
