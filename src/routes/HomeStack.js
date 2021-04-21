import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';

import {createStackNavigator} from '@react-navigation/stack';
import ListFoodsScreen from '../screens/ListFoods/ListFoodsScreen';
import ListRestaurantsScreen from '../screens/ListRestaurants/ListRestaurantsScreen';
import RestaurantScreen from '../screens/Restaurant/RestaurantScreen';
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ListFoods" component={ListFoodsScreen} />
      <Stack.Screen name="ListRestaurants" component={ListRestaurantsScreen} />
      <Stack.Screen
        name="Restaurant"
        component={RestaurantScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
