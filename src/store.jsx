import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './slice'

export const store=configureStore({
    reducer:{
        count:counterSlice
    }
})