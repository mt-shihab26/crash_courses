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
