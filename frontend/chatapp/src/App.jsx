import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

import Navbar from "./components/Navbar/Navbar"
import Login from "./pages/login/Login"
import Home from "./pages/home/Home"
import Signup from './pages/signup/Signup'
import { useAuthContext } from './context/AuthContext'
import "./App.css"

const App = () => {
  const {authUser} = useAuthContext();
  return (
    <>    
      <Navbar/>
      <Routes>
        <Route path='/' element={authUser ? <Home/> : <Navigate to={"/login"} />}/>
        <Route path='/login' element={authUser ? <Navigate to='/' /> :<Login/>}/>
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup/>}/>
      </Routes>
      <Toaster/>
    </>
  )
}

export default App