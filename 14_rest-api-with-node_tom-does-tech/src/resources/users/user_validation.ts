import { z } from "zod";

const createUserRequestPayload = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
});

export const createUserSchema = z.object({
    body: createUserRequestPayload,
});

export type TCreateUserSchema = z.infer<typeof createUserRequestPayload>;
