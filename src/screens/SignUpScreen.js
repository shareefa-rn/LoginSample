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
import {useDispatch} from 'react-redux';
import {kApiUserSignup} from '../config/WebService';

const {request, success, failure} = userActions;

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

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

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(
              request({
                url: kApiUserSignup,
                data: {email, password},
                requestType: 'POST',
              }),
            );
            setEmail('');
            setPassword('');
          }}>
          <Text style={styles.text}>Signup</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
