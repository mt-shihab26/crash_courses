"use client";

import { useState } from "react";

const EnumPage = () => {
    const [pokemonName, setPokemonName] = useState<string>("");
    const [result, setResult] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setResult(null);

        try {
            const response = await fetch("/api/structured/enum", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ pokemonName }),
            });

            if (!response.ok) {
                throw new Error("Failed to classify Pokemon type");
            }

            const data = await response.json();
            setResult(data.object);
        } catch (err) {
            setError(
                err instanceof Error ? err.message : "Something went wrong",
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col w-full max-w-xl py-24 mx-auto content-stretch">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-4">
                    Pokemon Type Classifier
                </h1>
                <p className="text-gray-600">
                    Enter a Pokemon name to classify its type using AI-generated
                    enum values.
                </p>
            </div>

            {result && (
                <div className="mb-6 p-4 bg-zinc-50 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">
                        Classification Result
                    </h2>
                    <div className="flex items-center gap-2">
                        <span className="text-lg">Pokemon Type:</span>
                        <span
                            className={`px-3 py-1 rounded-full text-white font-medium ${result === "fire" ? "bg-red-500" : result === "water" ? "bg-blue-500" : result === "grass" ? "bg-green-500" : result === "electric" ? "bg-yellow-500" : result === "psychic" ? "bg-purple-500" : "bg-gray-500"}`}
                        >
                            {result}
                        </span>
                    </div>
                </div>
            )}

            {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label
                        htmlFor="pokemon-input"
                        className="block text-sm font-medium mb-2"
                    >
                        Pokemon name:
                    </label>
                    <input
                        id="pokemon-input"
                        type="text"
                        placeholder="Enter Pokemon name (e.g., Pikachu, Charizard)..."
                        className="w-full p-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={pokemonName}
                        onChange={(e) => setPokemonName(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading || !pokemonName.trim()}
                    className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600"
                >
                    {isLoading ? "Classifying..." : "Classify Pokemon Type"}
                </button>
            </form>
        </div>
    );
};

export default EnumPage;
