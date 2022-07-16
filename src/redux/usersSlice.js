import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import UserServices from '../services/user';

const loginUrl = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/login';
const initialState = {
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: '',
  userLogin: null,
  userRegister: false,
};

export const loginUser = createAsyncThunk('users/login', async (data) => {
  const { email, password } = data;
  return await UserServices.login(email, password);
});

export const registerUser = createAsyncThunk('users/register', async (data) => {
  const { name, email, password } = data;
  return await UserServices.register(name, email, password);
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    makeStatusIdle: (state) => {
      state.status = 'idle';
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        console.log('login pending');
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userLogin = action.payload;
        state.error = '';
        localStorage.setItem('token', action.payload.data.token);
        console.log('login fulfilled');
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.userLogin = null;
        console.log('login rejected');
      })
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(registerUser.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectUserLogin = (state) => state.users.userLogin;
export const selectUserStatus = (state) => state.users.status;
export const selectUserError = (state) => state.users.error;

export const { makeStatusIdle } = userSlice.actions;
export default userSlice.reducer;
