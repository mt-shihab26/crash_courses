"use client";

import { useState } from "react";

const AudioGenerationPage = () => {
    const [text, setText] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);

    const submit = async () => {
        try {
            setLoading(true);
            setError(null);
            setText("");

            const response = await fetch("/api/text-to-audio", {
                method: "POST",
                body: JSON.stringify({ text }),
            });

            if (!response.ok) {
                throw new Error("Failed to generate audio");
            }

            const blob = await response.blob();

            if (audioUrl) {
                URL.revokeObjectURL(audioUrl);
            }

            const newAudioUrl = URL.createObjectURL(blob);
            setAudioUrl(newAudioUrl);

            const audio = new Audio(newAudioUrl);
            audio.play();
        } catch (e: any) {
            console.error("Error: ", e);
            setError(e?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex relative flex-col w-full max-w-md py-24 mx-auto content-stretch">
            {loading && <div>Generating audio...</div>}
            {error && <div className="text-red-500">{error}</div>}
            {audioUrl && (
                <div className="mb-4 p-4 border border-zinc-300 rounded">
                    <audio controls src={audioUrl} className="w-full mb-2">
                        Your browser does not support the audio element.
                    </audio>
                    <button
                        onClick={() => {
                            const audio = new Audio(audioUrl);
                            audio.play();
                        }}
                        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Replay
                    </button>
                </div>
            )}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    submit();
                }}
                className="fixed button-0 w-full max-w-md mx-auto left-0 right-0 p-4 bg-zinc-50"
            >
                <div className="flex gap-2">
                    <input
                        placeholder="Enter text to convert to speech"
                        className="flex-1 p-2 border border-zinc-300"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        disabled={loading}
                    />
                    <button type="submit" disabled={loading || !text}>
                        Generate
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AudioGenerationPage;
