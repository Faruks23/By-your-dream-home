import { useState } from 'react'
import reactLogo from './assets/react.svg'

import Header from './Component/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer/Footer'

function App() {
 

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
