import { z, defineCollection } from "astro:content";

const posts = defineCollection({
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        date: z.date(),
        author: z.enum(["Jane Doe", "John Doe"]),
    }),
});

export const collections = {
    posts,
};
