import { createSelector } from '@reduxjs/toolkit';
import { ICourseCard } from './types';

export const selectPopularCourses = createSelector(
    (state: RootState) => state.course.courses,
    (courses): ICourseCard[] => {
        if (!courses) {
            return [];
        }
        return courses
            .map((course) => ({
                ...course,
                reviewCount: course.reviews.length,
            }))
            .sort((a, b) => b.reviewCount - a.reviewCount)
            .map((course) => ({
                id: course.id,
                cover: course.cover,
                title: course.title,
                author: course.author,
                price: course.price,
            }));
    }
);