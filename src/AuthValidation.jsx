import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import useAuth from './hooks/useAuth'

const AuthValidation = () => {
  const { isAuth, user } = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    console.log('>>>', isAuth, user)
    if (!isAuth) {
      navigate('/login')
    }
  }, [isAuth])

  return (<Outlet />)
}

export default AuthValidation