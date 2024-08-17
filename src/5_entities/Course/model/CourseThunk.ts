import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICourse } from "../../../6_shared/types";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../6_shared/api";

export const fetchCourses = createAsyncThunk<ICourse[], undefined, { rejectValue: string }>(
    'course/fetchCourses',
    async (_, { rejectWithValue }) => {
        try {
            const coursesCollection = collection(db, "courses");
            const coursesSnapshot = await getDocs(coursesCollection);

            console.log(coursesSnapshot);

            const courses: ICourse[] = coursesSnapshot.docs.map(doc => doc.data() as ICourse);            
            return courses;            
        }
        catch (error) {
            return rejectWithValue("Error fetching courses");
        }
    }
);