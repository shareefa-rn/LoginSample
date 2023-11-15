const {createSlice} = require('@reduxjs/toolkit');

const initialState = {items: []};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    request: state => {
      state.isFetching = true;
    },
    success: (state, action) => {
      state.isFetching = false;
      if (Array.isArray(action.payload)) {
        state.items = action.payload;
      } else {
        state.items = [...state.items, action.payload];
      }
      state.failure = false;
      state.errormessage = '';
    },
    failure: (state, action) => {
      state.isFetching = false;
      state.errormessage = action.payload;
      state.failure = true;
    },
    addItem: (state, action) => {
      const itemtoAdd = action.payload;
      state.items.push(itemtoAdd);
    },
  },
});

export const itemActions = itemSlice.actions;

export default itemSlice.reducer;
