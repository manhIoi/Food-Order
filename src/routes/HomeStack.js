import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';

import {createStackNavigator} from '@react-navigation/stack';
import RestaurantScreen from '../screens/Restaurant/RestaurantScreen';
import FoodScreen from '../screens/Food/FoodScreen';
import ListRestaurantScreen from '../screens/ListRestaurant/ListRestaurantScreen';
import configOptionsHeader from '../constants/configOptionsHeader';

const Stack = createStackNavigator();

const options = {
  headerTitleAlign: configOptionsHeader.headerAlign,
};

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={options} name="Home" component={HomeScreen} />
      <Stack.Screen
        options={options}
        name="ListRestaurant"
        component={ListRestaurantScreen}
      />
      <Stack.Screen
        name="Restaurant"
        component={RestaurantScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen options={options} name="Food" component={FoodScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;
