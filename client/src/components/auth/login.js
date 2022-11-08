import React from 'react'
import "../../scss/components/_login.scss"
function Login() {
  return (
    <div className='login-container'>
      <div className='login-form'>
        <span>Login</span>
        <form id='login-form'>
          <input type="text" name="email" placeholder='Enter Email' required></input>
          <input type="password" name="password" placeholder='Enter Password' required></input>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login