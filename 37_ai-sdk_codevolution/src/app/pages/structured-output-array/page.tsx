"use client";

import { experimental_useObject as useObject } from "@ai-sdk/react";
import { useState } from "react";
import { pokemonsSchema } from "@/app/api/structured-ouput-array/schema";

const StructuredPage = () => {
    const [type, setType] = useState<string>("");

    const { submit, error, isLoading, stop, object } = useObject({
        api: "/api/structured-ouput-array",
        schema: pokemonsSchema,
    });

    return (
        <div className="flex flex-col w-full max-w-xl py-24 mx-auto content-stretch">
            {object && (
                <div className="space-y-6 px-4">
                    <h2 className="text-2xl font-bold">Pokemon List</h2>
                    {object.map((pokemon, index) => (
                        <div
                            key={`${pokemon?.name || ""}-${index}`}
                            className="bg-zinc-50 p-4 rounded-lg"
                        >
                            <h3 className="text-xl font-semibold mb-2">
                                {pokemon?.name}
                            </h3>
                            {pokemon?.abilities && (
                                <div>
                                    <h4 className="text-lg font-medium mb-2">
                                        Abilities:
                                    </h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        {pokemon.abilities.map(
                                            (ability, abilityIndex) => (
                                                <li
                                                    key={`${pokemon?.name || ""}-${index}-${abilityIndex}`}
                                                    className="text-zinc-600"
                                                >
                                                    {ability}
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
            {error && <div className="text-red-500 mb-4">{error.message}</div>}
            {isLoading && <div>Loading...</div>}
            <form
                className="fixed bottom-0 w-full max-w-md mx-auto left-0 right-0 p-4 bg-zinc-50"
                onSubmit={(e) => {
                    e.preventDefault();
                    submit({ type });
                    setType("");
                }}
            >
                <div className="flex gap-2">
                    <input
                        placeholder="Write the type of pokemon?"
                        className="flex-1 p-2 border border-zinc-300"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                    {isLoading ? (
                        <button
                            type="button"
                            onClick={stop}
                            className="bg-red-500 text-white px-4 py-2 rounded transition"
                        >
                            Stop
                        </button>
                    ) : (
                        <button
                            disabled={isLoading}
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

export default StructuredPage;
