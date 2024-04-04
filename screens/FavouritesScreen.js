import { Text, View, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import { useSelector } from 'react-redux';

const FavouritesScreen = () => {

  const favouriteMealsIds = useSelector(
    (state) => state.favouriteMealsReducer.ids
  );
  
  const displayMeals = MEALS.filter((meal) =>
    favouriteMealsIds.includes(meal.id)
  );

  if (displayMeals.length == 0) {
    return (
      <View style = {[styles.viewContainer , {justifyContent : "center" , alignItems:"center"}]}>
        <Text style = {styles.text}> You Have No Favourite Meals Yet.</Text>
      </View>
    );
  }

  return (
    <View style={styles.viewContainer}>
      <MealList displayMeals={displayMeals} />
    </View>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#3f2f25',
  },
  text : {
    fontSize : 18,
    fontWeight : "bold",
    color : "white"

  }
});
