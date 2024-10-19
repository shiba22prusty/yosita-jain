import React, { useState } from 'react'

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className='container'>
      <div className='form-container'>
        <div className='form-toggle'>
          <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>LogIn</button>
          <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>SignUp</button>
        </div>
        {isLogin ? <>
          <div className='form'>
            <h2>Login Form</h2>
            <input type='email' placeholder='Email' />
            <input type='Password' placeholder='Password' />
            <a href='#'>Forget Password</a>
            <button>Login</button>
            <p>Not a Member? <a href='#' onClick={() => setIsLogin(false)}>SignUp</a></p>
          </div>
        </> : <>
        <div className='form'>
          <h2>ShinUp Form</h2>
          <input type='email' placeholder='Email' />
          <input type='Password' placeholder='Password' />
          <input type='Password' placeholder='Conform Password' />
          <button>SignUp</button>
          </div>
        </>}
      </div>
    </div>
  )
}

