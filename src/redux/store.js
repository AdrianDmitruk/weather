import { configureStore } from "@reduxjs/toolkit";
import weather from "./weather/slice";

export const store = configureStore({
  reducer: { weather },
});
