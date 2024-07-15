import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFeedbackCourse, IFeedbackCourseFirestore, IUser } from "./types";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../6_shared/api";

export const fetchFeedbackCourse = createAsyncThunk<IFeedbackCourse[], undefined, { rejectValue: string }>(
    'feedbackCourse/fetchFeedbackCourse',
    async (_, { rejectWithValue }) => {
        try {
            const feedbacksCollection = collection(db, "feedbacksCourses");
            const feedbacksSnapshot = await getDocs(feedbacksCollection);
            console.log(feedbacksSnapshot);
            const feedbacks: IFeedbackCourseFirestore[] = feedbacksSnapshot.docs.map(doc => doc.data() as IFeedbackCourseFirestore);

            const userIds = [...new Set(feedbacks.map(feedback => feedback.user))];

            const usersCollection = collection(db, "users");
            const usersQuery = query(usersCollection, where("__name__", "in", userIds));
            const usersSnapshot = await getDocs(usersQuery);

            const usersMap: { [id: string]: IUser } = {};

            usersSnapshot.forEach(doc => {
                const data = doc.data();
                usersMap[doc.id] = {
                    id: doc.id,
                    firstName: data.profile.personalData.firstName,
                    lastName: data.profile.personalData.lastName,
                    avatar: data.profile.avatar.image
                };
            });

            const courseFeedbacks: IFeedbackCourse[] = feedbacks.map(feedback => ({
                user: usersMap[feedback.user],
                rating: feedback.rating,
                date: feedback.date,
                text: feedback.text
            }));

            return courseFeedbacks;
        }
        catch (error) {
            return rejectWithValue("Error fetching course feedbacks: ");
        }
    }
);