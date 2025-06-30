// Complete code for: src/utils/utils.ts (with debugger)

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from 'next/navigation';
import { articles as articlesData } from '@/resources/content';

// --- TYPE DEFINITIONS ---
export type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

export type Metadata = {
  title: string;
  publishedAt: string;
  summary?: string;
  image?: string;
  images?: string[];
  tag?: string;
  team?: Team[];
  link?: string;
  outputLink?: string;
  techStack?: string[];
};

export type MdxContent = {
  metadata: Metadata;
  slug: string;
  content?: string;
};


// --- MDX READING FUNCTIONS (for your 'Projects' section) ---
function getMDXFiles(dir: string) {
  const absolutePath = path.join(process.cwd(), dir);
  if (!fs.existsSync(absolutePath)) {
    console.warn(`Warning: Directory not found at ${absolutePath}.`);
    return [];
  }
  return fs.readdirSync(absolutePath).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const absolutePath = path.join(process.cwd(), filePath);
  if (!fs.existsSync(absolutePath)) {
    notFound();
  }
  const rawContent = fs.readFileSync(absolutePath, "utf-8");
  const { data, content } = matter(rawContent);
  return { metadata: data as Metadata, content };
}

function getMDXData(dir: string): MdxContent[] {
  const mdxFiles = getMDXFiles(dir);

  // ✅ THIS IS THE DEBUGGING LINE WE ADDED
  console.log(`[Debugger] Checking directory: '${dir}'. Files found:`, mdxFiles);

  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    return {
      metadata,
      slug,
      content,
    };
  });
}


// --- DATA FETCHING FUNCTIONS ---

/**
 * This function returns articles in their original order from content.js
 */
export function getAllArticles(): MdxContent[] {
  const formattedArticles = articlesData.items.map((article: any) => {
    if (!article.publishedAt || !article.slug) {
      return null;
    }
    return {
      slug: article.slug,
      metadata: {
        title: article.title,
        publishedAt: article.publishedAt,
        image: article.image,
        link: article.link,
      },
    };
  }).filter(Boolean) as MdxContent[];

  return formattedArticles;
}

// In src/utils/utils.ts

/**
 * This function reads your projects and now also sorts them by date.
 */
export function getAllProjects(): MdxContent[] {
  const projects = getMDXData("src/app/work/projects");
  
  // ✅ This sort logic is now centralized here
  return projects.sort((a, b) => {
    if (!a.metadata.publishedAt || !b.metadata.publishedAt) return 0;
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });
}

// Add this new function to the end of: src/utils/utils.ts

export function getProjectBySlug(slug: string) {
  const allProjects = getAllProjects();
  const project = allProjects.find((p) => p.slug === slug);
  return project;
}