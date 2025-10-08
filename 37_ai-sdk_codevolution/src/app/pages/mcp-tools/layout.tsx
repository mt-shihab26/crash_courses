import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
    title: "MCP Tools",
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return <>{children}</>;
};

export default Layout;
