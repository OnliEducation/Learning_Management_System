import { createAsyncThunk } from "@reduxjs/toolkit";
import { IRegisterData } from "./types";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../6_shared/api";
import { ThunkApiConfig } from "../../../6_shared/types";

export const createRegisterData = createAsyncThunk<IRegisterData, IRegisterData, ThunkApiConfig>(
    'user/createRegisterData',
    async ({ firstName, lastName, userName }, { rejectWithValue, getState }) => {
        const state = getState();
        const user = state.session.user;

        if (!user) {
            return rejectWithValue('User is not logged in');
        }

        const userId = user.id;
        const userDocRef = doc(db, "users", userId);
        const docData = {
            profile: {
                personalData: {
                    firstName,
                    lastName,
                    userName,
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
            courses: ['example1',],
            mentors: ['example1',],
            reviews: ['example1',],
        }
        try {
            await setDoc(userDocRef, docData);
            return {
                firstName,
                lastName,
                userName,
            }
        } catch (error) {
            return rejectWithValue('Failed to put data in Redux');
        }
    }
);