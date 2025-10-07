"use client";

import type { TMessage } from "@/app/api/web-search/route";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";

import { DefaultChatTransport } from "ai";

const WebSearchPage = () => {
    const [prompt, setPrompt] = useState<string>("");

    const { messages, error, sendMessage, status, stop } = useChat<TMessage>({
        transport: new DefaultChatTransport({ api: "/api/web-search" }),
    });

    const submit = async () => {
        sendMessage({ text: prompt });
        setPrompt("");
    };

    return (
        <div className="flex flex-col w-full max-w-xl mx-auto h-[calc(100vh-6rem)] bg-gray-50 min-h-screen">
            <div className="flex-1 overflow-y-auto py-4 px-4 pb-20">
                {messages.map((message) => (
                    <div key={message.id} className="mb-4">
                        <div className="font-semibold">
                            {message.role === "user" ? "You" : "AI"}:{" "}
                        </div>
                        {message.parts.map((part, index) => {
                            const sourcesParts = message.parts.filter(
                                (p) => p.type === "source-url",
                            );

                            switch (part.type) {
                                case "text":
                                    return (
                                        <div
                                            key={`${message.id}-${index}`}
                                            className="whitespace-pre-wrap"
                                        >
                                            {part.text}
                                        </div>
                                    );
                                case "tool-web_search_preview":
                                    switch (part.state) {
                                        case "input-streaming":
                                            return (
                                                <div
                                                    key={`${message.id}-web-search-${index}`}
                                                    className="border border-blue-300 p-3 rounded-lg mt-2 bg-blue-50"
                                                >
                                                    <div className="text-sm text-blue-600 font-medium mb-2">
                                                        Preparing search...
                                                    </div>
                                                </div>
                                            );
                                        case "input-available":
                                            return (
                                                <div
                                                    key={`${message.id}-web-search-${index}`}
                                                    className="border border-yellow-300 p-3 rounded-lg mt-2 bg-yellow-50"
                                                >
                                                    <div className="text-sm text-yellow-700 font-medium">
                                                        Searching the web
                                                    </div>
                                                </div>
                                            );
                                        case "output-available":
                                            return (
                                                <div
                                                    key={`${message.id}-web-search-${index}`}
                                                    className="border border-green-300 p-3 rounded-lg mt-2 bg-green-50"
                                                >
                                                    <div className="text-sm text-green-700 font-semibold mb-2">
                                                        Web Search Complete
                                                    </div>
                                                    {message.role ===
                                                        "assistant" &&
                                                        sourcesParts.length >
                                                            0 && (
                                                            <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                                                                <div className="mb-3">
                                                                    <div className="flex items-center gap-2 mb-3">
                                                                        <svg
                                                                            className="w-4 h-4 text-gray-600"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            viewBox="0 0 24 24"
                                                                        >
                                                                            <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                strokeWidth={
                                                                                    2
                                                                                }
                                                                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                                                            />
                                                                        </svg>
                                                                        <span className="text-sm font-semibold text-gray-700">
                                                                            Sources
                                                                            (
                                                                            {
                                                                                sourcesParts.length
                                                                            }
                                                                            )
                                                                        </span>
                                                                    </div>
                                                                    <div className="grid gap-2">
                                                                        {sourcesParts.map(
                                                                            (
                                                                                source,
                                                                                i,
                                                                            ) => (
                                                                                <a
                                                                                    key={`source-${i}`}
                                                                                    href={
                                                                                        source.url
                                                                                    }
                                                                                    target="_blank"
                                                                                    rel="noopener noreferrer"
                                                                                    className="flex items-center gap-2 p-2 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors duration-200 border border-transparent hover:border-blue-200"
                                                                                >
                                                                                    <svg
                                                                                        className="w-3 h-3 flex-shrink-0"
                                                                                        fill="none"
                                                                                        stroke="currentColor"
                                                                                        viewBox="0 0 24 24"
                                                                                    >
                                                                                        <path
                                                                                            strokeLinecap="round"
                                                                                            strokeLinejoin="round"
                                                                                            strokeWidth={
                                                                                                2
                                                                                            }
                                                                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                                                        />
                                                                                    </svg>
                                                                                    <span className="truncate">
                                                                                        {source?.title ||
                                                                                            source.url}
                                                                                    </span>
                                                                                </a>
                                                                            ),
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                </div>
                                            );
                                        case "output-error":
                                            return (
                                                <div
                                                    key={`${message.id}-web-search-${index}`}
                                                    className="border border-red-300 p-3 rounded-lg mt-2 bg-red-50"
                                                >
                                                    <div className="text-sm text-red-700 font-medium mb-1">
                                                        Web Search Error
                                                    </div>
                                                    <div className="text-sm text-red-600">
                                                        {part.errorText}
                                                    </div>
                                                </div>
                                            );
                                        default:
                                            return null;
                                    }
                                default:
                                    return null;
                            }
                        })}
                    </div>
                ))}
                {error && (
                    <div className="text-red-500 mb-4">{error.message}</div>
                )}
                {status !== "ready" && <div>Loading...</div>}
            </div>
            <form
                className="fixed bottom-0 w-full max-w-md mx-auto left-0 right-0 p-4 bg-zinc-50"
                onSubmit={(e) => {
                    e.preventDefault();
                    submit();
                }}
            >
                <div className="flex gap-2">
                    <input
                        placeholder="How can I help you?"
                        className="flex-1 p-2 border border-zinc-300"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                    />
                    {status !== "ready" ? (
                        <button
                            type="button"
                            onClick={stop}
                            className="bg-red-500 text-white px-4 py-2 rounded transition"
                        >
                            Stop
                        </button>
                    ) : (
                        <button
                            disabled={status !== "ready"}
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded transition"
                        >
                            Send
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default WebSearchPage;
