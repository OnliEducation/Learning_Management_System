import {
    Action,
    PayloadAction,
    createSlice
} from "@reduxjs/toolkit";
import { IUserState } from "./types";
import { createRegisterData } from "./userThunk";

const initialState: IUserState = {
    profile: {
        personalData: {
            firstName: '',
            lastName: '',
            userName: '',
            description: '',
            language: '',
        },
        avatar: {
            image: '',
            imageTitle: '',
        },
        links: {
            website: '',
            twitter: '',
            linkedin: '',
            youtube: '',
            facebook: '',
        },
    },
    courses: [],
    mentors: [],
    reviews: [],
    status: 'idle',
    error: null,
};

function isError(action: Action) {
    return action.type.endsWith('rejected');
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createRegisterData.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(createRegisterData.fulfilled, (state, action) => {
                state.profile.personalData = {
                    ...state.profile.personalData,
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    userName: action.payload.userName,
                };
                state.status = 'succeeded';
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const userReducer = userSlice.reducer;