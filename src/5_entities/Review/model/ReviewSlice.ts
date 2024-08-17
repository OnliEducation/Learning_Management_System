import {
    Action,
    PayloadAction,
    createSlice
} from "@reduxjs/toolkit";
import { IReviewState } from "./types";
import { fetchReviews } from "./ReviewThunk";

const initialState: IReviewState = {
    reviews: null,
    status: 'idle',
    error: null,
};

function isError(action: Action) {
    return action.type.endsWith('rejected');
}

const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviews.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.reviews = action.payload;
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const reviewSliceReducer = reviewSlice.reducer;