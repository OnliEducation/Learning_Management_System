import { Error, Status } from "../../../6_shared/types";

interface IFeedbackCourseFirestore {
    user: string,
    rating: number,
    date: string,
    text: string,
}

interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    avatar: string;
}

interface IFeedbackCourse {
    user: IUser;
    rating: number;
    date: string;
    text: string;
}

interface IFeedbackCourseState {
    feedbacks: IFeedbackCourse[] | null,
    status: Status,
    error: Error,
}

export type {
    IFeedbackCourse,
    IFeedbackCourseState,
    IFeedbackCourseFirestore,
    IUser,
}