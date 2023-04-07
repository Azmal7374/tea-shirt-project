import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './assets/component/Layout/Main';
import Home from './assets/component/Home/Home';
import OrderReview from './assets/component/OrderReview/OrderReview';

const router = createBrowserRouter([
  { path: '/',
  element:<Main></Main>,
  children:[
   { path:'/',
   element:<Home></Home>
  },
  { 
    path:'/review',
    element:<OrderReview></OrderReview>,
    loader:() => fetch('teashirts.json')
}
  ]
}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
