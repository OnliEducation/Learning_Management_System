import { Action, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { signInUser } from "./loginThunk";
import { UserInfo } from "firebase/auth";

export interface IAuthState {
    user: UserInfo | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: IAuthState = {
    user: null,
    status: 'idle',
    error: null,
};

function isError(action: Action) {
    return action.type.endsWith('rejected');
}

const authSlice = createSlice({
    name: 'auth',
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
            })
            // .addCase(signInUser.rejected, (state, action) => {
            //     state.status = 'failed';
            //     state.error = action.payload || null;
            // })
            // .addCase(signUpUser.pending, (state) => {
            //     state.status = 'loading';
            //     state.error = null;
            // })
            // .addCase(signUpUser.fulfilled, (state, action: PayloadAction<User>) => {
            //     state.status = 'succeeded';
            //     state.user = action.payload;
            // })
            // .addCase(signUpUser.rejected, (state, action: PayloadAction<string | undefined>) => {
            //     state.status = 'failed';
            //     state.error = action.payload || null;
            // })
            // .addCase(signOutUser.pending, (state) => {
            //     state.status = 'loading';
            //     state.error = null;
            // })
            // .addCase(signOutUser.fulfilled, (state) => {
            //     state.status = 'succeeded';
            //     state.user = null;
            // })
            // .addCase(signOutUser.rejected, (state, action: PayloadAction<string | undefined>) => {
            //     state.status = 'failed';
            //     state.error = action.payload || null;
            // })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default authSlice.reducer;