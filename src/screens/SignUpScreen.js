import React, {useEffect, useState} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import ApiHelper from '../helpers/ApiHelper';
import {userActions} from '../features/user/userSlice';

const {request, success, failure} = userActions;

export default function SignUpScreen() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [errorMsg, setErrorMsg] = useState(undefined);
  const user = useSelector(state => state.user);

  useEffect(() => {
    if (user?.errorMessage?.message) {
      //  Alert.alert('Error', user?.errorMessage?.message);
      setErrorMsg(user?.errorMessage?.message);
    } else {
      setErrorMsg(undefined);
    }
  }, [user]);

  return (
    <SafeAreaView
      style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={styles.text}>Signup Screen</Text>

      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={ct => setEmail(ct)}></TextInput>
        </View>
        <View>
          <Text style={styles.text}>Password</Text>
          <TextInput
            secureTextEntry
            style={styles.input}
            onChangeText={ct => setPassword(ct)}></TextInput>
        </View>
        {errorMsg && errorMsg.length > 0 && (
          <Text style={{color: 'red', marginHorizontal: 20}}>{errorMsg}</Text>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            dispatch(request({email, password}));
            console.log('navigating to login==' + email + password);
            try {
              const response = await ApiHelper.post(kApiUserSignup, {
                email,
                password,
              });
              dispatch(success(response));
              setEmail('');
              setPassword('');
              Alert.alert('Successfully signup');
              console.log('Api helper to success==' + response.success);
            } catch (error) {
              console.log('Api helper to error==' + error.error);
              // Alert.alert('' + errorMsg);

              dispatch(failure(error));
            }
          }}>
          <Text style={styles.text}>Signup</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
