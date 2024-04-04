import { View, StyleSheet, FlatList } from 'react-native';
import MealItem from './MealItem'

const MealList = (props) => {
  const renderMealItemHandler = (itemData) => {
    return <MealItem item={itemData.item} />;
  };

  return (
    <View style={styles.viewContainer}>
      <FlatList
        data={props.displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItemHandler}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
    viewContainer: {
    flex: 1,
    padding: 16,
  },
});
