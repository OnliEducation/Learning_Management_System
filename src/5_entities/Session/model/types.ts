import { UserInfo } from "firebase/auth";
import { Error, Role, Status } from "../../../6_shared/types/stateTypes";

interface IUser {
    email: UserInfo['email'],
    id: UserInfo['uid'],
}

interface ISessionState {
    user: IUser | null;
    status: Status;
    error: Error;
    role: Role,
}

interface IUserInfoLogin {
    email: string;
    password: string;
}

export type {
    ISessionState,
    IUser,
    IUserInfoLogin,
}