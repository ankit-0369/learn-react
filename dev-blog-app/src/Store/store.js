import {configureStore} from '@reduxjs/toolkit'
import AuthSlice from './AuthSlice'

const store= configureStore({
    reducer: AuthSlice
})

export default store