import "dotenv/config";

export const PORT = Number(process.env.PORT);
export const MONGO_URI = String(process.env.MONGO_URI);
export const SALT_ROUNDS = Number(process.env.SALT_ROUNDS);
