import axios from "axios"

export const postRegister = (state) => {
  return async (dispatch) => {
    const config =
    {
      header: {
        'Content-type': 'application/json'
      }
    }

    dispatch({ type: 'SET_LOADER' })
    try {
      const response = await axios.post('http://localhost:5000/register', state, config)
      if (response) {
        localStorage.setItem('MeduimToken',response.data.token);
      }
      else
        dispatch({ type: "REGISTER_ERRORS", payload: response.data.errors })
      dispatch({ type: "CLOSE_LOADER" })

    } catch (error) {
      dispatch({ type: "CLOSE_LOADER" })
      dispatch({ type: "REGISTER_ERRORS", payload: error.response.data.errors })
    }
  }
}