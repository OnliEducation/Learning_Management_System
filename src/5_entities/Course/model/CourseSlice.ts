import {
    Action,
    PayloadAction,
    createSlice
} from "@reduxjs/toolkit";
import { CourseState } from "./types";
import { fetchCourses } from "./CourseThunk";

const initialState: CourseState = {
    courses: null,
    status: 'idle',
    error: null,
};

function isError(action: Action) {
    return action.type.endsWith('rejected');
}

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCourses.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchCourses.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.courses = action.payload;
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const courseSliceReducer = courseSlice.reducer;