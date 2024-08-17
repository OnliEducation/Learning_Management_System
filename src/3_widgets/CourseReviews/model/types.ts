import { IReview } from "../../../5_entities/Review/model/types";

export interface ICourseReviews {
    items: IReview[] | null;
    className?: string;
}