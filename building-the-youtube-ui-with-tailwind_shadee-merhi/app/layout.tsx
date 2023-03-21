import SideNavigation from "@/components/SideNavigation";
import TopNavigation from "@/components/TopNavigation";
import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
    title: "Youtube",
    description: "Youtube home page clone with tailwind css",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
            <body className="bg-zinc-900 text-zinc-200">
                <div className="flex h-screen w-screen flex-col">
                    <TopNavigation />
                    <div className="flex flex-1 border-2 border-blue-500">
                        <SideNavigation />
                        <div className="border-2 border-lime-300">
                            {children}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
};

export default RootLayout;
