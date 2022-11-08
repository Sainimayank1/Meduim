import jwt_decode from "jwt-decode"


                // Set Initail values
const initail = {
    loading: false,
    RegisterError: [],
    LoginError: [],
    token:"",
    user:"",
}

                    // Fetch token from localstorage and Decode with halp of jwt-decode
const token = localStorage.getItem("MeduimToken");
if(token)
{
    const decodedToken = jwt_decode(token)
    const expireIn = new Date(decodedToken.exp*1000);
    if(new Date() >expireIn)
        localStorage.removeItem("MeduimToken")
    else
    {
        initail.token=token;
        const {user}=decodedToken;
        initail.user=user;
    }
    // console.log(decodedToken)
}


                    // Here is reducer how acts diffrent with diffrent actions
const authReducer = (state = initail, action) => {
    if (action.type === "SET_LOADER")
        return { ...state, loading: true }
    else if (action.type === "CLOSE_LOADER")
        return { ...state, loading: false }
    else if (action.type === "REGISTER_ERRORS")
        return { ...state,RegisterError:action.payload}
    else
        return state;
}

export default authReducer;