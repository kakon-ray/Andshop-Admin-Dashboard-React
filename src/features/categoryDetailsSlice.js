import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

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

export const showCategory = createAsyncThunk('showCategory', async (args, { rejectWithValue }) => {
    const response = await fetch("https://669355f4c6be000fa07adf62.mockapi.io/crud",);
    try {
        const result = await response.json()
        return result;
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const updateCategory = createAsyncThunk("updateCategory", async (data, { rejectWithValue }) => {
    //   console.log(data)
    const response = await fetch(
        `https://669355f4c6be000fa07adf62.mockapi.io/crud/${data.id}`,
        {
            method: "PUT",
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

export const deleteCategory = createAsyncThunk("deleteCategory", async (id, { rejectWithValue }) => {
    console.log(id)
  const response = await fetch(
      `https://669355f4c6be000fa07adf62.mockapi.io/crud/${id}`,{ method: "DELETE" });

  try {
      const result = await response.json();
      return result;

  } catch (error) {
      return rejectWithValue(error)
  }


}
);


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
                toast.success('Category created successfully!');
            })
            .addCase(createCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                toast.error('Failed to create Category!');
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
            })

            //   update category
            .addCase(updateCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = state.categories.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                  );
                  toast.success('Category update successfully!');
            })
            .addCase(updateCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                toast.error('Failed to update Category!');
            })
            //   delete category
            .addCase(deleteCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteCategory.fulfilled, (state, action) => {
                state.loading = false;
                const { id } = action.payload;
                if (id) {
                  state.categories = state.categories.filter((item) => item.id !== id);
                }
                toast.success('Category delete successfully!');
            })
            .addCase(deleteCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                toast.error('Failed to delete Category!');
            });


    },



})

export default categoryDetails.reducer;