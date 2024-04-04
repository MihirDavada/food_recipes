import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoriesGridTile from '../components/CategoriesGridTile';
import { View, StyleSheet } from 'react-native';

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItemHandler = (itemObject) => {
    const onPressCategoryHandler = () => {
      navigation.navigate('MealsOverview', {
        id: itemObject.item.id,
      });
    };

    return (
      <CategoriesGridTile
        title={itemObject.item.title}
        color={itemObject.item.color}
        onPressCategory={onPressCategoryHandler}
      />
    );
  };

  return (
    <View style = {styles.viewContainer} >
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={renderCategoryItemHandler}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  viewContainer : {
    backgroundColor : '#3f2f25'
  }
})
