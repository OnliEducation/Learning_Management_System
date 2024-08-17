import { UserInfo } from "firebase/auth";

export interface ISession {
    /** The unique identifier of the user entity. */
    id: UserInfo['uid'],
    /** The email address of the user. */
    email?: UserInfo['email'],
    /** The name of the user. */
    name?: UserInfo['displayName'],
}