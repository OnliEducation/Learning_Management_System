import { configureStore } from '@reduxjs/toolkit';
import { sessionReducer } from '../../5_entities/Session';
import { userReducer } from '../../5_entities/User';
import { reviewSliceReducer } from '../../5_entities/Review';
import { categorySliceReducer } from '../../5_entities/Category';
import { courseSliceReducer } from '../../5_entities/Course';

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    user: userReducer,
    review: reviewSliceReducer,
    category: categorySliceReducer,
    course: courseSliceReducer,
  },
});