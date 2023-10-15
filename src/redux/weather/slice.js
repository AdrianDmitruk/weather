import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "./asyncActions";

const initialState = {
  items: [],
  searchValue: "",
  status: "loading",
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },

    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.status = "loading";
      state.items = [];
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "seccess";
    });
    builder.addCase(fetchWeather.rejected, (state) => {
      state.status = "error";
      state.items = [];
    });
  },
});

export const { setItems, setSearchValue } = weatherSlice.actions;

export default weatherSlice.reducer;
