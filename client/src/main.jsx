import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Admin from './components/Admin.jsx'
import Home from './components/Home.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Products from './components/Products.jsx'
import Hotsales from './components/Hotsales.jsx'
import Cart from './components/Cart.jsx'
import Detail from './components/Detail.jsx'
import NotFound from './components/NotFound.jsx'
import { Provider } from "react-redux";
// import store from "./store/store.js";
import { store } from './store/store.js'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'products/:productId', // Adding a dynamic segment to the path
        element: <Detail />, // Rendering the Detail component for a specific product
      },
      {
        path: 'hotsales',
        element: <Hotsales />
      },
      {
        path: 'cart',
        element: <Cart />
      },
    ]
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [
    ]
  },
  {
    path:'*',
    element: <NotFound/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
