import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import ROOT_COLOR from '../constants/color';
import MyInfoScreen from '../screens/Profile/MyInfoScreen';
import HelpScreen from '../screens/Profile/HelpScreen';

const Stack = createStackNavigator();

function ProfileStack() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerLeft: () => (
            <IconButton
              icon={() => (
                <MaterialIcon
                  name="arrow-back"
                  size={24}
                  color={ROOT_COLOR.whiteColor}
                />
              )}
              color={ROOT_COLOR.whiteColor}
              size={20}
              onPress={() => navigation.goBack()}
            />
          ),
          headerStyle: {
            backgroundColor: ROOT_COLOR.primaryColor,
            shadowColor: ROOT_COLOR.primaryColor,
          },
          headerTitleStyle: {
            display: 'none',
          },
        }}
      />
      <Stack.Screen name="My Info" component={MyInfoScreen} />
      <Stack.Screen name="Help" component={HelpScreen} />
    </Stack.Navigator>
  );
}

export default ProfileStack;
