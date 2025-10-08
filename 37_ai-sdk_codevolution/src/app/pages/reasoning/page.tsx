"use client";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";

import { DefaultChatTransport } from "ai";

const ReasoningPage = () => {
    const [prompt, setPrompt] = useState<string>("");

    const { messages, error, sendMessage, status, stop } = useChat({
        transport: new DefaultChatTransport({ api: "/api/reasoning" }),
    });

    const submit = async () => {
        sendMessage({ text: prompt });
        setPrompt("");
    };

    return (
        <div className="flex flex-col w-full max-w-md mx-auto h-[calc(100vh-6rem)]">
            <div className="flex-1 overflow-y-auto py-4 px-4 pb-20">
                {messages.map(message => (
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
                                case "reasoning":
                                    return (
                                        <div
                                            key={`${message.id}-${index}`}
                                            className="mt-2 p-3 bg-amber-50 border-l-4 border-amber-400 rounded-r text-sm text-gray-700 italic whitespace-pre-wrap"
                                        >
                                            <div className="font-semibold text-amber-800 mb-1">
                                                Reasoning:
                                            </div>
                                            {part.text}
                                        </div>
                                    );
                                default:
                                    return null;
                            }
                        })}
                    </div>
                ))}
                {error && <div className="text-red-500 mb-4">{error.message}</div>}
                {status !== "ready" && <div>Loading...</div>}
            </div>
            <form
                className="fixed bottom-0 w-full max-w-md mx-auto left-0 right-0 p-4 bg-zinc-50"
                onSubmit={e => {
                    e.preventDefault();
                    submit();
                }}
            >
                <div className="flex gap-2">
                    <input
                        placeholder="How can I help you?"
                        className="flex-1 p-2 border border-zinc-300"
                        value={prompt}
                        onChange={e => setPrompt(e.target.value)}
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

export default ReasoningPage;
