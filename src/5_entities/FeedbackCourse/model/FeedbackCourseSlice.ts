import {
    Action,
    PayloadAction,
    createSlice
} from "@reduxjs/toolkit";
import { IFeedbackCourseState } from "./types";
import { fetchFeedbackCourse } from "./FeedbackCourseThunk";

const initialState: IFeedbackCourseState = {
    feedbacks: null,
    status: 'idle',
    error: null,
};

function isError(action: Action) {
    return action.type.endsWith('rejected');
}

const feedbackCourseSlice = createSlice({
    name: 'feedbackCourse',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFeedbackCourse.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchFeedbackCourse.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.feedbacks = action.payload;
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const feedbackCourseSliceReducer = feedbackCourseSlice.reducer;