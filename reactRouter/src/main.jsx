import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter,Route, BrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './Root'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import User from './Components/User/User'
import Contact from './Components/Contact/Contact'
import Github, { githubInfoLoader } from './Components/Github/Github'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path:"user",
//         element: <User/>
//       },
//       {
//         path:"contact",
//         element: <Contact/>
//       }
      
//     ]
//   }
// ])

//2nd method to create routes----
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Root/>}>
      
      <Route path='/' element= {<Home/>} />
      <Route path='about' element= {<About/>}  />
      <Route path='contact' element= {<Contact/>} />
      <Route path= 'user' element= {<User/>} />
      <Route path= 'user/:userId' element={<User/>} />
      <Route
       path='github' 
       loader={githubInfoLoader}
       element= {<Github/>} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
