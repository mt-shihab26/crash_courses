"use client";

import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignOutButton,
    SignUpButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(href);
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 mx-auto">
                <div className="flex w-full items-center gap-8">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            AISDK
                        </div>
                    </Link>

                    <div className="flex w-full justify-between items-center">
                        <div className="hidden md:flex gap-1 items-center">
                            {navigationLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "px-3 py-2 text-sm font-medium rounded-md transition-all duration-200",
                                        "hover:bg-accent hover:text-accent-foreground",
                                        isActive(link.href)
                                            ? "bg-accent text-accent-foreground shadow-sm"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="hidden md:flex gap-1 items-center">
                            {secondaryLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "px-3 py-2 text-sm font-medium rounded-md transition-all duration-200",
                                        "hover:bg-accent hover:text-accent-foreground",
                                        isActive(link.href)
                                            ? "bg-accent text-accent-foreground shadow-sm"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex gap-2 items-center">
                    <SignedOut>
                        <SignInButton mode="modal">
                            <Button variant="ghost" size="sm">
                                Sign In
                            </Button>
                        </SignInButton>
                        <SignUpButton mode="modal">
                            <Button size="sm">Sign Up</Button>
                        </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                        <SignOutButton>
                            <Button variant="outline" size="sm">
                                Sign Out
                            </Button>
                        </SignOutButton>
                    </SignedIn>
                </div>
            </div>
        </nav>
    );
};
