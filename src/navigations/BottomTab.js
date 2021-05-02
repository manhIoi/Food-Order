import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import HomeStack from '../routes/HomeStack';
import CartStack from '../routes/CartStack';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import rootColor from '../constants/color';
import AuthStack from '../routes/AuthStack';
import MessagesStack from '../routes/MessagesStack';

const Tab = createMaterialBottomTabNavigator();

function BottomTab() {
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
          tabBarIcon: ({color}) => (
            <MaterialIcon name="shopping-bag" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesStack} 
        options={{
          tabBarBadge: 2,
          tabBarIcon: ({color}) => (
            <MaterialIcon name="email" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;
