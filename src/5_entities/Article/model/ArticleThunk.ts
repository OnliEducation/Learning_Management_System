import { createAsyncThunk } from "@reduxjs/toolkit";
import { IArticle } from "./types";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../6_shared/api";

export const fetchArticles = createAsyncThunk<IArticle[], undefined, { rejectValue: string }>(
    'article/fetchArticles',
    async (_, { rejectWithValue }) => {
        try {
            const articlesCollection = collection(db, "articles");
            const articlesSnapshot = await getDocs(articlesCollection);

            console.log(articlesSnapshot);

            const articles: IArticle[] = articlesSnapshot.docs.map(doc => (
                {...doc.data(), id: doc.id}
            ) as IArticle);            
            return articles;            
        }
        catch (error) {
            return rejectWithValue("Error fetching articles: ");
        }
    }
);