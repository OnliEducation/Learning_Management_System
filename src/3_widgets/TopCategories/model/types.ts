import { ICategory } from "../../../5_entities/Category";
export interface ITopCategories {
    readonly className?: string
    categoryData: ICategory[];
}