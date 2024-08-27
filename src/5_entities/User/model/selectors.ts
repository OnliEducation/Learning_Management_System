import { createSelector } from '@reduxjs/toolkit';
import { IUserCardCompact } from './types';
import { IUser } from '../../../6_shared/types';

/**
 * Selects and returns a list popular mentors based on the number of reviews.
 * Returns an array of compact user cards (`IUserCardCompact`).
 *
 * @param {RootState} state - The Redux state.
 * @returns {IUserCardCompact[]} An array of popular mentors.
 */

export const selectPopularMentors = createSelector(
    (state: RootState) => state.user.users,
    (state: RootState) => state.course.courses,
    (users, courses): IUserCardCompact[] => {
        if (!courses || !users) {
            return []; // Возвращаем пустой массив, если нет данных
        }

        // Считаем количество отзывов для каждого ментора
        const mentorReviewCounts: Record<string, number> = {};

        courses.forEach((course) => {
            const mentorId = course.author.id;
            const reviewCount = course.reviews.length;

            if (mentorReviewCounts[mentorId]) {
                mentorReviewCounts[mentorId] += reviewCount;
            } else {
                mentorReviewCounts[mentorId] = reviewCount;
            }
        });

        // Создаём объект для быстрого доступа к пользователям по ID
        const usersById = users.reduce<Record<string, IUser>>((acc, user) => {
            acc[user.id] = user;
            return acc;
        }, {});

        // Сортируем менторов по количеству отзывов и возвращаем структуру без поля reviewCount
        return Object.keys(mentorReviewCounts)
            .sort((a, b) => mentorReviewCounts[b] - mentorReviewCounts[a])
            .map((mentorId) => {
                const user = usersById[mentorId];
                return user
                    ? {
                        id: user.id,
                        name: user.name,
                        cover: user.cover,
                        headline: user.headline,
                    }
                    : null;
            })
            .filter((mentor): mentor is IUserCardCompact => mentor !== null); // Используем type predicate
    }
);

/**
 * Selects and returns a list of top mentors based on the average rating of all courses they've authored.
 * Ratings are calculated by aggregating reviews from individual users to prevent rating manipulation.
 *
 * @param {RootState} state - The root state of the Redux store.
 * @returns {IUserCardCompact[]} - A sorted array of mentor cards with their average ratings.
 */
export const selectTopMentors = createSelector(
    (state: RootState) => state.user.users,
    (state: RootState) => state.course.courses,
    (state: RootState) => state.review.reviews,
    (users, courses, reviews): IUserCardCompact[] => {
        if (!users || !courses || !reviews) {
            return [];
        }

        // Подсчет средней оценки для каждого ментора с учетом агрегации отзывов пользователя
        const mentorRatings: Record<string, number> = {};

        users.forEach((user) => {
            const mentorCourses = courses.filter((course) => course.author.id === user.id);

            // Фильтруем курсы без отзывов
            const mentorCoursesWithReviews = mentorCourses.filter((course) =>
                reviews.some((review) => review.course === course.id)
            );

            if (mentorCoursesWithReviews.length > 0) {
                const totalRating = mentorCoursesWithReviews.reduce((acc, course) => {
                    const courseReviews = reviews.filter((review) => review.course === course.id);

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
                    const courseRating = aggregatedRatings.reduce((sum, rating) => sum + rating, 0);
                    return acc + (aggregatedRatings.length > 0 ? courseRating / aggregatedRatings.length : 0);
                }, 0);

                const averageMentorRating = totalRating / mentorCoursesWithReviews.length;
                mentorRatings[user.id] = averageMentorRating;
            }
        });

        // Сортировка менторов по средней оценке и формирование итогового списка
        return Object.keys(mentorRatings)
            .sort((a, b) => mentorRatings[b] - mentorRatings[a])
            .map((mentorId) => {
                const user = users.find((user) => user.id === mentorId);
                return user
                    ? {
                        id: user.id,
                        name: user.name,
                        cover: user.cover,
                        headline: user.headline,
                    }
                    : null;
            })
            .filter((mentor): mentor is IUserCardCompact => mentor !== null);
    }
);