import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from './hooks/useAuth'

const Login = () => {
  const { setAuth, user, getRegisteredUser } = useAuth()
  const [form, setForm] = useState({ email: '' })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const value = e.target.value
    setForm({ email: value })
  }

  const handleLogin = (e) => {
    e.preventDefault()

    console.log('login....')

    const registeredUser = getRegisteredUser()

    if (registeredUser.email === form.email) {
      setAuth({ email: form.email })
      navigate('/')
    } else {
      alert('Tu email es incorrecto')
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>
      <div><Link to='/register'>Register</Link></div>
      <label htmlFor="">
        Email
        <input type="text" name="email" onChange={handleChange} />
        <button>Login</button>
      </label>
      {JSON.stringify(form)}
    </form>
  )
}

export default Login