import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from './hooks/useAuth'

const Register = () => {
  const [form, setForm] = useState({ email: '' })

  const { registerUser } = useAuth()

  const navigate = useNavigate()

  const handleChange = (e) => {
    const value = e.target.value
    setForm({ email: value })
  }

  const handleRegister = (e) => {
    e.preventDefault()

    registerUser({ email: form.email })

    navigate('/login')
  }

  return (
    <form onSubmit={handleRegister}>
      <h1>Register</h1>
      <div><Link to='/login'>Login</Link></div>
      <label htmlFor="">
        Email
        <input type="text" name="email" onChange={handleChange} />
        <button>Register</button>
      </label>
      {JSON.stringify(form)}
    </form>
  )
}

export default Register