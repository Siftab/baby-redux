import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice"
import logger from "./middleWare/logger";



export const reduxStore = configureStore({
reducer:{
    counter:counterReducer

},
middleware:(getDefaultMiddleWare)=> getDefaultMiddleWare().concat(logger),
devTools:true
})



export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch