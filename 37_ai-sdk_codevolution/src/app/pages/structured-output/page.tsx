"use client";

import { experimental_useObject as useObject } from "@ai-sdk/react";
import { useState } from "react";
import { recipeSchema } from "@/app/api/structured-ouput/schema";

const StructuredPage = () => {
    const [dish, setDish] = useState<string>("");

    const { submit, error, isLoading, stop, object } = useObject({
        api: "/api/structured-ouput",
        schema: recipeSchema,
    });

    return (
        <div className="flex flex-col w-full max-w-xl py-24 mx-auto content-stretch">
            {object?.recipe && (
                <div className="space-y-6 px-4">
                    <h2 className="text-2xl font-bold">{object.recipe.name}</h2>
                    {object.recipe.ingredients && (
                        <div>
                            <h3 className="text-xl font-semibold mb-4">
                                Ingredients
                            </h3>
                            {object.recipe.ingredients.map(
                                (ingredient, index) => (
                                    <div
                                        key={index}
                                        className="bg-zinc-50 p-4 rounded-lg"
                                    >
                                        <p className="font-medium">
                                            {ingredient?.name}
                                        </p>
                                        <p className="text-zinc-600">
                                            {ingredient?.amount}
                                        </p>
                                    </div>
                                ),
                            )}
                        </div>
                    )}
                    {object.recipe.steps && (
                        <div>
                            <h3 className="text-xl font-semibold mb-4">
                                Steps
                            </h3>
                            <ol className="space-y-4">
                                {object.recipe.steps.map((step, index) => (
                                    <li
                                        key={index}
                                        className="bg-zinc-50 p-4 rounded-lg"
                                    >
                                        <span className="font-medium mr-2">
                                            {index + 1}.{" "}
                                        </span>{" "}
                                        {step}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    )}
                </div>
            )}
            {error && <div className="text-red-500 mb-4">{error.message}</div>}
            {isLoading && <div>Loading...</div>}
            <form
                className="fixed bottom-0 w-full max-w-md mx-auto left-0 right-0 p-4 bg-zinc-50"
                onSubmit={(e) => {
                    e.preventDefault();
                    submit({ dish });
                    setDish("");
                }}
            >
                <div className="flex gap-2">
                    <input
                        placeholder="Write your dish name?"
                        className="flex-1 p-2 border border-zinc-300"
                        value={dish}
                        onChange={(e) => setDish(e.target.value)}
                    />
                    {isLoading ? (
                        <button
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
