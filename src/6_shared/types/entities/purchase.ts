import { IUser } from "./user";

export interface IPurchase {
    /** The unique identifier of the purchase entity. */
    readonly id: string;
    /** The unique identifier of the user associated with the purchase. */
    readonly user: IUser['id'];
    /** The list of course identifiers included in the purchase. */
    readonly courses: Array<string>; // Array<Course['id']
    /** The date when the purchase was created. */
    readonly createdAt: Date;
}