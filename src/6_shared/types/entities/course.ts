import { IArticle } from "./article";
import { ICategory } from "./category";
import { IReview } from "./review";
import { IUser } from "./user";

interface ICourseUserUI {
    name: IUser['name'];
    cover: IUser['cover'];
    headline: IUser['headline'];
    description: IUser['description'];
}

export interface ICourse {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly cover: string;
    readonly price: number;
    readonly articles: Array<IArticle["id"]>;
    readonly author: ICourseUserUI;
    readonly reviews: Array<IReview["id"]>;
    readonly category: ICategory["id"];
    readonly createdAt: Date;
    readonly editedAt: Date | null;
}