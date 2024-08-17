import { Error, ISession, Role, Status } from "../../../6_shared/types";

interface ISessionState {
    /** Data of the current user. */
    user: ISession | null;
    /** Indicator of the data loading state. */
    status: Status;
    /** The error message, if any, encountered during data processing. */
    error: Error;
    /** The role assigned to the user, defining their access level or permissions in the system. */
    role: Role,
}

interface ISessionLogin {
    email: string;
    password: string;
}

interface ISessionSignUp {
    name: string,
    email: string;
    password: string;
}

export type {
    ISession,
    ISessionState,
    ISessionLogin,
    ISessionSignUp
}