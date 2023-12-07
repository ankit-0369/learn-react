import React, { useContext, useState } from 'react'
import UserContext from '../Context/userContext'

function Login() {
    const [username, setUserName]= useState('')
    const [password, setPassword]= useState('')
    
    const {setUser} = useContext(UserContext)

    const HandleSubmit= (e)=>{
        e.preventDefault()
        setUser({username, password});

    }

  return (
    <div>
      <h2>LogIn Page</h2>

     <input
     type='text'
     placeholder='Username'
     value={username}
     onChange={(e)=> setUserName(e.target.value)}

     />
      {" "}

      <input type='password'
        placeholder='Password'
        value= {password}  
        onChange={(e)=> setPassword(e.target.value) }    
      />

      <button onClick={HandleSubmit}>Submit</button>
    </div>
  )
}

export default Login


//setUser set the value of username and password. to the userContext.
// in Profile comp we can then read the username and password