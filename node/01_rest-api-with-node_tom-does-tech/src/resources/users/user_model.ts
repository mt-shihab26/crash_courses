import { ObjectId, Schema, model } from "mongoose";
import { TCreateUserSchema } from "./user_validation";

export interface IUser extends TCreateUserSchema {
    _id: ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<IUser>(
    {
        email: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        password: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

export const User = model<IUser>("User", userSchema);
