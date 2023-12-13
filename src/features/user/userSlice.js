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
      state.errorMessage = {};
    },
    failure: (state, action) => {
      state.isFetching = false;
      state.failure = true;
      state.errorMessage = action.payload;
    },
    logout: (state, actions) => {
      state.data = {};
      PersistanceHelper.accessToken = undefined;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
