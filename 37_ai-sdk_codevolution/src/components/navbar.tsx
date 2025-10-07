"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navigationItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Chatbot",
        href: "/chatbot",
        description: "Interactive chatbot interface",
    },
    {
        title: "Chat & Messaging",
        items: [
            {
                title: "Chat System",
                href: "/pages/chat-system",
                description: "Advanced chat system with features",
            },
            {
                title: "File Upload Chat",
                href: "/chatbot/upload",
                description: "Chat with file upload capabilities",
            },
        ],
    },
    {
        title: "Text Processing",
        items: [
            {
                title: "Text Generation",
                href: "/pages/text-generation",
                description: "Generate text using AI models",
            },
            {
                title: "Text Stream",
                href: "/pages/text-stream",
                description: "Streaming text generation",
            },
            {
                title: "Structured Output",
                href: "/pages/structured-output",
                description: "Generate structured data output",
            },
            {
                title: "Structured Output Array",
                href: "/pages/structured-output-array",
                description: "Generate arrays of structured data",
            },
            {
                title: "Structured Output Enum",
                href: "/pages/structured-output-enum",
                description: "Generate enum-based structured output",
            },
        ],
    },
    {
        title: "Media Processing",
        items: [
            {
                title: "Image to Text",
                href: "/pages/image-to-text",
                description: "Extract text from images",
            },
            {
                title: "PDF to Text",
                href: "/pages/pdf-to-text",
                description: "Extract text from PDF files",
            },
            {
                title: "Text to Image",
                href: "/pages/text-to-image",
                description: "Generate images from text descriptions",
            },
            {
                title: "Audio to Text",
                href: "/pages/audio-to-text",
                description: "Convert audio to text transcription",
            },
            {
                title: "Text to Audio",
                href: "/pages/text-to-audio",
                description: "Convert text to speech audio",
            },
        ],
    },
    {
        title: "Tools & Utilities",
        items: [
            {
                title: "Multi-steps Tools",
                href: "/pages/multi-steps-tools",
                description: "Complex multi-step tool operations",
            },
            {
                title: "Web Search Tool",
                href: "/pages/web-search-tool",
                description: "Search the web with AI assistance",
            },
            {
                title: "Text to Image Tool",
                href: "/pages/text-to-image-tool",
                description: "Advanced text to image generation tool",
            },
        ],
    },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center justify-center">
                <NavigationMenu>
                    <NavigationMenuList>
                        {navigationItems.map((item) => (
                            <NavigationMenuItem key={item.title}>
                                {item.items ? (
                                    <>
                                        <NavigationMenuTrigger>
                                            {item.title}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                                {item.items.map((subItem) => (
                                                    <ListItem
                                                        key={subItem.title}
                                                        title={subItem.title}
                                                        href={subItem.href}
                                                        className={cn(
                                                            pathname ===
                                                                subItem.href &&
                                                                "bg-accent text-accent-foreground",
                                                        )}
                                                    >
                                                        {subItem.description}
                                                    </ListItem>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </>
                                ) : (
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                navigationMenuTriggerStyle(),
                                                pathname === item.href &&
                                                    "bg-accent text-accent-foreground",
                                            )}
                                        >
                                            {item.title}
                                        </Link>
                                    </NavigationMenuLink>
                                )}
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    );
}

const ListItem = ({
    className,
    title,
    children,
    href,
    ...props
}: {
    className?: string;
    title: string;
    children: React.ReactNode;
    href: string;
    [key: string]: any;
}) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className,
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
};
