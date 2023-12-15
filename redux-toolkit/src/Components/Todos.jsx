import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, addTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()




    // useEffect(()=>{
    //     const todos= JSON.parse(localStorage.getItem("todos"))
    //     if(todos && todos.length > 0){
    //     //   setTodos(todos)
    //            todos.map((todo) => ( dispatch(addTodo(todo))))
      
    //     }
    //   }, [])
      


    //   useEffect(()=>{
    //     localStorage.setItem("todos", JSON.stringify(todos))
    //   }, [todos])

   
      

    return (
        <ul className=' list-none w-full flex justify-center'>
       <div className=' w-1/2'>

       {todos.map((eachTodo) => (
          <li
          key={eachTodo.id}
          className=' mt-4 max-w-lg flex flex-wrap justify-between items-center bg-zinc-800 px-4 py-2 rounded border-2 border-[#a2d779] solid'
      >
          <div className='  text-white'> {eachTodo.text}</div>
          <div className=' text-yellow-200'>{eachTodo.dueDate }</div>

         <div className='flex gap-2'>
         <button
          className='text-2xl'
          onClick={() => {
              dispatch(removeTodo(eachTodo.id));
              console.log(eachTodo.text)

          }}
         >📝</button>
          <button
              className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md '
              onClick={() => (dispatch(removeTodo(eachTodo.id)))}>

              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
              >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
              </svg>

          </button>
         </div>

      </li>
        ))}

       </div>
    </ul>
    )
}

export default Todos
