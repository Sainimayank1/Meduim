// import React from 'react'
import axios from "axios"

function fetchPosts(id) {
    return async (dispatch, getData) => {
        const { authReducer } = getData();
        const token = authReducer.token
        dispatch({ type: "SET_LOADER" })
        const config =
        {
            headers: {
                Authorizaton: 'Bearer ' + token
            }
        }
        try {
            const response = await axios.get('http://localhost:5000/posts/' + id, config)
            // console.log(response.data.data);
            dispatch({ type: "CLOSE_LOADER" })
            dispatch({type:"SET_POSTS" , payload : response.data.data})
        } catch (error) {
            dispatch({ type: "CLOSE_LOADER" })
        }
    }
}

export default fetchPosts