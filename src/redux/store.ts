import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice"



export const reduxStore = configureStore({
reducer:{
    counter:counterReducer

},
devTools:true
})



export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch