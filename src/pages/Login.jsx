import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
      <section>
        <form>
          <input type='email' placeholder='Email' />
          <input type='email' placeholder='password' />
          <button type='submit'>Login</button>
          <h1>Or</h1>
          <Link to="/register">Sign Up</Link>
        </form>
      </section>
    </div>
  )
}

export default Login