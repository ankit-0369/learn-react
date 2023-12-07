import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/profile'

function App() {
 

  return (
    <UserContextProvider>
      <h1> Context APi in react ☕</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
