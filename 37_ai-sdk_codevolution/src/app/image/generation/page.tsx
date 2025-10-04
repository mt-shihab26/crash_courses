"use client";

import Image from "next/image";
import { useState } from "react";

const GenerateImagePage = () => {
    const [prompt, setPrompt] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [image, setImage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const submit = async () => {
        try {
            setLoading(true);
            setImage(null);
            setError(null);

            const response = await fetch("/api/image/generation", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt }),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            setImage(`data:image/png;base64,${data}`);

            setPrompt("");
        } catch (e: any) {
            console.log("Error: ", e);
            setError(e?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col w-full max-w-md mx-auto h-[calc(100vh-6rem)]">
            <div className="flex-1 overflow-y-auto py-4 px-4 pb-20">
                {image && (
                    <Image
                        src={image}
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                        alt="Generated Image"
                        width={1024}
                        height={1024}
                    />
                )}
                {error && <div className="text-red-500 mb-4">{error}</div>}
                {loading && <div>Loading...</div>}
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
                        placeholder="Describe the image"
                        className="flex-1 p-2 border border-zinc-300"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                    />
                    <button
                        disabled={loading}
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded transition"
                    >
                        Generate
                    </button>
                </div>
            </form>
        </div>
    );
};

export default GenerateImagePage;
