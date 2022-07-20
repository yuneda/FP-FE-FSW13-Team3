import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProductServices from '../services/product';

const createUrl = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/product';

const initialState = {
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: '',
  createProduct: null,
  data: [],
};

export const createProduct = createAsyncThunk('product/add', async (data) => {
  const { form, token } = data;
  return await ProductServices.create(form, token);
});

export const getAllProduct = createAsyncThunk('product/getAll', async () => {
  return await ProductServices.getAll();
});

export const filterProduct = createAsyncThunk('product/filter', async (data) => {
  return await ProductServices.filter(data);
});

export const searchProduct = createAsyncThunk('product/search', async (data) => {
  return await ProductServices.search(data);
});

export const queryProduct = createAsyncThunk('product/query', async (data) => {
  // console.log(status);
  // console.log(token);
  const { status, token } = data;
  // console.log(tkoe);
  return await ProductServices.query(status, token);
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
      })
      .addCase(getAllProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload.data.data.product.data;
        state.error = '';
        console.log('getAllProduct fulfilled');
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.data = [];
        console.log(action.error.message);
      })
      .addCase(filterProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(filterProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload.data.data.product.data;
        state.error = '';
        console.log('filterProduct fulfilled');
      })
      .addCase(searchProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload.data.data.product.data;
        state.error = '';
        console.log('searchProduct fulfilled');
      })
      .addCase(queryProduct.pending, (state) => {
        state.status = 'loading';
        state.data = [];
      })
      .addCase(queryProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload.data.data.product;
        state.error = '';
        console.log('queryProduct fulfilled');
        console.log(action.payload.data.data.product);
      });
  },
});

export const { makeStatusIdle } = productSlice.actions;
export default productSlice.reducer;
