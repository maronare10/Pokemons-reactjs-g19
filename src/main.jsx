import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import Pokemon from './Pokemon'
import Login from './Login'
import Layout from './Layout'
import AuthValidation from './AuthValidation'
import Register from './Register'

const primaryRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        index: '/',
        element: <AuthValidation />,
        children: [
          {
            index: true, // Ruta por defecto
            element: <App />
          },
          {
            path: '/pokemon/:id',
            element: <Pokemon />
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={primaryRoutes} />
  </React.StrictMode>,
)
