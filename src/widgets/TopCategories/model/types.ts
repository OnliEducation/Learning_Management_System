import { ICategory } from "../../../entities/Category";
export interface ITopCategories {
    readonly className?: string
    categoryData: ICategory[];
}