import { getFeaturedProjects } from "../../utils/server-utils";
import FeaturedProjects from "./FeaturedProjects";

export default function FeaturedProjectsWrapper() {
  const featuredProjects = getFeaturedProjects();
  
  return <FeaturedProjects projects={featuredProjects} />;
} 