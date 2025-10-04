import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Structured Array",
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return <>{children}</>;
};

export default Layout;
