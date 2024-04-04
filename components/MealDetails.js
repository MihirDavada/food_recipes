import { Text, View, StyleSheet } from 'react-native';

const MealDetails = (props) => {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailItem, props.style]}> {props.item.duration}m </Text>
      <Text style={[styles.detailItem,props.style]}> {props.item.complexity} </Text>
      <Text style={[styles.detailItem,props.style]}> {props.item.affordability} </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 8,
    fontSize: 12,
  },
});
