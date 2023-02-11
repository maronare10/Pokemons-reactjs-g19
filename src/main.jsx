import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import Pokemon from './Pokemon'

const primaryRoutes = createBrowserRouter([

  {
    path: '/', 
    element: <App />
  },
  {
    path: '/pokemon/:id',
    element: <Pokemon />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={primaryRoutes} />
  </React.StrictMode>,
)
