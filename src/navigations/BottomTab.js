import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import HomeStack from '../routes/HomeStack';
import CartStack from '../routes/CartStack';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import rootColor from '../constants/color';

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
          tabBarIcon: () => (
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
          tabBarColor: '#F2BB16',

          tabBarIcon: () => (
            <MaterialIcon
              name="shopping-bag"
              color={rootColor.whiteColor}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;
