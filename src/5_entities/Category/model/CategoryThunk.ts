import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICategory } from "../../../6_shared/types";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../6_shared/api";

export const fetchCategories = createAsyncThunk<ICategory[], undefined, { rejectValue: string }>(
    'category/fetchCategories',
    async (_, { rejectWithValue }) => {
        try {
            const categoriesCollection = collection(db, "categories");
            const categoriesSnapshot = await getDocs(categoriesCollection);

            console.log(categoriesSnapshot);

            const categories: ICategory[] = categoriesSnapshot.docs.map(doc => doc.data() as ICategory);            
            return categories;            
        }
        catch (error) {
            return rejectWithValue("Error fetching categories: ");
        }
    }
);