import { Error, IUser, Status } from "../../../6_shared/types";

interface IUserCardCompact {
    id: IUser['id'];
    name: IUser['name'];
    cover: IUser['cover'];
    headline: IUser['headline'];
}

interface IUserState {
    /** A list of users. */
    readonly users: IUser[] | null;
    /** Indicator of the data loading state. */
    readonly status: Status;
    /** The error message, if any, encountered during data processing. */
    readonly error: Error;
}

export type {
    IUserCardCompact,
    IUserState,
}