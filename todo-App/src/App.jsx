import { useEffect, useState } from 'react'
import { TodoProvider } from './Contexts'
import './App.css'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/Todoitem'

function App() {

  //all functionalities added----
  const [todos, setTodos] = useState([])

  const addtoDo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo }, ...prev])
  }

  const updateToDo = (id, todo) => {
    setTodos((prev) => prev.map((eachVal) => (eachVal.id === id ? todo : eachVal)))

  }

  const deleteToDo = (id) => {
    setTodos((prev) => prev.filter((eachTodo) => eachTodo.id !== id))

  }

  const ToggleComplete = (id) => {
    setTodos((prev) => prev.map((eachTodo) => 
    eachTodo.id === id ? { ...eachTodo, completed: !eachTodo.completed } : eachTodo))
  }

//Now Need to handle localStorage ----

useEffect(()=>{
  const todos= JSON.parse(localStorage.getItem("todos"))
  if(todos && todos.length > 0){
    setTodos(todos)

  }
}, [])

useEffect(()=>{
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])


  return (
    
    <TodoProvider value={{ todos, addtoDo, updateToDo, deleteToDo, ToggleComplete }}>
      <h1 className='text-center text-3xl text-purple-300'>TODO App with ☕</h1>

      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((eachTodo) => (
              <div key={eachTodo.id} className='w-full'>
                <TodoItem todo={eachTodo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
