import { configureStore } from '@reduxjs/toolkit'
import favouriteReducer from './Favourite'

const Store = configureStore({
  reducer: {
    favouriteMealsReducer : favouriteReducer 
  },
})

export default Store;

