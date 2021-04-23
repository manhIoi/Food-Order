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
      barStyle={{backgroundColor: rootColor.primaryColor}}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcon name="home" color={rootColor.whiteColor} size={26} />
          ),
          tabBarColor: '#36BFB1',
        }}
        name="Home"
        component={HomeStack}
      />
      <Tab.Screen
        name="Cart"
        component={CartStack}
        options={{
          tabBarColor: '#8fd9a8',
          tabBarIcon: ({color}) => (
            <MaterialIcon
              name="shopping-bag"
              color={rootColor.whiteColor}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesStack}
        options={{
          tabBarColor: '#4b778d',
          tabBarIcon: ({color}) => (
            <MaterialIcon name="email" color={rootColor.whiteColor} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;
