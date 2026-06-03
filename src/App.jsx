import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import Portfolio from './pages/Portfolio'
import RefreshHandler from './config/RefreshHandler'

const App = () => {

  const [isAuth, setisAuth] = useState(false)

  const privateRoutes = (element) =>{
    return isAuth ? element : <Navigate to='/login' />
  }

  return (
    <main>
      <RefreshHandler setisAuth={setisAuth} />
      <Toaster position='top' />
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={privateRoutes(<Home/>)} />
        <Route path='/:username' element={<Portfolio />} />
      </Routes>
    </main>
  )
}

export default App
