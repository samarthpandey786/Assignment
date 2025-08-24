import React from 'react'
import {Home, Login , Signup, AccountSetting} from './pages/index'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
   <div >
    <Outlet/>
   </div>
  )
}

export default App
