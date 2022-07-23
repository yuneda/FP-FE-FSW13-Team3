import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import NotificationServices from '../services/notif';
const initialState = {
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: '',
  data: [],
};

export const getAllNotif = createAsyncThunk('notif/getAll', async (data) => {
  return await NotificationServices.get(data);
});

const notifSlice = createSlice({
  name: 'notif',
  initialState,
  reducers: {
    makeStatusIdle: (state) => {
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllNotif.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllNotif.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload.data.data.data;
        state.error = '';
        console.log('getAllNotif fulfilled');
      })
      .addCase(getAllNotif.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.data = [];
        console.log(action.error.message);
      });
  },
});

export const { makeStatusIdle } = notifSlice.actions;
export default notifSlice.reducer;
