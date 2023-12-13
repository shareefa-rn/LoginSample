import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Button,
  ActivityIndicator,
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

  return (
    <SafeAreaView
      style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={styles.text}>Login Screen</Text>

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
                url: kApiUserLogin,
                data: {email, password},
                requestType: 'POST',
              }),
            );

            setEmail('');
            setPassword('');
          }}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <Button
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
