import { initialAuth, initialUser } from 'redux/constants';
import { loginUser, logoutUser, refreshUser, registerUser } from './authOperations';

const { createSlice } = require('@reduxjs/toolkit');

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuth,
  extraReducers: builder =>
    builder
      .addCase(registerUser.pending, state => state)

      .addCase(registerUser.fulfilled, (state, action) => {
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.token = action.payload.token;
      })

      .addCase(registerUser.rejected, state => state)

      .addCase(loginUser.pending, state => state)

      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      })

      .addCase(loginUser.rejected, state => state)

      .addCase(logoutUser.pending, state => state)

      .addCase(logoutUser.fulfilled, state => {
        state.user = initialUser;
        state.token = null;
      })

      .addCase(logoutUser.rejected, state => state)

      .addCase(refreshUser.pending, state => state)

      .addCase(refreshUser.fulfilled, (state, action) => {
        console.log('action.payload:', action.payload);
        console.log('action:', action);
        state.user = action.payload;
      })

      .addCase(refreshUser.rejected, store => {
        console.log('initialAuth:', initialAuth);
      }),
});

export const authReducer = authSlice.reducer;
