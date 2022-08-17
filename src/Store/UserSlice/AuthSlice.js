import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  authenticationData: {},
};

export const userSlice = createSlice({
  name: 'auth',
  rule:false,
  initialState,
  reducers: {
    //add data to the store and local storage
    addAuthentication: (state, action) => {
      state.authenticationData = { ...action.payload };
      localStorage.setItem(
        'refreshToken',
        state.authenticationData.refreshToken
      );
      localStorage.setItem('hasExpiry', state.authenticationData.hasExpiry);
      localStorage.setItem('accessToken', state.authenticationData.accessToken);
    },
    //remove data from storage (used in logout)
    removeAuthentication: state => {
      state.auth = {};
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('hasExpiry');
      localStorage.removeItem('accessToken');
    },
  },
});

// Action creators are generated for each case reducer function
export const { addAuthentication, removeAuthentication } = userSlice.actions;

export default userSlice.reducer;
