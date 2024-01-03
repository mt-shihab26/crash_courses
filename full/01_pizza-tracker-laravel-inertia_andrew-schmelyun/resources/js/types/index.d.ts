export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type TPizza = {
    id: number;
    user_id: number;
    size: string;
    crust: string;
    toppings: string[];
    status: string;
    created_at: string;
    updated_at: string;
    chef: string;
};

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};

export type TProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
