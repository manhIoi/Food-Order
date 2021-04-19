import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';

import {createStackNavigator} from '@react-navigation/stack';
import ListFoodsScreen from '../screens/ListFoods/ListFoodsScreen';
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ListFoods" component={ListFoodsScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;
