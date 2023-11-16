import React from 'react';
import {Button} from 'react-native';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import StackNavScreen from '../StackNavScreen';
import {ReduxTestScreen} from '../screens/ReduxTestScreen';
import CartScreen from '../screens/CartScreen';
import ItemListScreen from '../screens/ItemListScreen';
import SignUpScreen from '../screens/SignUpScreen';
import {Provider} from 'react-redux';
import {store} from '../store';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Home"
            options={{headerShown: true}}
            component={HomeScreen}
          />
          <Stack.Screen
            name="itemlist"
            options={{headerShown: true}}
            component={ItemListScreen}
          />
          <Stack.Screen
            name="signup"
            options={{headerShown: true}}
            component={SignUpScreen}
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
            component={ReduxTestScreen}
            options={{
              title: 'Test Redux',
              headerRight: () => (
                <Button
                  title="Cart"
                  onPress={() => {
                    navigationRef.navigate('Cart');
                  }}
                />
              ),
            }}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{
              title: 'Cart Items',
              headerRight: () => (
                <Button
                  title="Clear Cart"
                  onPress={() => {
                    navigationRef.goBack();
                  }}
                />
              ),
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
export default AppNavigation;
