import { createAsyncThunk } from '@reduxjs/toolkit';
const axios = require('axios');

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setAuthHeader = token => {
  console.log(`setting token ${token} to Authorization header`);
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  console.log('clearing Authorization header');
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk('auth/register', async (authdata, thunkAPI) => {
  try {
    const res = await axios.post('users/signup', authdata);
    setAuthHeader(res.data.token);
    return res.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});

export const loginUser = createAsyncThunk('auth/login', async (authdata, thunkAPI) => {
  try {
    const res = await axios.post('users/login', authdata);
    setAuthHeader(res.data.token);
    return res.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});

export const logoutUser = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('users/logout');
    clearAuthHeader();
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  try {
    console.log('running refresh operation');
    const token = thunkAPI.getState().auth.token;
    console.log('token:', token);
    setAuthHeader(token);
    console.log('auth header set on server');
    const res = await axios.get('users/current');
    console.log('res:', res);
    return res.data;
  } catch (error) {
    clearAuthHeader();
    thunkAPI.rejectWithValue(error.message);
  }
});
