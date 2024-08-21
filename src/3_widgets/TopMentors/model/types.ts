import { IUserCardCompact } from "../../../5_entities/User";

export interface ITopMentors {
    items: IUserCardCompact[];
    className?: string;
}