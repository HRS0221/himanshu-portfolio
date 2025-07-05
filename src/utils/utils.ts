import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { articles as articlesData } from "../resources";

export type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

// ✅ ADDED: 'featured' and 'order' to the Metadata type
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
  featured?: boolean;
  order?: number;
};

export type MdxContent = { metadata: Metadata; slug: string; content: string };

function getMDXFiles(dir: string) {
  const fullPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullPath)) {
    return [];
  }
  return fs
    .readdirSync(fullPath)
    .filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return matter(rawContent);
}

function getMDXData(dir: string): MdxContent[] {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { data, content } = readMDXFile(path.join(process.cwd(), dir, file));
    const slug = path.basename(file, path.extname(file));
    
    // ✅ ADDED: Logic to read the new properties
    const metadata: Metadata = {
      title: data.title || "Untitled Project",
      publishedAt: data.publishedAt || new Date().toISOString(),
      summary: data.summary || "",
      image: data.image || "",
      images: data.images || [],
      tag: data.tag || "",
      team: data.team || [],
      link: data.link || "",
      outputLink: data.outputLink || "",
      techStack: data.techStack || [],
      featured: data.featured || false, // Default to not featured
      order: data.order || 999,      // Default to a high number to appear last
    };
    return { metadata, slug, content };
  });
}

export function getAllProjects(): MdxContent[] {
  const projects = getMDXData("src/app/work/projects");
  
  // Sort by publishedAt date (newest first)
  return projects.sort((a, b) => {
    const dateA = new Date(a.metadata.publishedAt);
    const dateB = new Date(b.metadata.publishedAt);
    return dateB.getTime() - dateA.getTime();
  });
}

export function getProjectBySlug(slug: string): MdxContent | undefined {
  const allProjects = getAllProjects();
  return allProjects.find((p) => p.slug === slug);
}

export function getMostRecentProject(): MdxContent | null {
  const projects = getAllProjects();
  return projects.length > 0 ? projects[0] : null;
}

export function getAllArticles() {
  return articlesData.items.map((article: any) => ({
    slug: article.slug,
    metadata: {
      title: article.title,
      publishedAt: article.publishedAt,
      image: article.image,
      link: article.link,
    },
    content: "",
  }));
}

// Server-side function to count project files
export const getProjectsCount = () => {
  try {
    const fs = require('fs');
    const path = require('path');
    const projectsDir = path.join(process.cwd(), 'src/app/work/projects');
    if (fs.existsSync(projectsDir)) {
      const files = fs.readdirSync(projectsDir);
      return files.filter((file: string) => file.endsWith('.mdx')).length;
    }
  } catch (error) {
    console.error('Error counting projects:', error);
  }
  return 7; // Fallback count
};

// Function to calculate stats from About section data
export const calculateStatsFromData = (projectsCount?: number) => {
  // Import the data dynamically to avoid circular dependencies
  const { articles, about } = require('../resources/content');
  
  // Calculate articles count
  const articlesCount = articles.items.length;
  
  // Calculate hackathons count from achievements - only count participation, not organization
  const hackathonsCount = about.achievements.items.filter((achievement: any) => 
    (achievement.title.toLowerCase().includes('hackathon') || 
     achievement.title.toLowerCase().includes('sih') ||
     achievement.title.toLowerCase().includes('sunhacks')) &&
    !achievement.title.toLowerCase().includes('lead') &&
    !achievement.title.toLowerCase().includes('organiz')
  ).length;
  
  // Calculate certifications count
  const certificationsCount = about.credentials.items.length;
  
  // Use provided projects count or fallback to 7
  const finalProjectsCount = projectsCount || 7;
  
  return [
    {
      number: `${articlesCount}+`,
      label: "Articles Published",
      description: "AI & ML insights on LinkedIn"
    },
    {
      number: hackathonsCount.toString(),
      label: "National Hackathons",
      description: "SIH 2022, SUNHACKS 2022"
    },
    {
      number: `${certificationsCount}+`,
      label: "Certifications",
      description: "DataCamp, Google"
    },
    {
      number: `${finalProjectsCount}+`,
      label: "Projects Completed",
      description: "AI, ML & Data Science"
    },
  ];
};

