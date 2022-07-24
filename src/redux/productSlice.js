import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductServices from "../services/product";
import { customAlert } from '../utils/alert'

const initialState = {
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: "",
  createProduct: null,
  data: [],
  editProduct: null,
};

export const createProduct = createAsyncThunk("product/add", async (data) => {
  const { form, token } = data;
  return await ProductServices.create(form, token);
});

export const editProduct = createAsyncThunk("product/edit", async (data) => {
  const { form, token, id } = data;
  return await ProductServices.edit(form, token, id);
});

export const getAllProduct = createAsyncThunk("product/getAll", async () => {
  return await ProductServices.getAll();
});

export const filterProduct = createAsyncThunk(
  "product/filter",
  async (data) => {
    return await ProductServices.filter(data);
  }
);

export const searchProduct = createAsyncThunk(
  "product/search",
  async (data) => {
    return await ProductServices.search(data);
  }
);

export const queryProduct = createAsyncThunk("product/query", async (data) => {
  const { status, token } = data;
  return await ProductServices.query(status, token);
});

export const wishlistProduct = createAsyncThunk(
  "product/wishlist",
  async (data) => {
    return await ProductServices.wishlist(data);
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    makeStatusIdle: (state) => {
      state.status = "idle";
      state.error = "";
      state.createProduct = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.createProduct = action.payload;
        state.error = "";
        customAlert('success', 'Product created successfully', 'Success');
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.createProduct = null;
      })

      .addCase(editProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.editProduct = action.payload;
        state.error = "";
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.editProduct = null;
      })

      .addCase(getAllProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data.data.product.data;
        state.error = "";
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.data = [];
      })
      .addCase(filterProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(filterProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data.data.product.data;
        state.error = "";
      })
      .addCase(searchProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data.data.product.data;
        state.error = "";
      })
      .addCase(queryProduct.pending, (state) => {
        state.status = "loading";
        state.data = [];
      })
      .addCase(queryProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data.data.product;
        state.error = "";
      })
      .addCase(wishlistProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data.data.data;
        state.error = "";
      });
  },
});

export const { makeStatusIdle } = productSlice.actions;
export default productSlice.reducer;
