import { configureStore } from '@reduxjs/toolkit';
import { sessionReducer } from '../../5_entities/Session';
import { userReducer } from '../../5_entities/User';
import { feedbackCourseSliceReducer } from '../../5_entities/FeedbackCourse';

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    user: userReducer,
    feedbackCourse: feedbackCourseSliceReducer,   
  },
});