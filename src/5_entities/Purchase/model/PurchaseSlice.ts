import {
    Action,
    PayloadAction,
    createSlice
} from "@reduxjs/toolkit";
import { PurchaseState } from "./types";
import { fetchPurchases } from "./PurchaseThunk";

const initialState: PurchaseState = {
    purchases: null,
    status: 'idle',
    error: null,
};

function isError(action: Action) {
    return action.type.endsWith('rejected');
}

const purchaseSlice = createSlice({
    name: 'purchase',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPurchases.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchPurchases.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.purchases = action.payload;
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const purchaseSliceReducer = purchaseSlice.reducer;