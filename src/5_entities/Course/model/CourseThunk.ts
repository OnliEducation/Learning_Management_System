import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICourse, ICourseUserUI } from "../../../6_shared/types";

import { collection, getDocs, query, Timestamp, where } from "firebase/firestore";
import { db } from "../../../6_shared/api";

interface ICourseFirestoreData {
    readonly id: string
    readonly title: string
    readonly description: string
    readonly cover: string
    readonly price: number
    readonly articles: Array<string>
    readonly author: string
    readonly reviews: Array<string>
    readonly category: string
    readonly createdAt: Timestamp
    readonly editedAt: Timestamp
} 

export const fetchCourses = createAsyncThunk<ICourse[], undefined, { rejectValue: string }>(
    'course/fetchCourses',
    async (_, { rejectWithValue }) => {
        try {
            const coursesCollection = collection(db, "courses");
            const coursesSnapshot = await getDocs(coursesCollection);
            console.log(coursesSnapshot);
            const coursesFirestore: ICourseFirestoreData[] = coursesSnapshot.docs.map(doc => ({...doc.data(), id: doc.id}) as ICourseFirestoreData);

            console.log(coursesFirestore);
            const userIds = [...new Set(coursesFirestore.map(course => course.author))];

            const usersCollection = collection(db, "users");
            const usersQuery = query(usersCollection, where("__name__", "in", userIds));
            const usersSnapshot = await getDocs(usersQuery);

            const usersMap: { [id: string]: ICourseUserUI } = {};

            usersSnapshot.forEach(doc => {
                const data = doc.data();
                usersMap[doc.id] = {
                    id: doc.id,
                    cover: data.cover,
                    name: data.name,
                    headline: data.headline,
                    description: data.description,
                };
            });

            const courses: ICourse[] = coursesFirestore.map(course => ({
                id: course.id,
                title: course.title,
                description: course.description,
                cover: course.cover,
                price: course.price,
                articles: course.articles,
                author: usersMap[course.author],
                reviews: course.reviews,
                category: course.category,
                createdAt: course.createdAt.toDate().toISOString(),
                editedAt: course.editedAt.toDate().toISOString() || null,
            }));
            return courses;
        }
        catch (error) {
            return rejectWithValue("Error fetching courses");
        }
    }
);