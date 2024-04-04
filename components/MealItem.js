import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealDetails from './MealDetails'

const MealItem = (props) => {
  const navigation = useNavigation();

  const onPressMealItemHandler = (mealItem) => {
    navigation.navigate('MealDetails', {
      id: props.item.id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.pressedButton : null)}
        onPress={onPressMealItemHandler}>
        <View style={styles.mealInnerItem}>
          <View>
            <Image style={styles.image} source={{ uri: props.item.imageUrl }} />
            <Text style={styles.title}>{props.item.title}</Text>
          </View>

          <MealDetails item = {props.item} style = {styles.detailText} />

        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  mealInnerItem: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
  pressedButton: {
    opacity: 0.5,
  },
  detailText : {
    color : 'black'
  }
});
