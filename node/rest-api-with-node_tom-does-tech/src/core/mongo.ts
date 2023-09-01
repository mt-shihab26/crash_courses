import mongoose from "mongoose";
import { MONGO_URI } from "./env";
import log from "./log";

const mongo = async () => {
    try {
        await mongoose.connect(MONGO_URI, {});
        log.info(`Connected to db: ${MONGO_URI}`);
    } catch (error) {
        log.error(`Could not connect to db: ${MONGO_URI}`);
        process.exit(1);
    }
};

export default mongo;
