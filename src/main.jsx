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
import DetailsPage from './components/DetailsPage/DetailsPage';
import PrivateRoutes from './components/privateRoutes/PrivateRoutes';


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
        element: <PrivateRoutes><AddCoffee></AddCoffee></PrivateRoutes>
      },
      {
        path: '/order',
        element: <PrivateRoutes><OrderPage></OrderPage></PrivateRoutes>
      },
      {
        path: '/updatecoffee/:id',
        element: <PrivateRoutes><UpdateCoffee></UpdateCoffee></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path: '/detailpage/:id',
        element: <PrivateRoutes><DetailsPage></DetailsPage></PrivateRoutes>
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
