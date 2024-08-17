import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPurchase } from "./types";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../6_shared/api";


export const fetchPurchases = createAsyncThunk<IPurchase[], undefined, { rejectValue: string }>(
    'purchase/fetchPurchases',
    async (_, { rejectWithValue }) => {
        try {
            const purchasesCollection = collection(db, "purchases");
            const purchasesSnapshot = await getDocs(purchasesCollection);

            console.log(purchasesSnapshot);

            const purchases: IPurchase[] = purchasesSnapshot.docs.map(doc => ({...doc.data(), id: doc.id}) as IPurchase);            
            return purchases;            
        }
        catch (error) {
            return rejectWithValue("Error fetching purchases: ");
        }
    }
);