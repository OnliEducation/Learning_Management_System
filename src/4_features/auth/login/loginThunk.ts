import { createAsyncThunk } from '@reduxjs/toolkit'
import { User, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

interface UserInfoLogin {
    email: string;
    password: string;
}

export const signInUser = createAsyncThunk<User, UserInfoLogin, { rejectValue: string }>(
    'auth/signInUser',
    async ({ email, password }, { rejectWithValue }) => {
        const auth = getAuth();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(`Sucs ${userCredential.user.email}`);
            return userCredential.user;
        } catch (error) {
            return rejectWithValue('Failed to sign in');
        }
    }
);