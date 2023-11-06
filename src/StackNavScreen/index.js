import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Button,
  ScrollView,
} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EventRegister} from 'react-native-event-listeners';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import {PersistanceHelper} from '../helpers';

const Stack = createNativeStackNavigator();

function StackNavScreen() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    EventRegister.addEventListener('loginEvent', data => {
      PersistanceHelper.getObject('login')
        .then(data => {
          console.log(data);
          if (data.userName && data.password) {
            setIsUserLoggedIn(true);
          }
        })
        .catch(error => {
          console.log(error);
        });
    });
  });

  const getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
      </Stack.Group>
    );
  };
  const getMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: true}}
        />
      </Stack.Group>
    );
  };
  return (
    <Stack.Navigator
      screenOptions={styles.screenOptionStyle}
      initialRouteName="Test">
      {isUserLoggedIn ? getMainStack() : getAuthStack()}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  screenOptionStyle: {
    headerStyle: {
      backgroundColor: '#9AC4F8',
    },
    headerTintColor: 'white',
    headerBackTitle: 'Back',
    headerShown: true,
  },
  options: {
    title: 'My home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default StackNavScreen;
