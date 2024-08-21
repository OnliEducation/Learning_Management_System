import { createSelector } from '@reduxjs/toolkit';
import { IUser } from '../../../6_shared/types';
import { IUserCardCompact } from './types';

export const selectUsersForTopMentors = createSelector(
    (state: RootState) => state.user.users,
    (users: IUser[] | null): IUserCardCompact[] =>
        users ? users.map(user => ({
            id: user.id,
            name: user.name,
            cover: user.cover,
            headline: user.headline,
        })) : []
);