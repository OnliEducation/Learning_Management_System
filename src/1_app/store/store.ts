import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../4_features/auth/login/loginSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    
  },
});