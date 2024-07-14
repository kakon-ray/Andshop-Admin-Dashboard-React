import { configureStore } from "@reduxjs/toolkit";
import  categoryDetails  from "../features/categoryDetailsSlice";
import  subCategoryDetails  from "../features/subCategorySlice";




export const store = configureStore({
  reducer: {
    category:categoryDetails,
    subcategory:subCategoryDetails,
  },
});