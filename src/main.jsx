import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import EachProduct from './components/EachProduct/EachProduct';
import Dashboard from './components/Dashboard/Dashboard';
import DashboardLayout from './components/DashboardLayout/DashboardLayout';
import Profile from './components/Profile/Profile';
import EditProfile from './components/EditProfile/EditProfile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
        /* data fetching method-1: we can load the product data from here and receive the data in (product page or component we created to show all the products) using "useLoaderData" hook */
        loader: () => fetch('https://dummyjson.com/products')
      },

      /* In React Router, params are dynamic parts of a URL that can change and are set to a specific value when a particular route is matched. params are parsed from dynamic segments and passed to a loader, which is useful for figuring out which resource to load(id). we can destruction params using {params}, to get access values like id, title etc*/
      {
        path: "/products/:id",
        element: <EachProduct></EachProduct>,
        loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`)
      },

      {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard></Dashboard>
          },
          {
            path: "/dashboard/profile",
            element: <Profile></Profile>,
          },
          {
            path: "/dashboard/editProfile",
            element: <EditProfile></EditProfile>,
          },
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
