import FavouriteContext from './FavouriteContext'
import {useState} from 'react';
const FavouriteContextProvider = (props) =>{

  const [favMealsIds , setFavMealsIds] = useState([])

  console.log(favMealsIds)

  const addFavItem = (id) =>{
    setFavMealsIds((preState) => [...preState , id])
  }

  const removeFavItem = (id) =>{
    setFavMealsIds((preState) => preState.filter( (itemId) => itemId !== id))
  }

  const val = {
    ids : favMealsIds,
    addFavourite : addFavItem,
    removeFavourite : removeFavItem
  }

  return <FavouriteContext.Provider value = {val} >{props.children}</FavouriteContext.Provider>

}

export default FavouriteContextProvider
