import { Handler, Router } from "express";

export const health: Handler = (req, res) => {
    const currentDate = new Date();

    const formatter = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
    });

    const formattedDate = formatter.format(currentDate);

    res.status(200).send(formattedDate);
};

const rootRouter = Router();

rootRouter.get("/health", health);

export default rootRouter;
