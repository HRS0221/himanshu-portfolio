// Complete corrected code for: src/components/work/Projects.tsx

import { Column } from "@once-ui-system/core";
import { ProjectCard } from "../index";
import { MdxContent } from "../../utils/utils";

interface ProjectsProps {
  projects: MdxContent[];
  range?: [number, number?];
}

export function Projects({ projects, range }: ProjectsProps) {
  // ✅ FIX: Add this safety check at the top of the function.
  // If `projects` is not a valid array, render nothing and stop.
  if (!Array.isArray(projects) || projects.length === 0) {
    return null;
  }

  // The rest of your code will now only run if `projects` is a valid array.
  const sortedProjects = projects.sort((a, b) => {
    if (!a.metadata.publishedAt || !b.metadata.publishedAt) return 0;
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`work/${post.slug}`}
          images={post.metadata.images || []}
          title={post.metadata.title}
          description={post.metadata.summary || ""}
          content={post.content || ""}
          avatars={
            post.metadata.team?.map((member) => ({ src: member.avatar })) || []
          }
          link={post.metadata.link || ""}
        />
      ))}
    </Column>
  );
}
