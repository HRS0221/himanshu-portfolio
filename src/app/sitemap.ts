// Complete corrected code for: src/app/sitemap.ts

import { getAllArticles, getAllProjects } from "../utils/utils";
import { baseURL, routes as routesConfig, article, work } from "../resources";

export default async function sitemap() {
  // Use getAllArticles to fetch article posts
  const articles = getAllArticles().map((post) => ({
    url: `${baseURL}${article.path}/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt).toISOString(),
  }));

  // Use getAllProjects to fetch work projects
  const projects = getAllProjects().map((post) => ({
    url: `${baseURL}${work.path}/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt).toISOString(),
  }));

  // Your original logic for static routes
  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route as keyof typeof routesConfig]
  );

  const routes = activeRoutes.map((route) => ({
    url: `${baseURL}${route === "/" ? "" : route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...articles, ...projects];
}
