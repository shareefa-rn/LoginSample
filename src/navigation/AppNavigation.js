import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import StackNavScreen from '../StackNavScreen';
import store from '../screens/Store';
import {Provider} from 'react-redux';
import {ReduxTestScreen} from '../screens/ReduxTestScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Home"
            options={{headerShown: true}}
            component={HomeScreen}
          />

          <Stack.Screen
            name="Login"
            options={{headerShown: false}}
            component={LoginScreen}
          />
          <Stack.Screen
            name="Stack"
            options={{headerShown: false}}
            component={StackNavScreen}
          />
          <Stack.Screen
            name="Redux"
            options={{headerShown: true}}
            component={ReduxTestScreen}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
