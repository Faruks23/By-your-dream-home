import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Buy from './Component/Pages/Buy/Buy.jsx'
import Sell from './Component/Pages/Sell/Sell.jsx'
import Rent from './Component/Pages/Rent/Rent.jsx'
import Mortgage from './Component/Pages/Mortgage/Mortgage.jsx'
import FindRealTor from './Component/Pages/FindRealTor/FindRealTor.jsx'
import MyHome from './Component/Pages/MyHome/MyHome.jsx'
import NewsInsight from './Component/Pages/NewaInsight/NewsInsight.jsx'
import Login from './Component/LoginSignUp/Login/Login.jsx'
import SignUp from './Component/LoginSignUp/SignUp/SignUp.jsx'
import MenageRental from './Component/Pages/MenageRentel/MenageRental.jsx'
import Advertise from './Component/Pages/Advertise/Advertise.jsx'


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element:<Buy></Buy>
        
      },
      {
        path: '/sell',
        element:<Sell></Sell>
        
      },
      {
        path: '/Rent',
        element:<Rent></Rent>
        
      },
      {
        path: '/Mortgage',
        element:<Mortgage></Mortgage>
        
      },
      {
        path: '/findRealTors',
        element:<FindRealTor></FindRealTor>
        
      },
      {
        path: '/myHome',
        element:<MyHome></MyHome>
        
      },
      {
        path: '/newsInsight',
        element:<NewsInsight></NewsInsight>
        
      },
      {
        path: '/menageRental',
        element:<MenageRental></MenageRental>
        
      },
      {
        path: '/advertisement',
        element:<Advertise></Advertise>
        
      },
      {
        path: '/login',
        element:<Login></Login>
        
      },
      {
        path: '/signUp',
        element:<SignUp></SignUp>
        
      },
    ]
    
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
);
