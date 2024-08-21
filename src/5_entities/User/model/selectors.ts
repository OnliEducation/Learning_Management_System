import { createSelector } from '@reduxjs/toolkit';
import { IUserCardCompact } from './types';
import { IUser } from '../../../6_shared/types';

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
