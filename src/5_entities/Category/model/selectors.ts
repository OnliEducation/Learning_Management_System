import { createSelector } from '@reduxjs/toolkit';
import { ICategoryCardCompact } from './types';

/**
 * Selects and returns a list popular categories based on the number of reviews.
 * Returns an array of compact course cards (`ICategoryCardCompact`).
 *
 * @param {RootState} state - The Redux state.
 * @returns {ICategoryCardCompact[]} An array of popular mentors.
 */
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

/**
 * Selects and returns a list of top categories based on the average rating of all courses within those categories.
 * A category is considered top if it contains courses with reviews. 
 * The average rating of a category is calculated by aggregating the average ratings of its courses.
 *
 * @param {RootState} state - The root state of the Redux store.
 * @returns {ICategoryCardCompact[]} - A sorted array of categories with their average ratings.
 */
export const selectTopCategories = createSelector(
    (state: RootState) => state.category.categories,
    (state: RootState) => state.course.courses,
    (state: RootState) => state.review.reviews,
    (categories, courses, reviews): ICategoryCardCompact[] => {
        if (!categories || !courses || !reviews) {
            return [];
        }

        const categoryRatings: Record<string, number> = {};

        categories.forEach((category) => {
            const categoryCourses = courses.filter((course) => course.category === category.id);

            // const categoryCoursesWithReviews = categoryCourses.filter((course) =>
            //     reviews.some((review) => review.course === course.id)
            // );
            const categoryCoursesWithReviews = categoryCourses.filter((course) => course.reviews.length > 0);

            if (categoryCoursesWithReviews.length > 0) {
                const totalRating = categoryCoursesWithReviews.reduce((acc, course) => {
                    const courseReviews = reviews.filter((review) => review.course === course.id);

                    const userRatings: Record<string, number[]> = {};
                    courseReviews.forEach((review) => {
                        if (!userRatings[review.user.id]) {
                            userRatings[review.user.id] = [];
                        }
                        userRatings[review.user.id].push(review.rating);
                    });

                    const aggregatedRatings = Object.values(userRatings)
                        .map((ratings) => ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length);

                    const courseRating = aggregatedRatings.reduce((sum, rating) => sum + rating, 0);
                    return acc + (aggregatedRatings.length > 0 ? courseRating / aggregatedRatings.length : 0);
                }, 0);

                const averageCategoryRating = totalRating / categoryCoursesWithReviews.length;
                categoryRatings[category.id] = averageCategoryRating;
            }
        });

        return Object.keys(categoryRatings)
            .sort((a, b) => categoryRatings[b] - categoryRatings[a])
            .map((categoryId) => {
                const category = categories.find((category) => category.id === categoryId);
                return category
                    ? {
                        id: category.id,
                        label: category.label,
                        cover: category.cover,
                        courses: category.courses,
                    }
                    : null;
            })
            .filter((category): category is ICategoryCardCompact => category !== null);
    }
);