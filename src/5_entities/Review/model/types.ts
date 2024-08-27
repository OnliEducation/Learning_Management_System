import { Error, IReview, Status } from "../../../6_shared/types";

interface IReviewState {
    reviews: IReview[] | null,
    status: Status,
    error: Error,
}

export type {
    IReview,
    IReviewState,
}