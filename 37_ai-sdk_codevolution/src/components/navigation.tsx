import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignOutButton,
    SignUpButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";

import Link from "next/link";

const navigationLinks = [
    { href: "/", name: "Home" },
    { href: "/chatbot", name: "Chatbot" },
    { href: "/completion", name: "Completion" },
    { href: "/stream", name: "Stream" },
    { href: "/chat", name: "Chat" },
    { href: "/structured", name: "Structured" },
    { href: "/structured/array", name: "Structured Array" },
    { href: "/structured/enum", name: "Structured Enum" },
    { href: "/image", name: "Image" },
];

const secondaryLinks = [{ href: "/chatbot/upload", name: "Upload" }];

export const Navigation = () => {
    return (
        <nav className="border-b border-foreground/10">
            <div className="flex container h-16 gap-6 items-center justify-between px-4 mx-auto">
                <div className="flex w-full items-center gap-6">
                    <Link href="/" className="text-xl font-semibold">
                        <div className="flex w-full">AISDK</div>
                    </Link>
                    <div className="flex w-full justify-between items-center">
                        <div className="flex gap-4 items-center">
                            {navigationLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className="flex gap-4 items-center">
                            {secondaryLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <SignedOut>
                        <SignInButton mode="modal">
                            <Button variant="ghost">Sign In</Button>
                        </SignInButton>
                        <SignUpButton mode="modal">
                            <Button>Sign Up</Button>
                        </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                        <SignOutButton>
                            <Button variant="outline">Sign Out</Button>
                        </SignOutButton>
                    </SignedIn>
                </div>
            </div>
        </nav>
    );
};
