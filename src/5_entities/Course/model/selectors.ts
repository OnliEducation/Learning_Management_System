import { createSelector } from '@reduxjs/toolkit';
import { ICourseCard } from './types';

/**
 * Selects and returns a list popular courses based on the number of reviews.
 * Returns an array of compact course cards (`ICourseCard`).
 *
 * @param {RootState} state - The Redux state.
 * @returns {ICourseCard[]} An array of popular mentors.
 */
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

/**
 * Selects and returns a list of top courses based on the average rating of all reviews associated with them.
 * Ratings are calculated by aggregating reviews from individual users to prevent rating manipulation.
 *
 * @param {RootState} state - The root state of the Redux store.
 * @returns {ICourseCard[]} - A sorted array of course cards with their average ratings.
 */
export const selectTopCourses = createSelector(
    (state: RootState) => state.course.courses,
    (state: RootState) => state.review.reviews,
    (courses, reviews): ICourseCard[] => {
        if (!courses || !reviews) {
            return [];
        }

        // Подсчет средней оценки для каждого курса с учетом агрегации отзывов пользователя
        const courseRatings: Record<string, number> = {};

        courses.forEach((course) => {
            // Фильтруем курсы без отзывов
            const courseReviews = reviews.filter((review) => review.course === course.id);

            if (courseReviews.length > 0) {
                // Группировка отзывов по пользователям
                const userRatings: Record<string, number[]> = {};
                courseReviews.forEach((review) => {
                    if (!userRatings[review.user.id]) {
                        userRatings[review.user.id] = [];
                    }
                    userRatings[review.user.id].push(review.rating);
                });

                // Подсчет средней оценки для каждого пользователя
                const aggregatedRatings = Object.values(userRatings).map(
                    (ratings) => ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length
                );

                // Средняя оценка курса с учетом агрегированных данных
                const totalRating = aggregatedRatings.reduce((sum, rating) => sum + rating, 0);
                const averageCourseRating = totalRating / aggregatedRatings.length;

                courseRatings[course.id] = averageCourseRating;
            }
        });

        // Сортировка курсов по средней оценке и формирование итогового списка
        return Object.keys(courseRatings)
            .sort((a, b) => courseRatings[b] - courseRatings[a])
            .map((courseId) => {
                const course = courses.find((course) => course.id === courseId);
                return course
                    ? {
                        id: course.id,
                        cover: course.cover,
                        title: course.title,
                        author: course.author,
                        price: course.price,
                    }
                    : null;
            })
            .filter((course): course is ICourseCard => course !== null);
    }
);