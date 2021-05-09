import React from 'react';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import CartScreen from '../screens/Cart/CartScreen';
import DetailsCartScreen from '../screens/Cart/DetailsCartScreen';
import configOptionsHeader from '../constants/configOptionsHeader';
import {useNavigation} from '@react-navigation/native';
const Stack = createStackNavigator();

function CartStack() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerLeft: () =>
            configOptionsHeader.headerLeft(() => navigation.goBack()),
          headerTitleAlign: configOptionsHeader.headerAlign,
        }}
      />
      <Stack.Screen name="DetailsCart" component={DetailsCartScreen} />
    </Stack.Navigator>
  );
}

export default CartStack;
