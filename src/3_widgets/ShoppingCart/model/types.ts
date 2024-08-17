import { ICourseCard } from "../../../5_entities/Course/model/types";
export interface IShoppingCart {
    readonly className?: string
    readonly items: ICourseCard[] | null;
}