import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    status: false,
    userData: null
}

const AuthSlice= createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) =>{
            state.status= true,
            state.userData= action.payload.userData
        },

        logout: (state) => {
            state.status= false,
            state.userData= null
        }

    }

})

export const {login, logout}=  AuthSlice.actions


export default AuthSlice.reducer


/* 
    AuthSlice is used to write login and logout reducer. Basically It will update
    the store as weahter a user is loggedIn or not. 

    to create AuthSlice steps:---
    1. USe createSlice method from react-redux and create an AuthSlice Object.
    2. In AuthSlice, first we give name then initialState then we define reducers.
    3. In reducers define two function login(params) and logout(params);  params-----> state, action

    4. export AuthSlice.reducer and each function from AuthSLice.actions(its give access to all reducers)
    
*/