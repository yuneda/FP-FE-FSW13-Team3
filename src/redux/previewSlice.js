import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: "",
  previewProduct: null,
};

const previewSlice = createSlice({
  name: "preview",
  initialState,
  reducers: {
    makeStatusPreviewIdle: (state) => {
      state.status = "idle";
      state.error = "";
      state.previewProduct = null;
    },
    addPreviewProduct: (state, action) => {
      state.previewProduct = action.payload;
    }
  }
})

export const { makeStatusPreviewIdle, addPreviewProduct } = previewSlice.actions;
export default previewSlice.reducer;