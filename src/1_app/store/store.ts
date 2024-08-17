import { configureStore } from '@reduxjs/toolkit';
import { sessionReducer } from '../../5_entities/Session';
import { userReducer } from '../../5_entities/User';
import { feedbackCourseSliceReducer } from '../../5_entities/FeedbackCourse';
import { articleSliceReducer } from '../../5_entities/Article';
import { purchaseSliceReducer } from '../../5_entities/Purchase';
import { currentUserReducer } from '../../5_entities/CurrentUser';

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    user: userReducer,
    currentUser : currentUserReducer,
    feedbackCourse: feedbackCourseSliceReducer,
    article: articleSliceReducer,
    purchase: purchaseSliceReducer,
  },
});