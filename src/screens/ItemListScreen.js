import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import PostItemScreen from './PostItemScreen';
import {useDispatch, useSelector} from 'react-redux';
import {kApiGetItems} from '../config/WebService';
import itemSlice, {itemActions} from '../features/item/itemSlice';

const {request, success, failure} = itemActions;

export default function ItemListScreen() {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const item = useSelector(state => state.item);

  useEffect(() => {
    dispatch(request({url: kApiGetItems}));
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <View style={{justifyContent: 'center', flex: 1}}>
        <Text> ItemListScreen</Text>
        <FlatList
          data={item.items}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  marginVertical: 5,
                  marginHorizontal: 10,
                  backgroundColor: 'pink',
                }}>
                <Text>{item.id}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>{item.title}</Text>
                  <Text>{item.title}</Text>
                </View>
                <Text>{item.title}</Text>
              </View>
            );
          }}
        />
        {item.isFetching && <ActivityIndicator />}
      </View>
      <View
        style={{
          height: 240,
        }}>
        <PostItemScreen />
      </View>
    </SafeAreaView>
  );
}
