"use client";

import { useChat } from "@ai-sdk/react";
import { useRef, useState } from "react";

import { DefaultChatTransport } from "ai";

import Image from "next/image";

const ImagePage = () => {
    const [text, setText] = useState<string>("");
    const [files, setFiles] = useState<FileList | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const { messages, error, sendMessage, status, stop } = useChat({
        transport: new DefaultChatTransport({ api: "/api/image" }),
    });

    const submit = async () => {
        sendMessage({ text, files: files || undefined });
        setText("");
        setFiles(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <div className="flex flex-col w-full max-w-md mx-auto h-[calc(100vh-6rem)]">
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
                                case "file":
                                    if (part.mediaType.startsWith("image/")) {
                                        return (
                                            <Image
                                                key={`${message.id}-${index}`}
                                                src={part.url}
                                                alt={
                                                    part.filename ||
                                                    `attachment-${index}`
                                                }
                                                width={500}
                                                height={500}
                                            />
                                        );
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
                <div className="flex gap-3">
                    <div className="flex items-center gap-2">
                        <label
                            htmlFor="file-upload"
                            className="flex items-center gap-2 text-sm text-zinc-600"
                        >
                            {files?.length
                                ? `${files.length} file(s)`
                                : "Attach files"}
                        </label>
                        <input
                            id="file-upload"
                            type="file"
                            className="hidden"
                            onChange={(e) => setFiles(e.target.files)}
                            multiple={true}
                            ref={fileInputRef}
                        />
                    </div>
                </div>
                <div className="flex gap-2">
                    <input
                        placeholder="How can I help you?"
                        className="flex-1 p-2 border border-zinc-300"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
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

export default ImagePage;
