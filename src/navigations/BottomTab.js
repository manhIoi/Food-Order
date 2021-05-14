import React, {useEffect, useState} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import HomeStack from '../routes/HomeStack';
import CartStack from '../routes/CartStack';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import rootColor from '../constants/color';
import MessagesStack from '../routes/MessagesStack';
import ProfileStack from '../routes/ProfileStack';
import {useSelector} from 'react-redux';

const Tab = createMaterialBottomTabNavigator();

function BottomTab() {
  const messOrder = useSelector(state => state.messOrder);
  const cart = useSelector(state => state.cart);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true}
      activeColor={rootColor.whiteColor}
      inactiveColor="#dddddd"
      barStyle={{
        backgroundColor: rootColor.primaryColor,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcon name="home" color={color} size={26} />
          ),
        }}
        name="Home"
        component={HomeStack}
      />
      <Tab.Screen
        name="Cart"
        component={CartStack}
        options={{
          tabBarBadge: cart.foods && cart.foods.length > 0 && cart.foods.length,
          tabBarIcon: ({color}) => (
            <MaterialIcon name="shopping-bag" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesStack}
        options={{
          tabBarBadge: messOrder && messOrder.length > 0 && messOrder.length,
          tabBarIcon: ({color}) => (
            <MaterialIcon name="email" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={ProfileStack}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcon name="person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;
