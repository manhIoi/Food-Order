/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';

// navigation
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './src/navigations/BottomTab';
import SplashScreen from './src/screens/Splash/SplashScreen';
import AuthStack from './src/routes/AuthStack';
import {createStackNavigator} from '@react-navigation/stack';
import {LogBox} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {login} from './src/redux/actions/userAction';
import {fecthCart} from './src/redux/actions/cartAction';
import {fecthMessOrder} from './src/redux/actions/messOrderAction';

const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  LogBox.ignoreAllLogs();
  useEffect(async () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    const userJSON = await AsyncStorage.getItem('user');
    console.log(userJSON);
    if (userJSON !== null) {
      console.log('is working');
      const userObj = JSON.parse(userJSON);
      console.log(userObj);
      await dispatch(login({email: userObj.email, password: userObj.password}));
      await dispatch(fecthCart(userObj._id));
      await dispatch(fecthMessOrder(userObj._id));
    } else {
      console.log('dont working');
    }
  }, []);
  return (
    <NavigationContainer>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="BottomTab"
            component={BottomTab}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Auth"
            component={AuthStack}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
