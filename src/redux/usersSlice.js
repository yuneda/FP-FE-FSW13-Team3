import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const loginUrl = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/login';
const initialState = {
  userLogin: null,
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const loginUser = createAsyncThunk(
  'users/login',
  async ({ email, password }) => {
    console.log(email, password);
    try {
      const response = await axios.post(loginUrl, {
        email,
        password,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.status = 'loading';
        console.log('pending');
        console.log('pending');
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userLogin = action.payload;
        console.log(action.payload);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        console.log('ditolak');
      });
  },
});

export const selectUserLogin = (state) => state.users.userLogin;
export const selectUserStatus = (state) => state.users.status;
export const selectUserError = (state) => state.users.error;

export default userSlice.reducer;
