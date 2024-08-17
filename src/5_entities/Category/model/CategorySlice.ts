import {
    Action,
    PayloadAction,
    createSlice
} from "@reduxjs/toolkit";
import { CategoryState } from "./types";
import { fetchCategories } from "./CategoryThunk";

const initialState: CategoryState = {
    categories: null,
    status: 'idle',
    error: null,
};

function isError(action: Action) {
    return action.type.endsWith('rejected');
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.categories = action.payload;
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const categorySliceReducer = categorySlice.reducer;