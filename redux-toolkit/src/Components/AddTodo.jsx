import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'


function AddTodo() {
    const [input, setInput] = useState('')
    const [dueDate, setDueDate]= useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        
        e.preventDefault()
        if(input==='' || dueDate==='') return;
        dispatch(addTodo({input, dueDate}))
        setInput("")
        setDueDate('')

    }


    return (
        <div>
            <form onSubmit={handleSubmit} className='flex space-x-3 mt-12'>

                <input
                    type='text'
                    className=' bg-gray-800 rounded border border-gray-700 focus:border-indigo-500
                     focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8
                      transition-colors duration-200 ease-in-out'
                    value={input}
                    onChange={(e) => { setInput(e.target.value) }}
                    placeholder='Add a todo...'
                />

                <input
                type='date'
                value={dueDate}
                onChange={(e) => (setDueDate(e.target.value))}
                />

                <button type='submit' className=' rounded-md bg-green-300 text-xl px-2 py-2'> Add</button>

            </form>
        </div>
    )
}

export default AddTodo
