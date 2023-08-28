const words = [ "apple", "banana", "carrot", "dog", "elephant", "flower", "guitar", "house", "island", "jacket" ];

const ADD = 'ADD'

  export const addWordsAction = (payload) => ({type: ADD, payload});

  export const wordsReducer = (state = words, action) => {
    return state
  }