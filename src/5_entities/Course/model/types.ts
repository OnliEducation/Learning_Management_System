import { Error, ICourse, Status } from "../../../6_shared/types";
interface ICourseCard {
   readonly id: string;
   readonly cover: string;
   readonly title: string;
   readonly author: string;      
   readonly price: number;
}

interface CourseState {
   courses: ICourse[] | null,
   status: Status,
   error: Error,
}

export type {
   ICourseCard,
   CourseState,
}