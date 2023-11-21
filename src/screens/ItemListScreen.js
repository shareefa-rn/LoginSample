import React, {useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ApiHelper from '../helpers/ApiHelper';
import {kApiGetItems} from '../config/WebService';
import {itemActions} from '../features/item/itemSlicer';
import PostItemScreen from './PostItemScreen';

const {request, success, failure} = itemActions;

export default function ItemListScreen() {
  const dispatch = useDispatch();
  const item = useSelector(state => state.item);

  useEffect(() => {
    dispatch(request({url: kApiGetItems}));

    // ApiHelper.get(kApiGetItems)
    // .then(response => {
    // dispatch(success(response));
    // console.log('list screen==' + item.items);
    // })
    // .catch(error => {
    // dispatch(failure(error));
    // });
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
                  <Text>{item.details}</Text>
                </View>
                <Text>{item.image}</Text>
              </View>
            );
          }}
        />
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
