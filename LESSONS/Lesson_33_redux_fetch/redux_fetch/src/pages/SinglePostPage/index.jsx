import React, { useEffect } from 'react'
import { getSinglePost } from '../../request/posts_req' 
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

export default function SinglePostPage() {

  const { post_id } = useParams();
  
  const dispatch = useDispatch();

  useEffect(() => dispatch(getSinglePost(post_id)), []);

  const single_post_state = useSelector(state => state.singlePost)

  console.log(single_post_state);

  return (
    <div>SinglePostPage</div>
  )
}
