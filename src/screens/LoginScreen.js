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
import {useAuthHelper} from '../contextApi/AuthHelper';
import {EventRegister} from 'react-native-event-listeners';
import ApiHelper from '../helpers/ApiHelper';
import {kApiUserLogin} from '../config/WebService';
import {useDispatch, useSelector} from 'react-redux';
import {userActions} from '../features/user/userSlice';
import styles from './styles';
import analytics from '@react-native-firebase/analytics';

const {request, success, failure} = userActions;

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {login} = useAuthHelper();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const user = useSelector(state => state.user);

  const loginUser = () => {
    //  setLoading(true);
    setTimeout(async () => {
      //  setLoading(false);
      console.log('inputs====>', credentials);

      try {
        setInputs({
          email: '',
          password: '',
        });
        //  setErrors({});
        console.log('navigating to home');
      } catch (error) {
        console.log('Error to home');

        Alert.alert('Error', 'Invalid Details');
      }
    }, 3000);
  };
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
          onPress={async () => {
            //  login(email, password);
            //   EventRegister.emit('loginEvent');
            //   navigation.navigate('Redux');
            //  Alert.alert(`User ${userName} is log in with password ${password}`);
            // PersistanceHelper.setObject('loginDetails', {username, password});
            dispatch(request({email, password}));
            console.log('navigating to login==' + email + password);

            try {
              const response = await ApiHelper.post(kApiUserLogin, {
                email,
                password,
              });
              dispatch(success(response));
              setEmail('');
              setPassword('');
              navigation.navigate('itemlist');

              console.log('Api helper to success==' + response.success);
            } catch (error) {
              console.log('Api helper to error==' + error);

              dispatch(failure(error));
            }
          }}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <Button
          title="Goto Signup"
          onPress={() => {
            navigation.navigate('signup');
          }}
        />
        <Button
          title="Add To Basket"
          onPress={async () =>
            await analytics().logEvent('basket', {
              id: 3745092,
              item: 'mens grey t-shirt',
              description: ['round neck', 'long sleeved'],
              size: 'L',
            })
          }
        />
        {user.isFetching && <ActivityIndicator />}
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
