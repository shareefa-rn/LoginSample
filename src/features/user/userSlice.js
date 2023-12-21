import PersistanceHelper from '../../helpers/PersistanceHelper';

const {createSlice} = require('@reduxjs/toolkit');

const initialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    request: (state, action) => {
      state.isFetching = true;
    },
    success: (state, action) => {
      if (action.payload.userId) {
        const {id, ...rest} = action.payload;
        PersistanceHelper.setValue('AT', id);
        state.data = rest;
        //  state.data = {...action.payload, accessToken: action.payload.id};
        //  delete state.data.id;
      } else {
        state.data = action.payload;
      }

      state.isFetching = false;
      state.failure = false;
      state.success = true;
      state.successMessage = action.payload;
      state.errorMessage = {};
    },
    failure: (state, action) => {
      state.isFetching = false;
      state.failure = true;
      state.success = false;
      state.errorMessage = action.payload;
    },
    logout: (state, action) => {
      PersistanceHelper.setValue('AT', '');

      state.isFetching = false;
      state.failure = true;
      //     PersistanceHelper.setValue('AT', null); // Set the access token to undefined
      // Optionally, clear the entire key related to the access token
      //    PersistanceHelper.clearKey('AT');
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
