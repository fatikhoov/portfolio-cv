// src/routes/index.js
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../components/errors/error-page'
import App from '../pages/home/Home'
import AppPrice from '../pages/price/Price'

const MyRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/price',
    element: <AppPrice />,
    errorElement: <ErrorPage />,
  },
])

export default MyRouter
