import { createContext } from 'react'

const FavouriteContext = createContext({
  ids : [],
  addFavourite : (id) =>{},
  removeFavourite : (id) => {}
})

export default FavouriteContext;