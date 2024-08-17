import { Error, IReview, Status } from "../../../6_shared/types";




// interface IReviewFirestore {
//     id: string,
//     user: string,           // IUser['id'];
//     rating: number,
//     content: string,
//     createdAt: string,      //Date
// }

interface IReviewState {
    reviews: IReview[] | null,
    status: Status,
    error: Error,
}

export type {
    IReview,
    IReviewState,
    // IReviewFirestore,
}