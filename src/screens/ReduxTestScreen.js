import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../features/counter/counterSlice';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {addToCart} from '../features/cart/cartSlice';

const itemList = [
  {
    image: require('../../assets/laptops/laptop_1.jpg'),
    name: 'Macbook',
    details: 'Macbook pro with M3',
    price: 2500,
  },
  {
    image: require('../../assets/laptops/laptop_2.jpg'),
    name: 'iPhone',
    details: 'iPhone 15 pro',
    price: 1500,
  },
  {
    image: require('../../assets/laptops/laptop_3.jpg'),
    name: 'iPad',
    details: 'Sleek and smart',
    price: 800,
  },
  {
    image: require('../../assets/laptops/laptop_4.jpg'),
    name: 'Tripod',
    details: 'something details',
    price: 50,
  },
  {
    image: require('../../assets/laptops/laptop_5.jpg'),
    name: 'Newtonian Telescope',
    details: '13 inch',
    price: 500,
  },
  {
    image: require('../../assets/laptops/laptop_1.jpg'),
    name: 'LED',
    details: '5w',
    price: 5,
  },
];

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
        <Button
          title={'Increment by value'}
          onPress={() => {
            dispatch(incrementByAmount(5));
          }}
        />
        <Text>{count}</Text>
      </View>
      <FlatList
        data={itemList}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                margin: 8,
                flexDirection: 'row',
              }}>
              <Image source={item.image} style={styles.image}></Image>

              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  textAlign: 'left',
                  margin: 8,
                }}>
                <Text>{item.name}</Text>
                <Text>{item.details}</Text>
                <Text>{item.price}</Text>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(addToCart(item));
                  }}>
                  <Text>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  image: {
    width: 120,
    height: 144,
    borderWidth: 2,
    borderColor: '#d35647',
    marginBottom: 8,
  },
});
