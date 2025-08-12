import { configureStore } from "@reduxjs/toolkit";
import Shadow from "./features/Shadow";
import boxProperties from "./features/boxProperties";
export const store = configureStore({
  reducer: {
    Shadow,
    boxProperties
  }
});