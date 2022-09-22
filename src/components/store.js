import { configureStore } from '@reduxjs/toolkit'
import animalsReducer from './animals'

export const store = configureStore({
  reducer: {
    animals: animalsReducer
  },
})