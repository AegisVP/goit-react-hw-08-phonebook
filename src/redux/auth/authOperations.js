import { createAsyncThunk } from '@reduxjs/toolkit';
const axios = require('axios');

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const authHeader = {
  set: token => (axios.defaults.headers.common.Authorization = `Bearer ${token}`),
  clear: () => (axios.defaults.headers.common.Authorization = ''),
};

export const registerUser = createAsyncThunk('auth/register', async (authdata, thunkAPI) => {
  try {
    const res = await axios.post('users/signup', authdata);
    authHeader.set(res.data.token);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const loginUser = createAsyncThunk('auth/login', async (authdata, thunkAPI) => {
  try {
    const res = await axios.post('users/login', authdata);
    authHeader.set(res.data.token);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logoutUser = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('users/logout');
    authHeader.clear();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.token;

    authHeader.set(token);

    const res = await axios.get('users/current');

    return res.data;
  } catch (error) {
    authHeader.clear();
    return thunkAPI.rejectWithValue(error.message);
  }
});
