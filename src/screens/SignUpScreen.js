import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from '../styles';
import {userActions} from '../features/user/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import {kApiUserSignup} from '../config/WebService';

const {request, success, failure} = userActions;

const SignUpScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    console.log('login==', user);
    // Check for API response in the 'user' state
    if (user.success === true) {
      Alert.alert('Login Success.');
      props.navigation.navigate('Login');
    } else {
      Alert.alert('Login Failed', user.errorMessage);
    }
  }, [user]);

  return (
    <SafeAreaView
      style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={styles.text}>Welcome to Signup Screen</Text>

      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.input}
            testID="email_input"
            onChangeText={ct => setEmail(ct)}></TextInput>
        </View>
        <View>
          <Text style={styles.text}>Password</Text>
          <TextInput
            secureTextEntry
            style={styles.input}
            testID="password_input"
            onChangeText={ct => setPassword(ct)}></TextInput>
        </View>

        <TouchableOpacity
          testID="signup_button"
          style={styles.button}
          onPress={() => {
            dispatch(
              request({
                url: kApiUserSignup,
                data: {email, password},
                requestType: 'POST',
              }),
            );
            //   setEmail('');
            // setPassword('');
          }}>
          <Text style={styles.text}>Signup</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
