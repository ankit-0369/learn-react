

import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {

  return (
    <>
      <h1 className='text-white text-3xl mx-2 mt-7 mb-1 text-center '>Redux ToolKit with ☕</h1>
      <div className='w-full flex justify-center'>
        <AddTodo />
      </div>

      <div className='w-full '>
        <Todos />
      </div>
    </>
  )
}

export default App
