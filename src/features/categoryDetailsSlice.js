import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createCategory = createAsyncThunk("createCategory", async (data, { rejectWithValue }) => {

    const response = await fetch(
        "https://669355f4c6be000fa07adf62.mockapi.io/crud",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
    );

    try {
        const result = await response.json();
        return result;

    } catch (error) {
        return rejectWithValue(error)
    }


}
);

export const showCategory = createAsyncThunk('showCategory', async(args,{rejectWithValue}) => {
    const response = await fetch("https://669355f4c6be000fa07adf62.mockapi.io/crud",);
    try{
        const result = await response.json()
        return result;
    }catch(error){
      return rejectWithValue(error)
    }
})


 const categoryDetails = createSlice({
    name: "categoryDetails",
    initialState: {
        categories: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        // create category
          .addCase(createCategory.pending, (state) => {
            state.loading = true;
          })
          .addCase(createCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.categories.push(action.payload);
          })
          .addCase(createCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })

        //   show category
        .addCase(showCategory.pending, (state) => {
          state.loading = true;
        })
        .addCase(showCategory.fulfilled, (state, action) => {
          state.loading = false;
          state.categories = action.payload;
        })
        .addCase(showCategory.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });


      },



})

export default categoryDetails.reducer;