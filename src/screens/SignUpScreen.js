import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './styles';
import {kApiUserLogin, kApiUserSignup} from '../config/WebService';
import {useDispatch} from 'react-redux';
import ApiHelper from '../helpers/ApiHelper';
import {userActions} from '../features/user/userSlice';

const {request, success, failure} = userActions;

export default function SignUpScreen() {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const {email, password} = credentials;
  const handleOnChnage = (text, input) => {
    setCredentials(prevState => ({
      ...prevState,
      [input]: text,
    }));
  };

  return (
    <SafeAreaView
      style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={styles.text}>Signup Screen</Text>

      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={ct => handleOnChnage(ct, 'email')}></TextInput>
        </View>
        <View>
          <Text style={styles.text}>Password</Text>
          <TextInput
            secureTextEntry
            style={styles.input}
            onChangeText={ct => handleOnChnage(ct, 'password')}></TextInput>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            //  login(email, password);
            //   EventRegister.emit('loginEvent');
            //   navigation.navigate('Redux');
            //  Alert.alert(`User ${userName} is log in with password ${password}`);
            // PersistanceHelper.setObject('loginDetails', {username, password});
            dispatch(request({email, password}));
            console.log('navigating to login==' + email + password);
            try {
              const response = await ApiHelper.post(kApiUserSignup, {
                email,
                password,
              });
              dispatch(success(response));
              Alert.alert('Successfully signup');
              console.log('Api helper to success==' + response.success);
            } catch (error) {
              console.log('Api helper to error==' + error);
              Alert.alert('Error while signup');

              dispatch(failure(error));
            }
          }}>
          <Text style={styles.text}>Signup</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
