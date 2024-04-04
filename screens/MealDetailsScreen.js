import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/Subtitle';
import List from '../components/List';
import { useLayoutEffect, useContext } from 'react';
import IconButton from '../components/IconButton';
import { useSelector, useDispatch } from 'react-redux';
import {addFavourite , removeFavourite} from '../Store/Redux/Favourite';

const MealDetailsScreen = ({ navigation, route }) => {
  const id = route.params.id;

  const selectedMeals = MEALS.find((meal) => meal.id === id);

  const favouriteMealsIds = useSelector(
    (state) => state.favouriteMealsReducer.ids
  );
  
  const dispatch = useDispatch();
  // console.log(favouriteMealsContext)

  const mealIsFavourite = favouriteMealsIds.includes(id);

  const onPressIconHandler = () => {
    if (mealIsFavourite) {
      dispatch(removeFavourite({id:id}));
    } else {
      dispatch(addFavourite({id:id}));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavourite ? 'star' : 'star-outline'}
            color="white"
            onPressIcon={onPressIconHandler}
          />
        );
      },
    });
  }, [navigation, onPressIconHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeals.imageUrl }} />
      <Text style={styles.title}>{selectedMeals.title} </Text>
      <MealDetails item={selectedMeals} style={styles.detailText} />

      <View style={styles.listParentContainer}>
        <View style={styles.listContainer}>
          <Subtitle>ingredients</Subtitle>
          <List dataList={selectedMeals.ingredients} />
          <Subtitle>steps</Subtitle>
          <List dataList={selectedMeals.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listContainer: {
    width: '80%',
  },
  listParentContainer: {
    alignItems: 'center',
  },
});
