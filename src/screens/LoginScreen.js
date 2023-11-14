import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {useAuthHelper} from '../contextApi/AuthHelper';
import {EventRegister} from 'react-native-event-listeners';

const LoginScreen = ({navigation}) => {
  const {login} = useAuthHelper();
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
      <View style={styles.container}>
        <Text style={styles.text}>LoginScreen</Text>

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
          onPress={() => {
            login(email, password);
            EventRegister.emit('loginEvent');
            navigation.navigate('Redux');
            //  Alert.alert(`User ${userName} is log in with password ${password}`);
          }}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    margin: 10,
    padding: 10,
    alignContent: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#015169',
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    paddingHorizontal: 10,
  },

  button: {
    padding: 10,
    borderColor: '#bee6fe',
    backgroundColor: '#eaf7fd',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default LoginScreen;
