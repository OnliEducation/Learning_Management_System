import { configureStore } from '@reduxjs/toolkit';
import { sessionReducer } from '../../5_entities/Session';
import { userReducer } from '../../5_entities/User';


import { reviewSliceReducer } from '../../5_entities/Review';
import { categorySliceReducer } from '../../5_entities/Category';
import { courseSliceReducer } from '../../5_entities/Course';
import { articleSliceReducer } from '../../5_entities/Article';
import { purchaseSliceReducer } from '../../5_entities/Purchase';
import { currentUserReducer } from '../../5_entities/CurrentUser';


export const store = configureStore({
  reducer: {
    session: sessionReducer,
    currentUser: currentUserReducer,
    
    user: userReducer,
    course: courseSliceReducer,
    article: articleSliceReducer,
    review: reviewSliceReducer,
    category: categorySliceReducer,
    purchase: purchaseSliceReducer,
  },
});