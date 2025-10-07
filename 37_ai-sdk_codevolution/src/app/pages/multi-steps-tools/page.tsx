"use client";

import type { TMessage } from "@/app/api/multi-steps-tools/route";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";

import { DefaultChatTransport } from "ai";
import { WeatherCard } from "@/components/weather-card";

const ToolsPage = () => {
    const [prompt, setPrompt] = useState<string>("");

    const { messages, error, sendMessage, status, stop } = useChat<TMessage>({
        transport: new DefaultChatTransport({ api: "/api/multi-steps-tools" }),
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
                                case "tool-getLocation":
                                    switch (part.state) {
                                        case "input-streaming":
                                            return (
                                                <div
                                                    key={`${message.id}-get-location-${index}`}
                                                    className="border border-zinc-700 p-2 rounded mt-1 bg-zinc-800/50"
                                                >
                                                    <div className="text-sm text-zinc-500">
                                                        Receiving location
                                                        request...
                                                    </div>
                                                    <pre className="text-sm text-zinc-600 mt-1">
                                                        {JSON.stringify(
                                                            part.input,
                                                            null,
                                                            2,
                                                        )}
                                                    </pre>
                                                </div>
                                            );
                                        case "input-available":
                                            return (
                                                <div
                                                    key={`${message.id}-get-location-${index}`}
                                                    className="border border-zinc-700 p-2 rounded mt-1 bg-zinc-800/50"
                                                >
                                                    <div className="text-sm text-zinc-500">
                                                        Getting location for{" "}
                                                        {part.input.name}...
                                                    </div>
                                                </div>
                                            );
                                        case "output-available":
                                            return (
                                                <div
                                                    key={`${message.id}-get-location-${index}`}
                                                    className="border border-gray-300 p-2 rounded mt-1 bg-gray-100"
                                                >
                                                    <div className="text-sm text-gray-700 font-semibold">
                                                        Location
                                                    </div>
                                                    <div className="text-sm text-black">
                                                        <div>{part.output}</div>
                                                    </div>
                                                </div>
                                            );
                                        case "output-error":
                                            return (
                                                <div
                                                    key={`${message.id}-get-location-${index}`}
                                                    className="border border-zinc-700 p-2 rounded mt-1 bg-red-900/20"
                                                >
                                                    <div className="text-sm text-red-400">
                                                        Error: {part.errorText}
                                                    </div>
                                                </div>
                                            );
                                        default:
                                            return null;
                                    }
                                case "tool-getWeather":
                                    switch (part.state) {
                                        case "input-streaming":
                                            return (
                                                <div
                                                    key={`${message.id}-get-weather-${index}`}
                                                    className="border border-zinc-700 p-2 rounded mt-1 bg-zinc-800/50"
                                                >
                                                    <div className="text-sm text-zinc-500">
                                                        Receiving weather
                                                        request...
                                                    </div>
                                                    <pre className="text-sm text-zinc-600 mt-1">
                                                        {JSON.stringify(
                                                            part.input,
                                                            null,
                                                            2,
                                                        )}
                                                    </pre>
                                                </div>
                                            );
                                        case "input-available":
                                            return (
                                                <div
                                                    key={`${message.id}-get-weather-${index}`}
                                                    className="border border-zinc-700 p-2 rounded mt-1 bg-zinc-800/50"
                                                >
                                                    <div className="text-sm text-zinc-500">
                                                        Getting weather for{" "}
                                                        {part.input.city}...
                                                    </div>
                                                </div>
                                            );
                                        case "output-available":
                                            return (
                                                <div
                                                    key={`${message.id}-get-weather-${index}`}
                                                >
                                                    <WeatherCard
                                                        weather={part.output}
                                                    />
                                                </div>
                                            );
                                        case "output-error":
                                            return (
                                                <div
                                                    key={`${message.id}-get-weather-${index}`}
                                                    className="border border-zinc-700 p-2 rounded mt-1 bg-red-900/20"
                                                >
                                                    <div className="text-sm text-red-400">
                                                        Error: {part.errorText}
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

export default ToolsPage;
