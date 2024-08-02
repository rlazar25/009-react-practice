import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// pages
import HomePage from './pages/HomePage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import UsersPage from './pages/UsersPage.jsx'
import SingleProductPage from './pages/SingleProductPage.jsx'
import FavoritePage from './pages/FavoritePage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/products',
        element: <ProductPage />
      },
      {
        path: '/users',
        element: <UsersPage />
      },
      {
        path: '/favorite',
        element: <FavoritePage />
      },
      {
        path: '/product/:id',
        element: <SingleProductPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
