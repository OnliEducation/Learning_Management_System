import { IInstructor } from "../../../5_entities/Instructor/model/types";

export interface ITopInstructors {
    items: IInstructor[];
    className?: string;
}