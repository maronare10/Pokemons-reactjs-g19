import { useState } from "react"

const useAuth = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || { email: '' })

  const isAuth = Boolean(user.email) // Si estas logueado

  const logout = () => {
    localStorage.removeItem('user')
  }

  const setAuth = (user) => {
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
  }

  const registerUser = (user) => {
    localStorage.setItem('register', JSON.stringify(user))
  }

  const getRegisteredUser = (user) => {
    return JSON.parse(localStorage.getItem('register'))
  }

  return {
    user,
    isAuth,
    setAuth,
    logout,
    registerUser,
    getRegisteredUser
  }
}

export default useAuth