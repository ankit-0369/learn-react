import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 0,
            todo: "ToDo default msg",
            completed: false,
        }
    ],
    addtoDo: (todo)=>{},
    updateToDo: (id, todo)=>{},
    deleteToDo: (id)=>{},
    ToggleComplete: (id)=>{}, 

})

export const useTodo = () => {
    return useContext(TodoContext)
}



export const TodoProvider = TodoContext.Provider