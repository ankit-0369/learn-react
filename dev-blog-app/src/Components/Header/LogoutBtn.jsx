import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../Appwrite/auth'
import AuthSlice, { logout } from '../../Store/AuthSlice'
import { useState } from 'react'


function LogoutBtn() {
  const [displayMsg, setDisplayMsg] = useState(false)
  const disPatch = useDispatch()
  const handleLogout = () => {
    authService.logout()
      .then(() => {
        disPatch(logout())
      }).finally(setDisplayMsg(true))
  }

  return (
    <div>

      <button
        className='btn btn-primary'
        onClick={handleLogout}
      >Logout</button>

      {displayMsg && <div className='btn btn-ghost p-3 relative z-10' >Logout Successfully</div>}
    </div>

  )
}

export default LogoutBtn
