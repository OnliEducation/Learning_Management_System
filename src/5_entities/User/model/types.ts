import { Error, Status } from "../../../6_shared/types/stateTypes";

interface IPersonalData {
    firstName: string,
    lastName: string,
    userName: string,
    description: string,
    language: string,
}

interface IRegisterData {
    firstName: IPersonalData['firstName'],
    lastName: IPersonalData['lastName'],
    userName: IPersonalData['userName'],
}

interface IAvatar {
    image: string,
    imageTitle: string,
}

interface ILinks {
    website: string,
    twitter: string,
    linkedin: string,
    youtube: string,
    facebook: string,
}

interface IProfileUser {
    personalData: IPersonalData,
    avatar: IAvatar,
    links: ILinks,
}

interface IUserState {
    profile: IProfileUser,
    courses: string[],
    mentors: string[],
    reviews: string[],   
    status: Status,
    error: Error, 
}

type ThunkApiConfig = {
    state: RootState;
    rejectValue: string;
};

export type {
    IUserState,
    IRegisterData,
    ThunkApiConfig,
}