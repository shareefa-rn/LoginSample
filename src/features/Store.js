import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './counter/counterSlice';
import cartSlice from './cart/cartSlice';
import userSlice from './user/userSlice';
import itemSlicer from './item/itemSlicer';

export default configureStore({
  reducer: {
    counter: counterSlice,
    cart: cartSlice,
    user: userSlice,
    items: itemSlicer,
  },
});
