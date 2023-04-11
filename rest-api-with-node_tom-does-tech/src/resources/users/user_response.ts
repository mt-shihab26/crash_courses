import { IUser } from "./user_model";

interface IUserResponse {
    _id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
}

export const userResponse = (user: IUser): IUserResponse => ({
    _id: user._id.toString(),
    name: user.name,
    email: user.email,
    createdAt: user.createdAt?.toString(),
    updatedAt: user.updatedAt?.toString(),
});
