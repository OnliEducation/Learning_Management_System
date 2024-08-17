import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../6_shared/api";
import { IUser } from "../../../6_shared/types";

export const fetchUsers = createAsyncThunk<IUser[], undefined, { rejectValue: string }>(
    'user/fetchUsers',
    async (_, { rejectWithValue }) => {
        try {
            const usersCollection = collection(db, "users");
            const usersSnapshot = await getDocs(usersCollection);

            console.log(usersSnapshot);

            const users: IUser[] = usersSnapshot.docs.map(doc => ({...doc.data(), id: doc.id}) as IUser);            
            return users;            
        }
        catch (error) {
            return rejectWithValue("Error fetching users: ");
        }
    }
);