import { createAsyncThunk } from '@reduxjs/toolkit'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ISession, ISessionLogin, ISessionSignUp } from './types';

export const signUpUser = createAsyncThunk<ISession, ISessionSignUp, { rejectValue: string }>(
    'session/signUpUser',
    async ({ name, email, password }, { rejectWithValue }) => {
        const auth = getAuth();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            const user = userCredential.user;
            return {
                name: name,
                email: user.email,
                id: user.uid,
            }
        } catch (error) {
            return rejectWithValue('Failed to sign up');
        }
    }
);

export const signInUser = createAsyncThunk<{ id: ISession['id'] }, ISessionLogin, { rejectValue: string }>(
    'session/signInUser',
    async ({ email, password }, { rejectWithValue }) => {
        const auth = getAuth();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(`You are user ${userCredential.user.email}`);
            return {
                id: userCredential.user.uid,
            }
        } catch (error) {
            return rejectWithValue('Failed to sign in');
        }
    }
);