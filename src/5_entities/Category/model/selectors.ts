import { createSelector } from '@reduxjs/toolkit';
import { ICategoryCardCompact } from './types';

export const selectPopularCategories = createSelector(
    (state: RootState) => state.category.categories,
    (categories): ICategoryCardCompact[] => {
        if (!categories) {
            return [];
        }
        return categories
            .map((category) => ({
                ...category,
                courseCount: category.courses.length,
            }))
            .sort((a, b) => b.courseCount - a.courseCount)
            .map((category) => ({
                id: category.id,
                label: category.label,
                cover: category.cover,
                courses: category.courses,
            }));
    }    
)