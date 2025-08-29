declare module "bun" {
    interface Env {
        OPENAI_API_KEY: string;
    }
}

export const OPENAI_API_KEY = Bun.env.OPENAI_API_KEY;
