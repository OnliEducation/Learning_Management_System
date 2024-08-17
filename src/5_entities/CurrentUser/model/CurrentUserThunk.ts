import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../6_shared/api";
import { IUser, ThunkApiConfig } from "../../../6_shared/types";

export const createUser = createAsyncThunk<IUser, undefined, ThunkApiConfig>(
    'currentUser/createUser',
    async (_, { rejectWithValue, getState }) => {
        const state = getState();
        const user = state.session.user;

        if (!user) {
            return rejectWithValue('User is not logged in');
        }

        const userId = user.id;
        const userDocRef = doc(db, "users", userId);
        const docData = {
            email: user.email ?? '',
            name: user.name ?? '',
            cover: '',
            headline: '',
            description: '',
            socials: [],
            courses: [],
            reviews: [],
            purchases: [],
        }
        try {
            await setDoc(userDocRef, docData);
            return {
                ...docData,
                id: userId
            }
        } catch (error) {
            return rejectWithValue('Failed to put data in Redux');
        }
    }
);

export const fetchCurrentUser = createAsyncThunk<IUser, undefined, ThunkApiConfig>(
    'currentUser/fetchCurrentUser',
    async (_, { rejectWithValue, getState }) => {
        const state = getState();
        const user = state.session.user;

        if (!user) {
            return rejectWithValue('User is not logged in');
        }

        const userId = user.id;
        const userDocRef = doc(db, "users", userId);

        try {
            const userSnapshot = await getDoc(userDocRef);

            if (!userSnapshot.exists()) {
                return rejectWithValue('User data does not exist');
            }

            const currentUser = userSnapshot.data() as IUser;

            if (!currentUser) {
                return rejectWithValue('Failed to retrieve user data');
            }

            return {
                ...currentUser,
                id: userId
            }
        } catch (error) {
            return rejectWithValue('Failed to fetch current user data');
        }
    }
);