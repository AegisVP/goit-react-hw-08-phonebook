import { createAsyncThunk } from '@reduxjs/toolkit';
import { debug } from 'utils/debug';
const axios = require('axios');

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setAuthHeader = token => {
  debug('setting token to Authorization header');
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  debug('clearing Authorization header');
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

export const refreshUser = createAsyncThunk('auth/refresh', async (token, thunkAPI) => {
  try {
    debug('running refresh operation');
    setAuthHeader(token);
    const res = await axios.get('users/current');
    debug('res:', res);
    return res.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});
