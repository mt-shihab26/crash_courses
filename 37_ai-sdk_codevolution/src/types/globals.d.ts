export type TRoles = "admin" | "user";

declare global {
    interface CustomJwtSessionClaims {
        metadata: {
            role?: TRoles;
        };
    }
}
