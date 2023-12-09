
import { useEffect, useState } from 'react'
import './App.css'
import Card from './Components/Card'
import ThemeBtn from './Components/ThemeBtn'
import { ThemeProvider } from './Contexts/ThemeContext'
import Login from './Components/Login'

function App() {

  const [themeMode, setThemeMode]= useState("light")
  const lightTheme= ()=>{
    setThemeMode("light")
  }
  const darkTheme= ()=>{
    setThemeMode("dark")
  }

  //theme Change Code-----

  useEffect(()=>{
    // let html= document.querySelector('html')
    // html.classList.remove("light", "dark")
    // html.classList.add(themeMode)

    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)

  }, [themeMode])

  return (
    <div className=' w-screen h-screen bg-yellow-200 dark:bg-slate-700'>
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <h1 className='text-3xl text-center text-purple-800 font-bold'>Theme Changer ☕🍵</h1>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* themeBTN */}
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-3xl mx-auto flex gap-3">
              {/* CARD UI */}
              <Card/>
              <Card/>
              <Login/>
          </div>
        </div>
      </div>
    </ThemeProvider>

    
  
    </div>
  )
}

export default App
