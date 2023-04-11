import { Router } from "express";
import userRouter from "./users/user_handler";
import rootRouter from "./roots/root_handler";

const router = Router();

router.use("/users", userRouter);
router.use("/", rootRouter);

export default router;
