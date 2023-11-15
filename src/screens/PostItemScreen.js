import React, {Component, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {kApiPostItems} from '../config/WebService';
import {useDispatch, useSelector} from 'react-redux';
import {itemActions} from '../features/item/itemSlicer';
import ApiHelper from '../helpers/ApiHelper';

const {request, success, failure, addItem} = itemActions;

export default function PostItemScreen() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);

  const [postData, setPostData] = useState({
    title: '',
    image: '',
    details: '',
  });
  const {title, image, details} = postData;

  const handleOnChnage = (text, input) => {
    setPostData(prevState => ({
      ...prevState,
      [input]: text,
    }));
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <TextInput
            placeholder="title"
            style={styles.input}
            onChangeText={ct => handleOnChnage(ct, 'title')}></TextInput>
        </View>
        <View>
          <TextInput
            placeholder="image"
            style={styles.input}
            onChangeText={ct => handleOnChnage(ct, 'image')}></TextInput>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="details"
            onChangeText={ct => handleOnChnage(ct, 'details')}></TextInput>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            dispatch(request());

            try {
              const response = await ApiHelper.post(
                kApiPostItems,
                {title, image, details},
                {'X-Access-Token': user?.data?.accessToken},
              );
              dispatch(success(response));
              console.log('Api helper to success==' + response.success);
            } catch (error) {
              console.log('Api helper to error==' + error);

              dispatch(failure(error));
            }
          }}>
          <Text style={styles.text}>Post Data</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
