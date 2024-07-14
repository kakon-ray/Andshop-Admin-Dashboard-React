import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

export const createSubCategory = createAsyncThunk("createSubCategory", async (data, { rejectWithValue }) => {

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

export const showSubCategory = createAsyncThunk('showSubCategory', async (args, { rejectWithValue }) => {
    const response = await fetch("https://669355f4c6be000fa07adf62.mockapi.io/crud",);
    try {
        const result = await response.json()
        return result;
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const updateSubCategory = createAsyncThunk("updateSubCategory", async (data, { rejectWithValue }) => {
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

export const deleteSubCategory = createAsyncThunk("deleteSubCategory", async (id, { rejectWithValue }) => {
    console.log(id)
    const response = await fetch(
        `https://669355f4c6be000fa07adf62.mockapi.io/crud/${id}`, { method: "DELETE" });

    try {
        const result = await response.json();
        return result;

    } catch (error) {
        return rejectWithValue(error)
    }


}
);




const subCategoryDetails = createSlice({
    name: "subCategoryDetails",
    initialState: {
        subcategories: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // create category
            .addCase(createSubCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(createSubCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.subcategories.push(action.payload);
                toast.success('Subcategory created successfully!');
            })
            .addCase(createSubCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                toast.error('Failed to create Subcategory!');
            })

            //   show category
            .addCase(showSubCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(showSubCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.subcategories = action.payload;
            })
            .addCase(showSubCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            //   update Subcategory
            .addCase(updateSubCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateSubCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.subcategories = state.subcategories.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                );
                toast.success('Subcategory update successfully!');
            })
            .addCase(updateSubCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                toast.error('Failed to update Subcategory!');
            })

            //   delete Subcategory
            .addCase(deleteSubCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteSubCategory.fulfilled, (state, action) => {
                state.loading = false;
                const { id } = action.payload;
                if (id) {
                    state.subcategories = state.subcategories.filter((item) => item.id !== id);
                }
                toast.success('Subcategory delete successfully!');
            })
            .addCase(deleteSubCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                toast.error('Failed to delete Subcategory!');
            });


    },



})

export default subCategoryDetails.reducer;