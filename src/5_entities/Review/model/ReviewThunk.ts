import { createAsyncThunk } from "@reduxjs/toolkit";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../6_shared/api";
import { IReview, IUserReviewUI } from "../../../6_shared/types";

export const fetchReviews = createAsyncThunk<IReview[], undefined, { rejectValue: string }>(
    'review/fetchReviews',
    async (_, { rejectWithValue }) => {
        try {
            const reviewsCollection = collection(db, "reviews");
            const reviewsSnapshot = await getDocs(reviewsCollection);
            console.log(reviewsSnapshot);
            const reviewsFirestore = reviewsSnapshot.docs.map(doc => doc.data());

            const userIds = [...new Set(reviewsFirestore.map(review => review.user))];

            const usersCollection = collection(db, "users");
            const usersQuery = query(usersCollection, where("__name__", "in", userIds));
            const usersSnapshot = await getDocs(usersQuery);

            const usersMap: { [id: string]: IUserReviewUI } = {};

            usersSnapshot.forEach(doc => {
                const data = doc.data();
                usersMap[doc.id] = {
                    id: doc.id,
                    name: data.name,
                    cover: data.cover,
                };
            });

            const reviews: IReview[] = reviewsFirestore.map(review => ({
                id: review.id,
                course: review.course,
                user: usersMap[review.user],
                content: review.content,
                rating: review.rating,
                createdAt: review.createdAt.toDate().toISOString(),
            }));

            return reviews;
        }
        catch (error) {
            return rejectWithValue("Error fetching reviews: ");
        }
    }
);