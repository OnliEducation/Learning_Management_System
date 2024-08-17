import { createAsyncThunk } from "@reduxjs/toolkit";
import { IReview } from "./types";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../6_shared/api";
import { IUserReviewUI } from "../../../6_shared/types";

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
                    firstName: data.profile.personalData.firstName,
                    lastName: data.profile.personalData.lastName,
                    avatar: data.profile.avatar.image
                };
            });

            const reviews: IReview[] = reviewsFirestore.map(review => ({
                id: review.id,
                user: usersMap[review.user],
                content: review.content,
                rating: review.rating,
                createdAt: review.createdAt,
            }));

            return reviews;
        }
        catch (error) {
            return rejectWithValue("Error fetching reviews: ");
        }
    }
);