import { ICourse } from "../../../5_entities/Course";

export interface ITopCourses {
    courseData: ICourse[];
    className?: string;
}