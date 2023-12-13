import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles';
import {kApiPostItems} from '../config/WebService';
import {useDispatch, useSelector} from 'react-redux';
import {itemActions} from '../features/item/itemSlice';
import {PersistanceHelper} from '../helpers';

const {request, success, failure, addItem} = itemActions;

export default function PostItemScreen() {
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [details, setDetails] = useState();
  const user = useSelector(state => state.user);

  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <TextInput
            placeholder="title"
            style={styles.input}
            onChangeText={ct => setTitle(ct)}></TextInput>
        </View>
        <View>
          <TextInput
            placeholder="image"
            style={styles.input}
            onChangeText={ct => setImage(ct)}></TextInput>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="details"
            onChangeText={ct => setDetails(ct)}></TextInput>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(
              request({
                url: kApiPostItems,
                data: {title, image, details},
                header: {'X-Access-Token': PersistanceHelper.accessToken},
                requestType: 'POST',
              }),
            );

            setTitle('');
            setImage('');
            setDetails('');
          }}>
          <Text style={styles.text}>Post Data</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
