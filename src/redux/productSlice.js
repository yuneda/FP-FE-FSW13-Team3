import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProductServices from '../services/product';

const createUrl = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/product';

const initialState = {
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: '',
  createProduct: null,
};

export const createProduct = createAsyncThunk('product/add', async (data) => {
  const { form, token } = data;
  return await ProductServices.create(form, token);
});

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    makeStatusIdle: (state) => {
      state.status = 'idle';
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.createProduct = action.payload;
        state.error = '';
        console.log('createProduct fulfilled');
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.createProduct = null;
        console.log(action.error.message);
      });
  },
});

export const { makeStatusIdle } = productSlice.actions;
export default productSlice.reducer;
