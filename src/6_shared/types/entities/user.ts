import { IPurchase } from "./purchase";

export interface IUser {
    /** The unique identifier of the user entity. */
    readonly id: string;
    /** The email address of the user. */
    readonly email: string;
    /** The name of the user. */
    readonly name: string;
    /** Images of the user. */
    readonly cover: string;
    /** The user's headline, typically a short description or title. */
    readonly headline: string;
    /** A more detailed description of the user. */
    readonly description: string;
    /** A list of social media links associated with the user. */
    readonly socials: string[];
    /** A list of course identifiers that the user is associated with. */
    readonly courses: Array<string>;                                                 // courses: Array<Course['id']>
    /** A list of review identifiers written by the user. */
    readonly reviews: Array<string>;                                                 // reviews: Array<Review['id']>
    /** A list of purchase identifiers made by the user. */
    readonly purchases: Array<IPurchase['id']>;
}