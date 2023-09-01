import { Handler, Router } from "express";
import log from "../../core/log";
import validate from "../../middlewares/validate";
import * as userService from "./user_repository";
import { userResponse } from "./user_response";
import { createUserSchema } from "./user_validation";

const create: Handler = async (req, res) => {
    try {
        const user = await userService.save(req.body);
        return res.status(201).json(userResponse(user));
    } catch (error: any) {
        log.error(error);
        return res.status(409).send(error.message);
    }
};

const userRouter = Router();

userRouter.post(`/`, [validate(createUserSchema)], create);

export default userRouter;
