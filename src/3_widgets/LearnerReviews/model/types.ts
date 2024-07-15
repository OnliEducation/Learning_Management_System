import { IFeedbackCourse } from "../../../5_entities/FeedbackCourse/model/types";

export interface ILearnerReviews {
    items: IFeedbackCourse[] | null;
    className?: string;
}