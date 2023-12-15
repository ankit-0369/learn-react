import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload.input,
                dueDate: action.payload.dueDate,

            }
            state.todos.push(todo)

        },
        removeTodo: (state, action) => {
            state.todos=  state.todos.filter((todo) => (todo.id!== action.payload))
         },

         updateTodo: (state, action) => {
            state.todos.map((eachTodo) => (eachTodo.id===action.payload ? [...eachTodo, text= action.payload ] : eachTodo ) )
         },

       
    }

})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer

//we need to export reducer and methods of each reducer indivisually



