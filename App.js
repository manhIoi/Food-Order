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

const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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
