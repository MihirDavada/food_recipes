import { Text, View, StyleSheet } from 'react-native';

const List = (props) => {
  return props.dataList.map((data) => {
    return (
      <View style = {styles.listItem} key = {data}>
        <Text style = {styles.listItemText} > {data} </Text>
      </View>
    );
  });
};

export default List;

const styles = StyleSheet.create({
  listItem : {
    borderRadius : 6,
    paddingHorizontal:8,
    paddingVertical:4,
    marginHorizontal:12,
    marginVertical:4,
    backgroundColor : "#e2b497"
  },
  listItemText : {
    color : "#351401",
    textAlign : "center"
  }

});
