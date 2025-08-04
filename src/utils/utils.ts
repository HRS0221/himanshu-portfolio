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
  status?: string;
  completionDate?: string;
};

export type MdxContent = { metadata: Metadata; slug: string; content: string };

// Article type for LinkedIn articles
export type ArticleItem = {
  title: string;
  image: string;
  link: string;
  publishedAt: string;
  slug: string;
};

// Achievement type for about section
export type Achievement = {
  title: string;
  description: string;
  date?: string;
  link?: string;
};

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
      status: data.status || "in-progress", // Default to in-progress
      completionDate: data.completionDate || "",
    };
    return { metadata, slug, content };
  });
}

export function getAllProjects(): MdxContent[] {
  try {
    const projects = getMDXData("src/app/work/projects");
    
    // Sort by publishedAt date (newest first)
    return projects.sort((a, b) => {
      const dateA = new Date(a.metadata.publishedAt);
      const dateB = new Date(b.metadata.publishedAt);
      return dateB.getTime() - dateA.getTime();
    });
  } catch (error) {
    console.error('Error getting projects:', error);
    return [];
  }
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
  return articlesData.items.map((article: ArticleItem) => ({
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

// Function to automatically determine work status
export const getWorkStatus = () => {
  // Import the data dynamically to avoid circular dependencies
  const { articles } = require('../resources/content');
  
  const focusAreas = [
    {
      id: "gate-preparation",
      title: "GATE 2026 Preparation",
      description: "Intensive preparation for Graduate Aptitude Test in Engineering 2026, focusing on Data Science and Artificial Intelligence paper.",
      icon: "book",
      // Status logic: Always active until GATE 2026
      getStatus: () => {
        const gateDate = new Date('2026-02-01'); // Approximate GATE date
        const now = new Date();
        return now < gateDate ? "Active" : "Completed";
      }
    },
    {
      id: "computer-vision",
      title: "Computer Vision Projects",
      description: "Developing real-time object detection and image processing solutions using YOLO and deep learning frameworks.",
      icon: "eye",
      // Status logic: Check recent computer vision projects
      getStatus: () => {
        // Based on your vehicle detection project status
        return "Ongoing"; // Since you have active CV projects
      }
    },
    {
      id: "cloud-engineering",
      title: "Cloud Data Engineering",
      description: "Building scalable data pipelines and analytics solutions using AWS services and modern data engineering practices.",
      icon: "globe",
      // Status logic: Check if cloud projects exist
      getStatus: () => {
        // Based on your data engineering project
        return "Learning"; // Since it's a learning area
      }
    },
    {
      id: "technical-writing",
      title: "Technical Writing",
      description: "Creating educational content on machine learning and data science concepts through LinkedIn articles and documentation.",
      icon: "document",
      // Status logic: Check recent article activity
      getStatus: () => {
        // Check if there are recent articles (within last 30 days)
        const recentArticles = articles.items.filter((article: ArticleItem) => {
          const articleDate = new Date(article.publishedAt);
          const thirtyDaysAgo = new Date();
          thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
          return articleDate > thirtyDaysAgo;
        });
        
        return recentArticles.length > 0 ? "Active" : "Paused";
      }
    }
  ];

  return focusAreas.map(area => ({
    icon: area.icon,
    title: area.title,
    description: area.description,
    status: area.getStatus()
  }));
};

// Function to calculate stats from About section data
export const calculateStatsFromData = async () => {
  // Import the data dynamically to avoid circular dependencies
  const { articles, about } = await import('../resources/content');
  
  // Calculate articles count
  const articlesCount = articles.items.length;
  
  // Calculate hackathons count from achievements - check for hackathon/hackathons in title or description
  const hackathonsCount = about.achievements.items.filter((achievement: Achievement) => {
    const titleLower = achievement.title.toLowerCase();
    const descriptionLower = achievement.description.toLowerCase();
    
    return (titleLower.includes('hackathon') || 
            titleLower.includes('hackathons') ||
            descriptionLower.includes('hackathon') || 
            descriptionLower.includes('hackathons'));
  }).length;
  
  // Calculate certifications count
  const certificationsCount = about.credentials.items.length;
  
  // ✅ AUTO-FETCH: Count completed projects from MDX files
  const allProjects = getAllProjects();
  const completedProjectsCount = allProjects.filter(project => 
    project.metadata.status === "completed"
  ).length;
  
  return [
    {
      number: `${articlesCount}+`,
      label: "Articles Published",
      description: "AI & ML insights on LinkedIn",
      icon: "✍️"
    },
    {
      number: hackathonsCount.toString(),
      label: "National Hackathons",
      description: "SIH 2022, SUNHACKS 2022",
      icon: "🏆"
    },
    {
      number: `${certificationsCount}+`,
      label: "Certifications",
      description: "DataCamp, Google",
      icon: "🎓"
    },
    {
      number: `${completedProjectsCount}+`,
      label: "Projects Completed",
      description: "AI, ML & Data Science",
      icon: "🚀"
    },
  ];
};

