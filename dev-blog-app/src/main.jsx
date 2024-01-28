import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Protected, Login } from './Components/index.js'
import Signup from './pages/Signup.jsx'
import AllPost from './pages/AllPost.jsx'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
import Home from './pages/Home.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: (
          <Protected authentication={false}>
            <Login />
          </Protected>
        )
      },
      {
        path: '/signup',
        element: (
          <Protected authentication={false}>
            <Signup />
          </Protected>
        )
      },
      {
        path: '/all-post',
        element: (
          <Protected authentication>
            <AllPost />
          </Protected>
        )
      },
      {
        path: '/add-post',
        element: (
          <Protected authentication>
            <AddPost />
          </Protected>
        )
      },
      {
        path: '/edit-post/:slug',
        element: (
          <Protected authentication>
            {" "}
            <EditPost />
          </Protected>
        )
      },
      {
        path: '/post/:slug',
        element: (
          <Protected authentication>
            {" "}
            <Post />
          </Protected>
        )
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
