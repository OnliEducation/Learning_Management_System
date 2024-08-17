import { Error, IUser, Status } from "../../../6_shared/types";

interface ICurrentUserState {
    /** The current user information, or null if not available. */
    readonly currentUser: IUser | null;
    /** Indicator of the data loading state. */
    readonly status: Status;
    /** The error message, if any, encountered during data processing. */
    readonly error: Error;
}

export type {
    ICurrentUserState,
}