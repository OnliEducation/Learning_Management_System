interface IUserReviewUI {
    id: string;
    firstName: string;
    lastName: string;
    avatar: string;
}

interface IReview {
    id: string;
    user: IUserReviewUI;           
    rating: number;
    content: string;
    createdAt: string;      //Date
}

export type {
    IUserReviewUI,
    IReview
}