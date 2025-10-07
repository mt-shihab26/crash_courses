"use client";

import { useRef, useState } from "react";

type TTranscript = {
    text: string;
    segments?: { start: number; end: number; test: string }[];
    language: string;
    durationInSeconds: number;
};

const AudioPage = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [transcript, setTranscript] = useState<TTranscript | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const submit = async () => {
        if (!selectedFile) {
            setError("Please select an audio file");
            return;
        }
        try {
            setLoading(true);
            setError(null);

            const formData = new FormData();
            formData.append("audio", selectedFile);

            const response = await fetch("/api/audio-to-text", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Failed to transcribe audio");
            }

            const data = await response.json();
            setTranscript(data);
            setSelectedFile(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
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
                {transcript && (
                    <div>
                        <h3 className="font-semibold mb-2">Transcript:</h3>
                        <p className="whitespace-pre-wrap">{transcript.text}</p>
                    </div>
                )}
                {loading && <div>Transcribing audio...</div>}
                {error && <div className="text-red-500">{error}</div>}
            </div>
            <form
                className="fixed flex justify-between bottom-0 w-full max-w-md mx-auto left-0 right-0 p-4 bg-zinc-50"
                onSubmit={(e) => {
                    e.preventDefault();
                    submit();
                }}
            >
                <div className="flex gap-3">
                    <div className="flex items-center gap-2">
                        <label
                            htmlFor="audio-upload"
                            className="flex-1 p-2 border border-zinc-300"
                        >
                            {selectedFile ? "Change File" : "Select audio file"}
                        </label>
                        <input
                            id="audio-upload"
                            type="file"
                            className="hidden"
                            onChange={(e) => {
                                setSelectedFile(e.target.files?.[0] || null);
                                setTranscript(null);
                                setError(null);
                            }}
                            multiple={true}
                            ref={fileInputRef}
                            accept="audio/*"
                        />
                    </div>
                </div>
                <div className="flex gap-2">
                    <button
                        disabled={loading}
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded transition"
                    >
                        Transcribe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AudioPage;
