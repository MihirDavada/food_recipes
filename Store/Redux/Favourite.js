import { createSlice } from '@reduxjs/toolkit'

const favouriteSlice = createSlice({
  name : "favouriteSlice",
  initialState : {
    ids : []
  },
  reducers : {
    addFavourite : (state , action) => {
      console.log("Add Favourite")
      state.ids.push(action.payload.id)
    },
    removeFavourite : (state , action) =>{
      state.ids.splice(state.ids.indexOf(action.payload.id), 1)
    }
  }
})

export default favouriteSlice.reducer;
export const addFavourite = favouriteSlice.actions.addFavourite;
export const removeFavourite = favouriteSlice.actions.removeFavourite;