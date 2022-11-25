// import React from 'react'

const init = {
  createError: []
}
const PostReducer = (state = init, action) => {
  if(action.type === "CREATE_ERRORS")
    return {...state , createError:action.payload}
  else
    return state;
}

export default PostReducer