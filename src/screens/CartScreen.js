import {} from 'react';
import {Text, View, FlatList, Button, Image, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {decreaseQty, increaseQty} from '../features/cart/cartSlice';

const CartScreen = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  console.log(cartItems);

  return (
    <View>
      <FlatList
        data={cartItems}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                marginHorizontal: 10,
                backgroundColor: 'pink',
                marginVertical: 5,
                padding: 5,
                flexDirection: 'row',
              }}>
              <Image source={item.item.image} style={styles.image}></Image>

              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  textAlign: 'left',
                  margin: 8,
                }}>
                <View>
                  <Text>{item.item.name}</Text>
                  <Text>{item.item.details}</Text>
                </View>
                <View>
                  <Text>{item.item.price}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <Button
                    title={'+'}
                    onPress={() => {
                      dispatch(increaseQty(item.id));
                    }}
                  />
                  <Text>{item.quantity}</Text>

                  <Button
                    title={'-'}
                    onPress={() => {
                      dispatch(decreaseQty(item.id));
                    }}
                  />
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CartScreen;
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
