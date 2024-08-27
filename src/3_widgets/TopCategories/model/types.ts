import { ICategoryCardCompact } from "../../../5_entities/Category";
export interface ITopCategories {
    readonly className?: string
    items: ICategoryCardCompact[] | null;
}