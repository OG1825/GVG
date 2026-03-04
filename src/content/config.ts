import { defineCollection, z } from 'astro:content';

const bountiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    reward: z.number(),
    sponsor: z.string(),
    difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']),
    status: z.enum(['Open', 'In Progress', 'Shipped']),
    deadline: z.string(),
    updatedAt: z.string(),
    tags: z.array(z.string()),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
  }),
});

export const collections = {
  bounties: bountiesCollection,
};
