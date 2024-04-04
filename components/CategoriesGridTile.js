import { Text, View, StyleSheet, Pressable, Platform } from 'react-native';

const CategoriesGridTile = (props) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        onPress = {props.onPressCategory}
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.pressableButton,
          pressed ? styles.pressedButton : null,
        ]}>
        <View style={[styles.innerContainer, {backgroundColor : props.color}]}>
          <Text style={styles.titleText}> {props.title} </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoriesGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    elevation: 4,
    borderRadius : 8,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressableButton: {
    flex: 1,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  pressedButton: {
    opacity: 0.5,
  },
});
