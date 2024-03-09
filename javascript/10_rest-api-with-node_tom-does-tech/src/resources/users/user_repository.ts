import { User } from "./user_model";
import { TCreateUserSchema } from "./user_validation";

export const save = async (data: TCreateUserSchema) => {
    try {
        return await User.create(data);
    } catch (error: any) {
        throw new Error(error);
    }
};
