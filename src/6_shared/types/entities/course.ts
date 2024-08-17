import { ICategory } from "./category";
import { IReview } from "./review";

export interface ICourse {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly cover: string;
    readonly price: number;
    readonly articles: Array<string> // Array<IArticle["id"]>;
    readonly author: string;         // IUser["id"];
    readonly reviews: Array<IReview["id"]>; 
    readonly category: ICategory["id"];
    readonly createdAt: Date;
    readonly editedAt: Date;
 }