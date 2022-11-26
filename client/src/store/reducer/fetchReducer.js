
const init = {
    posts:[]
  }
  const fetchReducer = (state = init, action) => {
    if (action.type === "SET_POSTS")
      return { posts: action.payload }
    else
      return state;
  }
  
  export default fetchReducer