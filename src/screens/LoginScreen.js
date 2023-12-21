import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Button,
  ActivityIndicator,
  Alert,
} from 'react-native';
import styles from '../styles';
import {useDispatch, useSelector} from 'react-redux';
import {kApiUserLogin} from '../config/WebService';
import {userActions} from '../features/user/userSlice';
import Colors from '../Colors';

const {request, success, failure} = userActions;

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    console.log('login==', user);
    // Check for API response in the 'user' state
    if (user.success === true) {
      Alert.alert('Login Success.');
      user.success = false;
      // Reset the success flag to avoid triggering the alert multiple times
      //   props.navigation.navigate('signup');
    } else if (user.failure === true && user.isFetching === false) {
      if (email.trim() !== '' && password.trim() !== '') {
        user.failure = false;
        Alert.alert('Login Failed', user.errorMessage);
      }
    }
  }, [user]);

  return (
    <SafeAreaView
      style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <View testID="welcome">
        <Text style={styles.text}>Welcome to Login Screen</Text>
      </View>
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
          testID="login_button"
          style={styles.button}
          onPress={() => {
            dispatch(
              request({
                url: kApiUserLogin,
                data: {email, password},
                requestType: 'POST',
              }),
            );

            //     setEmail('');
            //   setPassword('');
          }}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <Button
          testID="signup_button"
          title="Goto Signup"
          onPress={() => {
            props.navigation.navigate('signup');
          }}
        />
        {user.isFetching && (
          <ActivityIndicator size="large" color={Colors.green} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
