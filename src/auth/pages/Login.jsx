import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context'

export const Login = () => {

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = () => {

    login("Daniel Araya");
    
    const lastPath = localStorage.getItem("lastPath") ?? "/";

    navigate(lastPath, {
      replace: true
    })

  }

  return (
      <>
        <div className="container pt-4">
          <h1>Login</h1>
          <hr />
          <button onClick={ handleLogin } className='btn btn-secondary'>
              Log in
          </button>
        </div>
      </>
  )
}
