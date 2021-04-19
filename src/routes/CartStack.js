import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import CartScreen from '../screens/Cart/CartScreen';
import DetailsCartScreen from '../screens/Cart/DetailsCartScreen';
const Stack = createStackNavigator();

function CartStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="DetailsCart" component={DetailsCartScreen} />
    </Stack.Navigator>
  );
}

export default CartStack;
