import { StyleSheet} from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import MealList from '../components/MealList'

const MealsOverviewScreen = ({ navigation, route }) => {
  const catId = route.params.id;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const selectedCategoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: selectedCategoryTitle,
    });
  }, [catId, navigation]);

  return (
    <MealList displayMeals = {displayMeals} />
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
});
