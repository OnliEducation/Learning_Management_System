import { ICourse } from "../../../entities/Course";

export interface ITopCourses {
    courseData: ICourse[];
    className?: string;
}