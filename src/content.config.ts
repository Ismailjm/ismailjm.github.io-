import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    stack: z.array(z.string()),
    links: z.object({
      github: z.string().optional(),
      demo: z.string().optional(),
    }).optional(),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    type: z.enum(['journal', 'conference', 'workshop', 'preprint', 'poster']),
    pdf: z.string().optional(),
    doi: z.string().optional(),
    arxiv: z.string().optional(),
    bibtex: z.string().optional(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    role: z.string(),
    location: z.string(),
    type: z.enum(['hackathon', 'workshop', 'conference', 'talk', 'community']),
    result: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    summary: z.string(),
    lang: z.enum(['en', 'fr', 'ar']).default('en'),
  }),
});

export const collections = { projects, publications, events, blog };
