import { ICourseCard } from "../../../5_entities/Course/model/types";

export interface ITopCourses {
    readonly className?: string;
    readonly items: ICourseCard[] | null;
}