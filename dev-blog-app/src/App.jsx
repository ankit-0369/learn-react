
import reactLogo from './assets/tea-cup.png'

import './App.css'
import config from './conf/config'

function App() {
 

  console.log(config.AppwriteUrl);
  return (
    <>
    <div > <img src={reactLogo} alt="" height={60} width={60} /></div>
      <h1 className='text-center text-3xl'>DevBlog - Welcome to the world of DEV ☕ 
      </h1>

      
    </>
  )
}

export default App
