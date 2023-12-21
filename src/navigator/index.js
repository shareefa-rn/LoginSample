import {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import ItemListScreen from '../screens/ItemListScreen';
import PostItemScreen from '../screens/PostItemScreen';
import SignUpScreen from '../screens/SignUpScreen';
import {Button, TouchableOpacity, View} from 'react-native';
import PersistanceHelper from '../helpers/PersistanceHelper';
import {useDispatch, useSelector} from 'react-redux';
import styles from '../styles';
import Icons from 'react-native-vector-icons/FontAwesome';
import MaterialIconsSimple from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIconsCom from 'react-native-vector-icons/MaterialCommunityIcons';
import {userActions} from '../features/user/userSlice';
const Stack = createNativeStackNavigator();

const {request, success, failure, logout} = userActions;

const Navigator = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // EventRegister.addEventListener('loginEvent', data => {
    //   setIsUserLoggedIn(data);
    // });
    // PersistanceHelper.getObject('loginDetails')
    //   .then(data => {
    //     if (data.username && data.password) {
    //       setIsUserLoggedIn(true);
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    PersistanceHelper.getValue('AT').then(data => {
      PersistanceHelper.accessToken = data;
      console.log('accessToken==pp==', PersistanceHelper.accessToken);
    });
  }, []);

  useEffect(() => {
    setIsUserLoggedIn(
      user?.data?.created && user?.data?.ttl && user?.data?.userId
        ? true
        : false,
    );
  }, [user]);

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(
    user?.data?.created && user?.data?.ttl && user?.data?.userId ? true : false,
  );
  const navigation = useNavigation();

  const getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={LoginScreen}
        />
        <Stack.Screen
          name="signup"
          options={{headerShown: true}}
          component={SignUpScreen}
        />
      </Stack.Group>
    );
  };

  const getMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="itemlist"
          component={ItemListScreen}
          options={{
            headerShown: true,
            title: 'Item List Screen',
            headerRight: () => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Button
                  title="logout"
                  onPress={() => {
                    dispatch(logout());
                    // Clear the login state after processing
                    //  dispatch(logout(false));
                    // dispatch(failure(false));
                  }}
                />
              </View>
            ),
          }}
        />

        <Stack.Screen
          name="postitemlist"
          options={{headerShown: true}}
          component={PostItemScreen}
        />
      </Stack.Group>
    );
  };

  return (
    <Stack.Navigator>
      {isUserLoggedIn ? getMainStack() : getAuthStack()}
    </Stack.Navigator>
  );
};

export default Navigator;
