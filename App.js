import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import TabNavigator from './components/TabNavigator';
import { Provider } from 'react-redux';
import Store from './Store/Redux/Store';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.appContainer}>
      <StatusBar style="light" />
        <Provider store = {Store}  >
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: '#351401' },
                headerTintColor: 'white',
                contentStyle: { backgroundColor: '#3f2f25' },
              }}>
              <Stack.Screen
                name="MealsCategories"
                component={TabNavigator}
                options={{
                  headerShown: false,
                }}
              />

              <Stack.Screen
                name="MealsOverview"
                component={MealsOverviewScreen}
              />

              <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#24180f',
  },
});
