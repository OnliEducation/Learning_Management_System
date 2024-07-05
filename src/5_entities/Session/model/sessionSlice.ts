import {
    Action,
    PayloadAction,
    createSlice
} from "@reduxjs/toolkit";
import { signInUser, signUpUser } from "./sessionThunk";
import { ISessionState } from "./types";

const initialState: ISessionState = {
    user: null,
    status: 'idle',
    error: null,
    role: 'viewer',
};

function isError(action: Action) {
    return action.type.endsWith('rejected');
}

const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signInUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(signInUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
                state.role = 'user';
            })
            .addCase(signUpUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(signUpUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            // .addCase(signOutUser.pending, (state) => {
            //     state.status = 'loading';
            //     state.error = null;
            // })
            // .addCase(signOutUser.fulfilled, (state) => {
            //     state.status = 'succeeded';
            //     state.user = null;
            // })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const sessionReducer = sessionSlice.reducer;