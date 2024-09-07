import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMenus = createAsyncThunk("fetchMenus", async () => {
  const res = await fetch(`http://localhost:5000/menu.json`);
  return res?.json();
});

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMenus.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMenus.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchMenus.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default menuSlice.reducer;
