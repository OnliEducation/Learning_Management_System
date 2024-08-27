import {
    Action,
    PayloadAction,
    createSlice
} from "@reduxjs/toolkit";
import { ICurrentUserState } from "./types";
import { createUser, fetchCurrentUser } from "./CurrentUserThunk";

const initialState: ICurrentUserState = {
    currentUser: null,
    status: 'idle',
    error: null,
};

function isError(action: Action) {
    return action.type.endsWith('rejected');
}

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        cleanCurrentUser: (state) => {
            state.currentUser = null;
            state.status = 'idle';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.currentUser = action.payload;
                state.status = 'succeeded';
            })
            .addCase(fetchCurrentUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchCurrentUser.fulfilled, (state, action) => {
                state.currentUser = action.payload;
                state.status = 'succeeded';
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const { cleanCurrentUser } = currentUserSlice.actions;
export const currentUserReducer = currentUserSlice.reducer;