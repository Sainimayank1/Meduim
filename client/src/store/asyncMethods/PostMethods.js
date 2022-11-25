import axios from "axios"
const token = localStorage.getItem("MeduimToken")

 const createAction = (postData) =>
{
    return async(dispatch) =>
    {
        dispatch({type:"SET_LOADER"})
        try {
            const config =
            {
                header:{
                    Authorizaton: 'Bearer ${token}'
                }
            }

            const data  = await axios.post("http://localhost:5000/create_post",postData,config);
            dispatch({type:"CLOSE_LOADER"})
            console.log(data);
        } catch (error) {
            dispatch({type:"CLOSE_LOADER"})
            dispatch({type:"CREATE_ERRORS" ,payload:error.response.data.errors})
            console.log(error.response);
        }

    }
}


export default createAction