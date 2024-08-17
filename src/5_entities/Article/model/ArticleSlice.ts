import {
    Action,
    PayloadAction,
    createSlice
} from "@reduxjs/toolkit";
import { ArticleState } from "./types";
import { fetchArticles } from "./ArticleThunk";

const initialState: ArticleState = {
    articles: null,
    status: 'idle',
    error: null,
};

function isError(action: Action) {
    return action.type.endsWith('rejected');
}

const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.articles = action.payload;
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const articleSliceReducer = articleSlice.reducer;