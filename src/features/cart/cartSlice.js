import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemToAdd = action.payload;

      const itemPresentIndex = state.cartItems.findIndex(
        thisElement => thisElement.item.id === itemToAdd.id,
      );

      if (itemPresentIndex !== -1) {
        const itemFoundObject = state.cartItems[itemPresentIndex];
        itemFoundObject.quantity += 1;
      } else {
        state.cartItems.push({item: itemToAdd, quantity: 1});
      }
    },
    removeFromCart: (state, action) => {
      let newCartItems = state.cartItems.filter(
        item => item.id !== action.item,
      );
      let count = state.itemsCount - 1;
      return {
        ...state,
        itemsCount: count,
        cartItems: newCartItems,
      };
    },
    increaseQty: (state, action) => ({
      ...state,
      cartItems: state.cartItems.map(item =>
        item.id === action.payload
          ? {...item, quantity: item.quantity + 1}
          : item,
      ),
    }),
    decreaseQty: (state, action) => ({
      ...state,
      cartItems: state.cartItems.map(item =>
        item.id === action.payload
          ? {...item, quantity: item.quantity - 1}
          : item,
      ),
    }),
    clearCart: state => ({
      ...state,
      itemsCount: 0,
      cartItems: [],
    }),
  },
});

export const {addToCart, removeFromCart, clearCart, increaseQty, decreaseQty} =
  cartSlice.actions;

export default cartSlice.reducer;
