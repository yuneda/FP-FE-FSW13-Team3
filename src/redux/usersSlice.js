import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import UserServices from '../services/user';
import { errorAlert } from '../utils/alert';

const loginUrl = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/login';
const initialState = {
  status: 'idle',
  statusRegister: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: '',
  userLogin: null,
  userRegister: false,
  auth: null,
};

export const loginUser = createAsyncThunk('users/login', async (data) => {
  const { email, password } = data;
  return await UserServices.login(email, password);
});

export const registerUser = createAsyncThunk('users/register', async (data) => {
  const { name, email, password } = data;
  return await UserServices.register(name, email, password);
});

export const authUser = createAsyncThunk('users/auth', async (token) => {
  return await UserServices.auth(token);
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    makeStatusIdle: (state) => {
      state.status = 'idle';
      state.statusRegister = 'idle';
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
      })
      .addCase(loginUser.rejected, (state, action) => {
        errorAlert('Email or password wrong');
        state.status = 'failed';
        state.error = action.error.message;
        state.userLogin = null;
        console.log(action.error);
      })
      .addCase(registerUser.pending, (state) => {
        state.statusRegister = 'loading';
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.statusRegister = 'succeeded';
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.statusRegister = 'failed';
        console.log(action.payload);
        errorAlert('Email is already used');
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.auth = action.payload.data.data;
      });
  },
});

export const selectUserLogin = (state) => state.users.userLogin;
export const selectUserStatus = (state) => state.users.status;
export const selectUserError = (state) => state.users.error;

export const { makeStatusIdle } = userSlice.actions;
export default userSlice.reducer;
