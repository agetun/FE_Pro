import React from 'react'

import s from "./index.module.css"

export default function AddPostForm() {

    

    const submit = e => {
        e.preventDefault();
        const { title, description } = e.target;
        const new_post = {
            id: Date.now(),
            title: title.value,
            description:description.value,
            like: false,
            comments: []
        }
        add_post(new_post);
        e.target.reset()
    }

  return (
    
        <div className={s.post}>
            <form onSubmit={submit}>
            <input type="text" placeholder='Title' name='title' />
            <input type="text" placeholder='Description' name='description' />
            <button>Add</button>
        </form>
        </div>
        
    
  )
}
