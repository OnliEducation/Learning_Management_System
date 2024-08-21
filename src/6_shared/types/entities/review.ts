import { ICourse } from "./course";
import { IUser } from "./user";

interface IUserReviewUI {
    id: IUser['id'];
    name: IUser['name'];
    cover: IUser['cover'];
}

interface IReview {
    id: string;
    user: IUserReviewUI;
    course: ICourse['id'];
    rating: number;
    content: Date;
    createdAt: Date;
}

export type {
    IUserReviewUI,
    IReview
}