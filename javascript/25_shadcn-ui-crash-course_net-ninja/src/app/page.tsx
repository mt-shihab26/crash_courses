import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { promises as fs } from "fs";

type TRecipe = {
    id: string;
    title: string;
    image: string;
    time: number;
    description: string;
    vegan: boolean;
};

const Home = async () => {
    const file = await fs.readFile(process.cwd() + "/db.json", "utf8");
    const recipes = JSON.parse(file)?.recipes as TRecipe[];

    console.log(recipes);

    return (
        <main className="grid grid-cols-3 gap-8">
            {recipes.map((recipe, i) => (
                <Card key={i} className="flex flex-col justify-between">
                    <CardHeader>
                        <CardTitle>{recipe.title}</CardTitle>
                        <CardDescription>
                            {recipe.time} mins to cook
                        </CardDescription>
                    </CardHeader>
                    <CardContent>{recipe.description}</CardContent>
                    <CardFooter className="flex justify-between">
                        <button>View Recipe</button>
                        {recipe.vegan && <div>Vegan!</div>}
                    </CardFooter>
                </Card>
            ))}
        </main>
    );
};
export default Home;
