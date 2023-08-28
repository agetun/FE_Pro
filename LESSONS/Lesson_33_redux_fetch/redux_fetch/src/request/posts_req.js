import { loadAllPostsAction } from "../store/reducer/postsReducer"
import { loadSinglePostAction } from "../store/reducer/singlePostReducer"

export const getAllPosts = (callback) => {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(json => callback(loadAllPostsAction(json.posts)))     
}

export const getSinglePost = id => {
    return dispatch => {
        fetch(`https://dummyjson.com/posts/${id}`)
        .then(res => res.json())
        .then(json => dispatch(loadSinglePostAction(json)))}
         
}