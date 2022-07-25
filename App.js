import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Screen/Splash';
import { StatusBar, LogBox } from 'react-native';
import { colors } from './utils';
import Home from './Screen/Home';
import Cek from './Screen/Cek';
import Hasil from './Screen/Hasil';

const Stack = createStackNavigator();
export default function App() {

  LogBox.ignoreAllLogs();


  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Stack.Navigator initialRouteName={'Splash'}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Cek"
          component={Cek}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Hasil"
          component={Hasil}
          options={{
            headerTintColor: colors.white,
            headerStyle: {
              backgroundColor: colors.primary,
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
