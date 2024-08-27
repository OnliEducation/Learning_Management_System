import { createAsyncThunk } from '@reduxjs/toolkit'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { ISessionLogin, ISessionSignUp } from './types';
import { ISession } from '../../../6_shared/types';

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

            const user = {
                id: userCredential.user.uid,
                email: userCredential.user.email,
            };

            console.log(`You are user ${user.email}`);
            return {
                id: userCredential.user.uid,
            }
        } catch (error) {
            return rejectWithValue('Failed to sign in');
        }
    }
);

export const signOutUser = createAsyncThunk<null, void, { rejectValue: string }>(
    'session/signOutUser',
    async (_, { rejectWithValue }) => {
        const auth = getAuth();
        try {
            await signOut(auth);
            return null;
        } catch (error) {
            return rejectWithValue('Failed to sign out');
        }
    }
);