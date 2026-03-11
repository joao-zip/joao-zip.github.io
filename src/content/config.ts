import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    period: z.string(),
    description: z.string(),
    categories: z.array(z.string()),
    img: z.string().optional(),
    github: z.string().optional(),
    site: z.string().optional(),
  }),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    period: z.string(),
    role: z.string(),
    company: z.string(),
    type: z.string(),
    technologies: z.array(z.string()),
    description: z.string(),
    github: z.string().optional(),
    site: z.string().optional(),
  }),
});

export const collections = {
  projects,
  experience,
};
