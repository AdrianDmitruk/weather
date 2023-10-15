import { createAsyncThunk } from "@reduxjs/toolkit";

import axiosInstance from "../../api";

const appId = "af6da019037b5bf82dce61130ee0cb73";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeatherStatus",
  async (searchValue) => {
    const { data } = await axiosInstance.get(
      `/weather?units=metric&q=${searchValue}&appid=${appId}&lang=ru`
    );

    return data;
  }
);
