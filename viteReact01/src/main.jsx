import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Poem from './lines.jsx'
import Joke from './lines.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Poem/>
    {/* <Joke/>  */}
  </React.StrictMode>,
)
