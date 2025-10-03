"use client";

import { useState } from "react";

const CompletionPage = () => {
    const [prompt, setPrompt] = useState<string>("");
    const [completion, setCompletion] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const submit = async () => {
        try {
            setLoading(true);
            setCompletion("");

            const response = await fetch("/completion", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt }),
            });

            const data = (await response.json()) as {
                text: string;
                error: string;
            };

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            setCompletion(data.text);
            setPrompt("");
        } catch (e: any) {
            console.log("Error: ", e);
            setError(
                e instanceof Error
                    ? e.message
                    : "Something went wrong try again",
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col w-full max-w-md py-24 mx-auto content-stretch">
            {error && <div className="text-red-500 mb-4">{error}</div>}
            {loading && <div>Loading...</div>}
            {!loading && completion && (
                <div className="whitespace-pre-wrap">{completion}</div>
            )}
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
                    <button
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

export default CompletionPage;
