import React from 'react'
import { useParams } from 'react-router-dom'
import Contact from '../Contact/Contact'

function User() {
  const {userId}= useParams()

  return (
    <div>
     <h1 className="text-2xl text-purple-300 bg-gray-900 py-4 text-center"> User Profile: 
      {userId==='shyam'? userId : " User Not Found"}
     
      </h1>


     

    </div>
  )
}

export default User


//the parameter after user in main.jsx router will directly be accesible here as by using useParam() hook