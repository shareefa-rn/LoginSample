import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image,
} from 'react-native';
import styles from './styles';
import {EventRegister} from 'react-native-event-listeners';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <View style={{justifyContent: 'center', flex: 1}}>
        <TouchableOpacity style={styles.touchableText}>
          <Text>List of Data</Text>
        </TouchableOpacity>
        <FlatList
          data={data}
          style={{flex: 1}}
          renderItem={({item}) => {
            return (
              <View style={styles.view}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    marginHorizontal: 10,
                  }}
                  source={{
                    uri: 'https://media.timeout.com/images/106049585/image.jpg',
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('Details Screen', {
                      name: item.title,
                      version: item.id,
                    });
                    console.log('==Item==' + item.title);
                  }}
                  style={styles.textview}>
                  <Text>{item.title}</Text>
                </TouchableOpacity>
                <Text style={{flex: 1}}>{item.vVersion}</Text>
              </View>
            );
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 60,
        }}>
        <TouchableOpacity
          style={styles.textInuput}
          onPress={() => {
            navigation.dispatch(StackActions.popToTop());
            EventRegister.emit('loginevent');
            console.log('logout clicked');
          }}>
          <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textInuput}
          onPress={() => {
            navigation.navigate('Redux');
            console.log('Redux Test clicked');
          }}>
          <Text style={styles.text}>Redux Test</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
