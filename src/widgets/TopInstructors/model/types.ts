import { IInstructor } from "../../../entities/Instructor/model/types";

export interface ITopInstructors {
    items: IInstructor[];
    className?: string;
}