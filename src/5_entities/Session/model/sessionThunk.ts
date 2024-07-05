import { createAsyncThunk } from '@reduxjs/toolkit'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { IUser, IUserInfoLogin } from './types';

export const signInUser = createAsyncThunk<IUser, IUserInfoLogin, { rejectValue: string }>(
    'auth/signInUser',
    async ({ email, password }, { rejectWithValue }) => {
        const auth = getAuth();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(`You are user ${userCredential.user.email}`);
            return {
                email: userCredential.user.email,
                id: userCredential.user.uid,
            }
        } catch (error) {
            return rejectWithValue('Failed to sign in');
        }
    }
);

export const signUpUser = createAsyncThunk<IUser, IUserInfoLogin, { rejectValue: string }>(
    'auth/signUpUser',
    async ({ email, password }, { rejectWithValue }) => {
        const auth = getAuth();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            return {
                email: userCredential.user.email,
                id: userCredential.user.uid,
            }
        } catch (error) {
            return rejectWithValue('Failed to sign up');
        }
    }
);