import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../Appwrite/auth'
import AuthSlice, { logout } from '../../Store/AuthSlice'

function LogoutBtn() {
    const disPatch= useDispatch()
    const handleLogout= () =>{
        authService.logout()
        .then(() => {
           disPatch(logout())
        })
    }

  return (
    <button
    className='btn btn-primary'
    onClick={handleLogout}
    >Logout</button>
  )
}

export default LogoutBtn
