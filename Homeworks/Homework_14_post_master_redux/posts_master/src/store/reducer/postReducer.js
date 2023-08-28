const posts_data = [
    {
      id: 1,
      title: 'My university',
      description: 'I like my university',
      like: false,
      comments: [
        {
          id: 1,
          comment: 'You are right!'
        },
        {
          id: 2,
          comment: 'All right'
        },
        {
          id: 3,
          comment: 'Great point!!'
        }
      ]
    },
    {
      id: 2,
      title: 'About weather',
      description: "It's very hot today",
      like: true,
      comments: []
    },
    {
      id: 3,
      title: 'My dog',
      description: 'My dog is beautiful',
      like: false,
      comments: []
    }
  ]

  const DELETE_POST = 'DELETE_POST'
  
  export const deletePostAction = payload => ({type: DELETE_POST, payload})

export const postsReducer = (state = posts_data, action) => {
    if(action.type === DELETE_POST){
        return state.filter(({id}) => id !== action.payload)
    }
    return state
}