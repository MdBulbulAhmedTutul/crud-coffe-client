import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AddCoffee from './components/AddCoffee/AddCoffee';
import AuthProvider from './components/provider/AuthProvider';
import OrderPage from './components/OrderPage/OrderPage';
import UpdateCoffee from './components/UpdareCoffee/UpdateCoffee';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addproduct',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/order',
        element: <OrderPage></OrderPage>
      },
      {
        path: '/updatecoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
