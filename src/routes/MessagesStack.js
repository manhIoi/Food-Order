import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import MessagesScreen from '../screens/Messages/MessagesScreen';

const Stack = createStackNavigator();

function MessagesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={MessagesScreen} name="Messages" />
    </Stack.Navigator>
  );
}

export default MessagesStack;
