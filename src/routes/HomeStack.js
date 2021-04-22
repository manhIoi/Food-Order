import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';

import {createStackNavigator} from '@react-navigation/stack';
import RestaurantScreen from '../screens/Restaurant/RestaurantScreen';
import FoodScreen from '../screens/Food/FoodScreen';
import ListRestaurantScreen from '../screens/ListRestaurant/ListRestaurantScreen';
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ListRestaurant" component={ListRestaurantScreen} />
      <Stack.Screen
        name="Restaurant"
        component={RestaurantScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Food" component={FoodScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;
