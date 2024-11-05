import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root.jsx';
import ErrorPage from './component/ErrorPage/ErrorPage.jsx';
import Home from './component/Home/Home.jsx';
import ProductCard from './component/ProductCard/ProductCard.jsx';
import ProductDetails from './component/ProductDetails/ProductDetails.jsx';
import Dashboard from './component/Dashboard/Dashboard.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('../categories.json'),
        children:[
          {
            path:"/",
            element:<ProductCard></ProductCard>,
            loader:()=>fetch('../devicedata.json')
          },
          {
            path:"/category/:category",
            element:<ProductCard></ProductCard>,
            loader:()=>fetch('../devicedata.json')
          },
          
        ],
        
      },
      {
       path:'product/:id',
       element:<ProductDetails></ProductDetails>,
       loader:()=>fetch('../devicedata.json')
       
      }
    ]
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
