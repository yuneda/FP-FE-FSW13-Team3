import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import TransactionServices from '../services/transaction';
import { successAlert } from '../utils/alert';

const initialState = {
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: '',
};

export const addOffer = createAsyncThunk('offer/add', async (data) => {
  return await TransactionServices.addOffer(data);
});

export const handlewishlist = createAsyncThunk('offer/wishlist', async (data) => {
  return await TransactionServices.wishlist(data);
});

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    makeStatusIdle: (state) => {
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addOffer.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addOffer.fulfilled, (state) => {
        state.status = 'succeeded';
        state.error = '';
        successAlert('Your offer has been sent');
        console.log('addOffer fulfilled');
      })
      .addCase(addOffer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        console.log(action.error.message);
      })
      .addCase(handlewishlist.pending, () => {
        // state.status = 'loading';
      })
      .addCase(handlewishlist.fulfilled, () => {
        // state.status = 'succeeded';
        // state.error = '';
        // successAlert('Your offer has been sent');
        // console.log('handlewishlist fulfilled');
        successAlert('Add to wishlist');
        window.location.reload(false);
      });
  },
});

export const { makeStatusIdle } = transactionSlice.actions;
export default transactionSlice.reducer;
