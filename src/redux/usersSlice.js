import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import UserServices from '../services/user';
import { errorAlert, successAlert, customAlert } from '../utils/alert';

const initialState = {
  status: 'idle',
  statusRegister: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  statusAuth: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: '',
  userLogin: null,
  userRegister: false,
  statusUpdate: 'idle',
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

export const updateUser = createAsyncThunk('users/update', async (data) => {
  const { form, token } = data;
  return await UserServices.update(form, token);
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    makeStatusIdle: (state) => {
      state.status = 'idle';
      state.statusRegister = 'idle';
      state.statusUpdate = 'idle';
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userLogin = action.payload;
        state.error = '';
        localStorage.setItem('token', action.payload.data.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        customAlert('error', 'Email or password wrong', 'Error');
        state.status = 'failed';
        state.error = action.error.message;
        state.userLogin = null;
      })
      .addCase(registerUser.pending, (state) => {
        state.statusRegister = 'loading';
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.statusRegister = 'succeeded';
        successAlert('Register success');
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.statusRegister = 'failed';
          errorAlert('Email is already used');
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.auth = action.payload.data.data;
        state.statusAuth = 'succeeded';
      })
      .addCase(updateUser.fulfilled, (state) => {
        state.statusUpdate = 'succeeded';
        customAlert('success','Successfully updated profile', 'Success');
      })
      .addCase(updateUser.rejected, (state) => {
        state.statusUpdate = 'failed';
        errorAlert('Update profile failed');
      });
  },
});

export const selectUserLogin = (state) => state.users.userLogin;
export const selectUserStatus = (state) => state.users.status;
export const selectUserError = (state) => state.users.error;

export const { makeStatusIdle } = userSlice.actions;
export default userSlice.reducer;
