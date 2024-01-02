
import { useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import authService from './Appwrite/auth'

import './App.css'
import { login, logout } from './Store/AuthSlice'

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {

  const [loading, setLoading] = useState(true)
  const disPatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {

        if (userData) {
          disPatch(login({ userData }))
        } else {
          disPatch(logout())
        }

      })
      .finally(() => setLoading(false))

  }, [])

  return !loading ? (<div className=' min-h-screen flex flex-wrap justify-center items-center
  border-green-400 border-2 border-solid  content-between bg-gray-700'>

    <div className='w-full block border-2 border-red-400'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  </div>)
    : (
      //loader Component
      <div
        className=' w-full min-h-screen text-3xl text-center text-green-500 shadow-lime-400
    flex justify-center items-center
    '> 
    
    <span className="loading loading-infinity w-32"></span>
    
    </div>
    )
}


export default App
