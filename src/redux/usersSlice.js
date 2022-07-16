import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const loginUrl = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/login';
const initialState = {
  loading: false,
  error: '',
  userLogin: null,
};

export const loginUser = createAsyncThunk(
  'users/login',
  async ({ email, password }) => {
    console.log(email);
    console.log(password);
    const response = await axios({
      method: 'post',
      url: loginUrl,
      data: {
        email,
        password,
      },
    });
    return response;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        console.log('login pending');
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userLogin = action.payload;
        localStorage.setItem('token', action.payload.data.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.userLogin = null;
        console.log('login rejected');
      });
  },
});

export const selectUserLogin = (state) => state.users.userLogin;
export const selectUserStatus = (state) => state.users.status;
export const selectUserError = (state) => state.users.error;

export default userSlice.reducer;
