import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignOutButton,
    SignUpButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";

import Link from "next/link";

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
                            <Link
                                href="/"
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="/chatbot"
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                Chatbot
                            </Link>
                            <Link
                                href="/completion"
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                Completion
                            </Link>
                            <Link
                                href="/stream"
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                Stream
                            </Link>
                        </div>
                        <div className="flex gap-4 items-center">
                            <Link
                                href="/upload"
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                Upload
                            </Link>
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
