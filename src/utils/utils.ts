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
  // ✅ REMOVED: Date sorting is no longer needed here
  return getMDXData("src/app/work/projects");
}

export function getProjectBySlug(slug: string): MdxContent | undefined {
  const allProjects = getAllProjects();
  return allProjects.find((p) => p.slug === slug);
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