import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MessagesScreen from '../screens/Messages/MessagesScreen';
import DetailMessageScreen from '../screens/Messages/DetailMessageScreen';

const Stack = createStackNavigator();

function MessagesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={MessagesScreen} name="Messages Order" />
      <Stack.Screen component={DetailMessageScreen} name="Detail Message" />
    </Stack.Navigator>
  );
}

export default MessagesStack;
