import { configureStore } from "@reduxjs/toolkit";
import  categoryDetails  from "../features/categoryDetailsSlice";




export const store = configureStore({
  reducer: {
    app:categoryDetails
  },
});