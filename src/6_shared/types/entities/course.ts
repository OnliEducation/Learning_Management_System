import { IArticle } from "./article";
import { ICategory } from "./category";
import { IReview } from "./review";
import { IUser } from "./user";

export interface ICourseUserUI {
    id: IUser["id"];
    cover: IUser["cover"]
    name: IUser["name"]
    headline: IUser["headline"]
    description: IUser["description"]
}

export interface ICourse {
    readonly id: string
    readonly title: string
    readonly description: Array<string>
    readonly cover: string
    readonly price: number
    readonly articles: Array<IArticle["id"]>
    readonly author: ICourseUserUI
    readonly reviews: Array<IReview["id"]>
    readonly category: ICategory["id"]
    readonly createdAt: string
    readonly editedAt: string | null
}