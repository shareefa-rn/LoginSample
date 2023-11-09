import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../features/counter/counterSlice';
import {View, Text, Button, SafeAreaView} from 'react-native';

export function ReduxTestScreen() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <View>
        <Button
          title={'Increment'}
          onPress={() => {
            dispatch(increment());
          }}
        />
        <Button
          title={'Decrement'}
          onPress={() => {
            dispatch(decrement());
          }}
        />
        <Text>{count}</Text>
      </View>
    </SafeAreaView>
  );
}
