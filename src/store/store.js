import { configureStore, createReducer } from '@reduxjs/toolkit'
import  cartReducer from "../slice/slice";

export const store = configureStore({

  reducer: {
    cart:cartReducer,
  },
})

export default store;