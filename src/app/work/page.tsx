import {
  Column,
  Meta,
  Schema,
  Heading,
  Text,
  RevealFx,
  Flex,
  Line,
} from "@once-ui-system/core";
import { baseURL, person, work } from "../../resources";
import { getAllProjects } from "../../utils/utils";
import WorkPageClient from "../../components/work/WorkPageClient";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: "/images/og/home.jpg",
    path: work.path,
  });
}

export default async function Work() {
  const allProjects = getAllProjects();
  
  // ✅ START: NEW LOGIC FOR FILTERING AND RANKING
  // Filter projects into two groups based on the 'featured' flag
  const featuredProjects = allProjects
    .filter((p) => p.metadata.featured)
    .sort((a, b) => a.metadata.order! - b.metadata.order!);

  const otherProjects = allProjects
    .filter((p) => !p.metadata.featured)
    .sort((a, b) => a.metadata.order! - b.metadata.order!);
  // ✅ END: NEW LOGIC FOR FILTERING AND RANKING

  return (
    <WorkPageClient 
      featuredProjects={featuredProjects}
      otherProjects={otherProjects}
    />
  );
}