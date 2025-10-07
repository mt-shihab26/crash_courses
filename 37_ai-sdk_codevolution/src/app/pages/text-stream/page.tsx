"use client";

import { useCompletion } from "@ai-sdk/react";

const StreamPage = () => {
    const {
        input,
        setInput,
        handleInputChange,
        handleSubmit,
        error,
        isLoading,
        completion,
        stop,
    } = useCompletion({ api: "/api/stream" });

    return (
        <div className="flex flex-col w-full max-w-md py-24 mx-auto content-stretch">
            {error && <div className="text-red-500 mb-4">{error.message}</div>}
            {completion && (
                <div className="whitespace-pre-wrap flex-1 overflow-auto">
                    {completion}
                </div>
            )}
            {isLoading && <div>Loading...</div>}
            <form
                className="fixed bottom-0 w-full max-w-md mx-auto left-0 right-0 p-4 bg-zinc-50"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                    setInput("");
                }}
            >
                <div className="flex gap-2">
                    <input
                        placeholder="How can I help you?"
                        className="flex-1 p-2 border border-zinc-300"
                        value={input}
                        onChange={(e) => handleInputChange(e)}
                    />
                    {isLoading && (
                        <button
                            onClick={stop}
                            className="bg-red-500 text-white px-4 py-2 rounded transition"
                        >
                            Stop
                        </button>
                    )}
                    <button
                        disabled={isLoading}
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded transition"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default StreamPage;
